(ns eshemozhno.location
  (:require-macros
   [schema.macros :as schm :refer [defschema]]
   [cljs.core.async.macros :refer (go)])
  (:require
   [cljs.core.async :as a]
   [schema.core :as sch :include-macros true]))

(enable-console-print!)

;; location:
;; 1: GeoIP-based (if there is a connection) - cache this
;; 2: GPS-based (if it's allowed)

(defschema GeonamesID
  sch/Int)

(defschema Coords
  {:lat sch/Num
   :lng sch/Num})

;; returns channel with (sch/maybe Coords)
(defn try-geolocate
  []
  (when-let [geoloc (.-geolocation js/navigator)]
    (let [resp-c (a/chan)]
      (go
        (.getCurrentPosition
         geoloc
         (fn [pos] (go (a/>! resp-c {:lat (-> pos .-coords .-latitude)
                                     :lng (-> pos .-coords .-longitude)})))
         (fn [err] (go (a/>! resp-c nil)))
         #js {:enable-high-accuracy false
              :timeout (* 1000 30)
              :maximum-age (* 1000 60 60)}))
      resp-c)))

(schm/defn get-city :- (sch/maybe GeonamesID)
  []
  (go
    (prn "geoloc" (<! (try-geolocate)))))

#_(get-city)
