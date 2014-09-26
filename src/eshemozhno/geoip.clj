(ns eshemozhno.geoip
  (:use plumbing.core)
  (:import [java.io File]
           [java.net InetAddress])
  (:import [com.maxmind.geoip2 DatabaseReader DatabaseReader$Builder]
           [com.maxmind.geoip2.model CityResponse]
           [com.maxmind.geoip2.exception AddressNotFoundException]))

(defn read-db [geoip-path]
  (->> geoip-path
       File.
       DatabaseReader$Builder.
       .build))

(defn query-city [db ip-str]
  (try (->> (InetAddress/getByName ip-str)
            (.city db)
            .getCity
            .getName)
       (catch AddressNotFoundException e nil)))
