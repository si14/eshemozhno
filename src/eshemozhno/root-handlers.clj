(ns eshemozhno.root-handlers
  "A set of handlers for adding, viewing, searching for,
   and deleting guestbook entries"
  (:use plumbing.core)
  (:require
   [schema.core :as s]
   [clojure.string :as str]
   [eshemozhno.schemas :as schemas]))

(set! *warn-on-reflection* true)

(defnk index
  "Index page"
  {:responses {200 String}
   :path "/"
   :method :get}
  [request]
  (prn request)
  {:body "Hello world"})

(set! *warn-on-reflection* false)
