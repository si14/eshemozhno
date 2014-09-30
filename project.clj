(defproject eshemozhno "0.1.0-SNAPSHOT"
  :description "An app for telling if you still can buy alcoholic beverages in a distant corner of Mother Russia."
  :source-paths ["src/clj"]
  :url "http://github.com/si14/eshemozhno"
  :license {:name "CC0"
            :url "https://creativecommons.org/publicdomain/zero/1.0/legalcode"}
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2356"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 [prismatic/plumbing "0.3.3"]
                 [prismatic/fnhouse "0.1.1"]
                 [clj-http "1.0.0"]
                 [ring/ring-core "1.3.1"]
                 [ring/ring-jetty-adapter "1.3.1"]
                 [ring/ring-json "0.3.1"]

                 [com.maxmind.geoip2/geoip2 "0.10.0"]

                 [om "0.7.3"]
                 [prismatic/dommy "0.1.3"]
                 [prismatic/om-tools "0.3.3" :exclusions [org.clojure/clojure]]
                 [com.andrewmcveigh/cljs-time "0.2.1"]
                 [secretary "1.2.1"]

                 [figwheel "0.1.4-SNAPSHOT"]]

  :main ^:skip-aot eshemozhno.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :jvm-opts ["-Xmx512M"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs/eshemozhno" "src/cljs/figwheel"]
              :compiler {:output-to "resources/public/js/eshemozhno.js"
                         :output-dir "resources/public/js/out"
                         :optimizations :none
                         :source-map true}}]}
  :figwheel {
    :http-server-root "public"
    :port 3449
    :css-dirs ["resources/public/css"]})
