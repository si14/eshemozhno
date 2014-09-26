(ns eshemozhno.core
  (:require
   [figwheel.client :as fw :include-macros true]))

(enable-console-print!)

(println "You can change this line an see the changes in the dev console")

(fw/watch-and-reload
  ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
  :jsload-callback (fn [] (print "reloaded"))) ;; optional callback

(.log js/console "Hello world!")
