(defproject eshemozhno "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "CC0"
            :url "https://creativecommons.org/publicdomain/zero/1.0/legalcode"}
  :dependencies [[org.clojure/clojure "1.6.0"]

                 [prismatic/plumbing "0.3.3"]
                 [prismatic/fnhouse "0.1.1"]
                 [clj-http "0.9.0"]
                 [ring/ring-core "1.0.0-RC1"]
                 [ring/ring-jetty-adapter "1.0.0-RC1"] ;; !
                 [ring/ring-json "0.2.0"]              ;; !

                 [com.maxmind.geoip2/geoip2 "0.10.0"]
                 ]
  :main ^:skip-aot eshemozhno.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
