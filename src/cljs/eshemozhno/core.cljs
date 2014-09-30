(ns eshemozhno.core
  (:require-macros
   [schema.macros :refer [defschema]]
   [cljs.core.async.macros :refer (go)])
  (:require
   [cljs.core.async :refer (timeout)]
   [dommy.utils :as utils]
   [dommy.core :as dommy]
   [schema.core :as s :include-macros true]
   [om.core :as om]
   [om-tools.core :refer-macros [defcomponent defcomponentk]]
   [om-tools.dom :as dom :include-macros true]
   [om.dom :as dom-om]

   [figwheel.client :as fw :include-macros true])
  (:use-macros
    [dommy.macros :only [node sel sel1]]))

(enable-console-print!)

(defn ask-server-location []
  nil)

(defn swap-body-color []
  (let [body (sel1 :body)]
    (if (dommy/has-class? body "green")
      (do (dommy/remove-class! body "green")
          (dommy/add-class! body "red"))
      (do (dommy/remove-class! body "red")
          (dommy/add-class! body "green")))))

(defschema AppState
  {:city s/Str
   :buying-allowed s/Bool
   :now s/Inst})

(defonce app-state
  (atom {:city "Saint Petersburg"
         :buying-allowed true
         :now "foo"}))

(def cities
  {"Saint Petersburg" {:noun "Санкт-Петербург"
                       :in "в Санкт-Петербурге"
                       :from "11:00"
                       :until "23:00"}})

(defcomponentk city-selector
  [[:data city buying-allowed :as cursor] owner]
  (render [_]
    (dom/span {:class "city-select"
               :on-click #(om/transact! cursor :buying-allowed not)}
      (-> cities (get city) :in))))

(defcomponentk root-component
  [[:data city buying-allowed :as cursor] :- AppState owner]
  (did-update [_ prev-props _]
    (let [prev-buying-allowed (:buying-allowed prev-props)]
      (if (not= prev-buying-allowed buying-allowed)
        (swap-body-color))))
  (render [_]
    (dom/section {:class "fact"}
      (dom/div {:class "status"}
        (if buying-allowed
          "ещё можно"
          "уже нельзя"))
      (dom/div {:class "caption"}
        "купить алкоголь "
        (->city-selector cursor)
        " (до " (-> cities (get city) :from) ")"))))

(om/root
 root-component
 app-state
 {:target (sel1 :#app)})

(fw/watch-and-reload
 :jsload-callback (fn [] (print "reloaded"))) ;; optional callback


;; Local Variables:
;; mode: clojure
;; eval: (put-clojure-indent 'render 1)
;; eval: (put-clojure-indent 'did-update 1)
;; eval: (put-clojure-indent 'section 1)
;; eval: (put-clojure-indent 'div 1)
;; eval: (put-clojure-indent 'span 1)
;; End:
