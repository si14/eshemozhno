(ns eshemozhno.core
  (:require-macros
   [cljs.core.async.macros :refer (go)])
  (:require
   [dommy.utils :as utils]
   [dommy.core :as dommy]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]

   [figwheel.client :as fw :include-macros true])
  (:use-macros
    [dommy.macros :only [node sel sel1]]))

(enable-console-print!)

(def app-state (atom {:text ""}))

(om/root
 (fn [app owner]
   (reify
     om/IWillMount
     (will-mount [_]
       (go (let [response (<! (http/get
                               (str "/welcome-message")))]
             (if (= (:status response)
                    200)
               (om/update! app :text (:body response))
               (om/update! app :text "Server error")))))
     om/IRender
     (render [_]
       (dom/h1 nil (:text app)))))
 app-state
 {:target (. js/document (sel1 :#app))})

(fw/watch-and-reload
 :jsload-callback (fn [] (print "reloaded"))) ;; optional callback

(.log js/console "Hello world!")
