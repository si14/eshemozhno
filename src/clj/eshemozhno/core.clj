(ns eshemozhno.core
  (:use plumbing.core)
  (:require
   [ring.adapter.jetty :as jetty]
   [fnhouse.docs :as docs]
   [fnhouse.handlers :as handlers]
   [fnhouse.middleware :as middleware]
   [fnhouse.routes :as routes]
   [eshemozhno.api :as api]
   [eshemozhno.root-handlers :as root-handlers]
   [eshemozhno.ring :as ring]
   [eshemozhno.schemas :as schemas]
   [eshemozhno.geoip :as geoip])
  (:gen-class))

(defn attach-docs [resources prefix->ns-sym]
  (let [proto-handlers (-> prefix->ns-sym
                           (assoc "docs" 'fnhouse.docs)
                           handlers/nss->proto-handlers)
        all-docs (docs/all-docs (map :info proto-handlers))]
    (-> resources
        (assoc :api-docs all-docs)
        ((handlers/curry-resources proto-handlers)))))

(defn wrapped-root-handler
  "Take the resources, partially apply them to the handlers in
   the 'guesthouse.guestbook namespace, wrap each with a custom
   coercing middleware, and then compile them into a root handler
   that will route requests to the appropriate underlying handler.
   Then, wrap the root handler in some standard ring middleware.
   When served, the handlers will be  hosted at the 'guestbook' prefix."
  [resources]
  (->> (attach-docs resources {"" 'eshemozhno.root-handlers
                               "api" 'eshemozhno.api})
       routes/root-handler
       ring/ring-middleware))

(defn start-api
  "Take resources and server options, and spin up a server with jetty"
  [resources options]
  (-> resources
      wrapped-root-handler
      (jetty/run-jetty options)))

(def jetty-atom (atom nil))

(defn start []
  (let [guestbook (atom [])
        config {:port 8003
                :host "127.0.0.1"
                :geoip-path "/tmp/geoip/GeoLite2-City.mmdb"}
        config (assoc config :join? false)]
    (reset! jetty-atom
            (start-api {:geoip-db (geoip/read-db (:geoip-path config))}
                       config))))

(defn stop []
  (.stop @jetty-atom))

(defn restart []
  (if-not (nil? @jetty-atom) (stop))
  (start))

(defn -main
  "Main entry point"
  [& args]
  (start))
