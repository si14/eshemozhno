(defproject eshemozhno "0.1.0-SNAPSHOT"
  :description "An app for telling if you still can buy alcoholic beverages in a distant corner of Mother Russia."
  :url "http://github.com/si14/eshemozhno"
  :license {:name "CC0"
            :url "https://creativecommons.org/publicdomain/zero/1.0/legalcode"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2356"]

                 [compojure "1.1.9"]
                 [ring "1.3.1"]
                 [prismatic/plumbing "0.3.3"]
                 [prismatic/fnhouse "0.1.1"]
                 [clj-http "0.9.0"]
                 [ring/ring-core "1.0.0-RC1"]
                 [ring/ring-jetty-adapter "1.0.0-RC1"] ;; !
                 [ring/ring-json "0.2.0"]              ;; !

                 [com.maxmind.geoip2/geoip2 "0.10.0"]

                 [figwheel "0.1.4-SNAPSHOT"]]

  :main ^:skip-aot eshemozhno.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}


  :jvm-opts ["-Xmx512M"]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]
  :figwheel {
    :http-server-root "public"
    :port 3449
    :css-dirs ["resources/public/css"]}
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs/eshemozhno" "src/cljs/figwheel"]
              :compiler {
                :output-to "resources/public/js/eshemozhno.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
