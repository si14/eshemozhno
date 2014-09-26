// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__10202,args){var map__10204 = p__10202;var map__10204__$1 = ((cljs.core.seq_QMARK_.call(null,map__10204))?cljs.core.apply.call(null,cljs.core.hash_map,map__10204):map__10204);var debug = cljs.core.get.call(null,map__10204__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__10202,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__10202,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__10205){
var p__10202 = cljs.core.first(arglist__10205);
var args = cljs.core.rest(arglist__10205);
return log__delegate(p__10202,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__10206){var map__10208 = p__10206;var map__10208__$1 = ((cljs.core.seq_QMARK_.call(null,map__10208))?cljs.core.apply.call(null,cljs.core.hash_map,map__10208):map__10208);var websocket_url = cljs.core.get.call(null,map__10208__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__10209,callback){var map__10211 = p__10209;var map__10211__$1 = ((cljs.core.seq_QMARK_.call(null,map__10211))?cljs.core.apply.call(null,cljs.core.hash_map,map__10211):map__10211);var msg = map__10211__$1;var dependency_file = cljs.core.get.call(null,map__10211__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__10211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__10211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__10211,map__10211__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__10211,map__10211__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__10212,p__10213){var map__10216 = p__10212;var map__10216__$1 = ((cljs.core.seq_QMARK_.call(null,map__10216))?cljs.core.apply.call(null,cljs.core.hash_map,map__10216):map__10216);var opts = map__10216__$1;var url_rewriter = cljs.core.get.call(null,map__10216__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__10217 = p__10213;var map__10217__$1 = ((cljs.core.seq_QMARK_.call(null,map__10217))?cljs.core.apply.call(null,cljs.core.hash_map,map__10217):map__10217);var d = map__10217__$1;var file = cljs.core.get.call(null,map__10217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__10218,p__10219){var map__10261 = p__10218;var map__10261__$1 = ((cljs.core.seq_QMARK_.call(null,map__10261))?cljs.core.apply.call(null,cljs.core.hash_map,map__10261):map__10261);var opts = map__10261__$1;var on_jsload = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__10261__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__10262 = p__10219;var map__10262__$1 = ((cljs.core.seq_QMARK_.call(null,map__10262))?cljs.core.apply.call(null,cljs.core.hash_map,map__10262):map__10262);var files = cljs.core.get.call(null,map__10262__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files){
return (function (state_10285){var state_val_10286 = (state_10285[(1)]);if((state_val_10286 === (6)))
{var inst_10267 = (state_10285[(7)]);var inst_10276 = (state_10285[(2)]);var inst_10277 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10278 = [inst_10267];var inst_10279 = (new cljs.core.PersistentVector(null,1,(5),inst_10277,inst_10278,null));var inst_10280 = cljs.core.apply.call(null,on_jsload,inst_10279);var state_10285__$1 = (function (){var statearr_10287 = state_10285;(statearr_10287[(8)] = inst_10276);
return statearr_10287;
})();var statearr_10288_10302 = state_10285__$1;(statearr_10288_10302[(2)] = inst_10280);
(statearr_10288_10302[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10286 === (5)))
{var inst_10283 = (state_10285[(2)]);var state_10285__$1 = state_10285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10285__$1,inst_10283);
} else
{if((state_val_10286 === (4)))
{var state_10285__$1 = state_10285;var statearr_10289_10303 = state_10285__$1;(statearr_10289_10303[(2)] = null);
(statearr_10289_10303[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10286 === (3)))
{var inst_10267 = (state_10285[(7)]);var inst_10270 = console.debug("Figwheel: loaded these files");var inst_10271 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10267);var inst_10272 = cljs.core.prn_str.call(null,inst_10271);var inst_10273 = console.log(inst_10272);var inst_10274 = cljs.core.async.timeout.call(null,(10));var state_10285__$1 = (function (){var statearr_10290 = state_10285;(statearr_10290[(9)] = inst_10273);
(statearr_10290[(10)] = inst_10270);
return statearr_10290;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10285__$1,(6),inst_10274);
} else
{if((state_val_10286 === (2)))
{var inst_10267 = (state_10285[(7)]);var inst_10267__$1 = (state_10285[(2)]);var inst_10268 = cljs.core.not_empty.call(null,inst_10267__$1);var state_10285__$1 = (function (){var statearr_10291 = state_10285;(statearr_10291[(7)] = inst_10267__$1);
return statearr_10291;
})();if(cljs.core.truth_(inst_10268))
{var statearr_10292_10304 = state_10285__$1;(statearr_10292_10304[(1)] = (3));
} else
{var statearr_10293_10305 = state_10285__$1;(statearr_10293_10305[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10286 === (1)))
{var inst_10263 = before_jsload.call(null,files);var inst_10264 = figwheel.client.add_request_urls.call(null,opts,files);var inst_10265 = figwheel.client.load_all_js_files.call(null,inst_10264);var state_10285__$1 = (function (){var statearr_10294 = state_10285;(statearr_10294[(11)] = inst_10263);
return statearr_10294;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10285__$1,(2),inst_10265);
} else
{return null;
}
}
}
}
}
}
});})(c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files))
;return ((function (switch__6313__auto__,c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_10298 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10298[(0)] = state_machine__6314__auto__);
(statearr_10298[(1)] = (1));
return statearr_10298;
});
var state_machine__6314__auto____1 = (function (state_10285){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_10285);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e10299){if((e10299 instanceof Object))
{var ex__6317__auto__ = e10299;var statearr_10300_10306 = state_10285;(statearr_10300_10306[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10307 = state_10285;
state_10285 = G__10307;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_10285){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_10285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files))
})();var state__6380__auto__ = (function (){var statearr_10301 = f__6379__auto__.call(null);(statearr_10301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_10301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__,map__10261,map__10261__$1,opts,on_jsload,before_jsload,map__10262,map__10262__$1,files))
);
return c__6378__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__10308,link_href){var map__10310 = p__10308;var map__10310__$1 = ((cljs.core.seq_QMARK_.call(null,map__10310))?cljs.core.apply.call(null,cljs.core.hash_map,map__10310):map__10310);var request_url = cljs.core.get.call(null,map__10310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__10310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__,parent){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__,parent){
return (function (state_10331){var state_val_10332 = (state_10331[(1)]);if((state_val_10332 === (2)))
{var inst_10328 = (state_10331[(2)]);var inst_10329 = parent.removeChild(orig_link);var state_10331__$1 = (function (){var statearr_10333 = state_10331;(statearr_10333[(7)] = inst_10328);
return statearr_10333;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10331__$1,inst_10329);
} else
{if((state_val_10332 === (1)))
{var inst_10326 = cljs.core.async.timeout.call(null,(200));var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10331__$1,(2),inst_10326);
} else
{return null;
}
}
});})(c__6378__auto__,parent))
;return ((function (switch__6313__auto__,c__6378__auto__,parent){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_10337 = [null,null,null,null,null,null,null,null];(statearr_10337[(0)] = state_machine__6314__auto__);
(statearr_10337[(1)] = (1));
return statearr_10337;
});
var state_machine__6314__auto____1 = (function (state_10331){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_10331);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e10338){if((e10338 instanceof Object))
{var ex__6317__auto__ = e10338;var statearr_10339_10341 = state_10331;(statearr_10339_10341[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10338;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10342 = state_10331;
state_10331 = G__10342;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_10331){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_10331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__,parent))
})();var state__6380__auto__ = (function (){var statearr_10340 = f__6379__auto__.call(null);(statearr_10340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_10340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__,parent))
);
return c__6378__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__10343){var map__10345 = p__10343;var map__10345__$1 = ((cljs.core.seq_QMARK_.call(null,map__10345))?cljs.core.apply.call(null,cljs.core.hash_map,map__10345):map__10345);var f_data = map__10345__$1;var request_url = cljs.core.get.call(null,map__10345__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__10345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__10346,files_msg){var map__10368 = p__10346;var map__10368__$1 = ((cljs.core.seq_QMARK_.call(null,map__10368))?cljs.core.apply.call(null,cljs.core.hash_map,map__10368):map__10368);var opts = map__10368__$1;var on_cssload = cljs.core.get.call(null,map__10368__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__10369_10389 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__10370_10390 = null;var count__10371_10391 = (0);var i__10372_10392 = (0);while(true){
if((i__10372_10392 < count__10371_10391))
{var f_10393 = cljs.core._nth.call(null,chunk__10370_10390,i__10372_10392);figwheel.client.reload_css_file.call(null,f_10393);
{
var G__10394 = seq__10369_10389;
var G__10395 = chunk__10370_10390;
var G__10396 = count__10371_10391;
var G__10397 = (i__10372_10392 + (1));
seq__10369_10389 = G__10394;
chunk__10370_10390 = G__10395;
count__10371_10391 = G__10396;
i__10372_10392 = G__10397;
continue;
}
} else
{var temp__4126__auto___10398 = cljs.core.seq.call(null,seq__10369_10389);if(temp__4126__auto___10398)
{var seq__10369_10399__$1 = temp__4126__auto___10398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10369_10399__$1))
{var c__4406__auto___10400 = cljs.core.chunk_first.call(null,seq__10369_10399__$1);{
var G__10401 = cljs.core.chunk_rest.call(null,seq__10369_10399__$1);
var G__10402 = c__4406__auto___10400;
var G__10403 = cljs.core.count.call(null,c__4406__auto___10400);
var G__10404 = (0);
seq__10369_10389 = G__10401;
chunk__10370_10390 = G__10402;
count__10371_10391 = G__10403;
i__10372_10392 = G__10404;
continue;
}
} else
{var f_10405 = cljs.core.first.call(null,seq__10369_10399__$1);figwheel.client.reload_css_file.call(null,f_10405);
{
var G__10406 = cljs.core.next.call(null,seq__10369_10399__$1);
var G__10407 = null;
var G__10408 = (0);
var G__10409 = (0);
seq__10369_10389 = G__10406;
chunk__10370_10390 = G__10407;
count__10371_10391 = G__10408;
i__10372_10392 = G__10409;
continue;
}
}
} else
{}
}
break;
}
var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload){
return (function (state_10379){var state_val_10380 = (state_10379[(1)]);if((state_val_10380 === (2)))
{var inst_10375 = (state_10379[(2)]);var inst_10376 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_10377 = on_cssload.call(null,inst_10376);var state_10379__$1 = (function (){var statearr_10381 = state_10379;(statearr_10381[(7)] = inst_10375);
return statearr_10381;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10379__$1,inst_10377);
} else
{if((state_val_10380 === (1)))
{var inst_10373 = cljs.core.async.timeout.call(null,(100));var state_10379__$1 = state_10379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10379__$1,(2),inst_10373);
} else
{return null;
}
}
});})(c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload))
;return ((function (switch__6313__auto__,c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_10385 = [null,null,null,null,null,null,null,null];(statearr_10385[(0)] = state_machine__6314__auto__);
(statearr_10385[(1)] = (1));
return statearr_10385;
});
var state_machine__6314__auto____1 = (function (state_10379){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_10379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e10386){if((e10386 instanceof Object))
{var ex__6317__auto__ = e10386;var statearr_10387_10410 = state_10379;(statearr_10387_10410[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10386;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10411 = state_10379;
state_10379 = G__10411;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_10379){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_10379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload))
})();var state__6380__auto__ = (function (){var statearr_10388 = f__6379__auto__.call(null);(statearr_10388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_10388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__,map__10368,map__10368__$1,opts,on_cssload))
);
return c__6378__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__10412){var map__10417 = p__10412;var map__10417__$1 = ((cljs.core.seq_QMARK_.call(null,map__10417))?cljs.core.apply.call(null,cljs.core.hash_map,map__10417):map__10417);var opts = map__10417__$1;var on_compile_fail = cljs.core.get.call(null,map__10417__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__10417__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__10417__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__10417__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__10418 = cljs.core._EQ_;var expr__10419 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__10418.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__10419)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10418.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__10419)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__10418.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__10419)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__10417,map__10417__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj10424 = {"detail":url};return obj10424;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__10425){var map__10427 = p__10425;var map__10427__$1 = ((cljs.core.seq_QMARK_.call(null,map__10427))?cljs.core.apply.call(null,cljs.core.hash_map,map__10427):map__10427);var class$ = cljs.core.get.call(null,map__10427__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__10427__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__10428){var map__10434 = p__10428;var map__10434__$1 = ((cljs.core.seq_QMARK_.call(null,map__10434))?cljs.core.apply.call(null,cljs.core.hash_map,map__10434):map__10434);var ed = map__10434__$1;var exception_data = cljs.core.get.call(null,map__10434__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__10434__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__10435_10439 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__10436_10440 = null;var count__10437_10441 = (0);var i__10438_10442 = (0);while(true){
if((i__10438_10442 < count__10437_10441))
{var msg_10443 = cljs.core._nth.call(null,chunk__10436_10440,i__10438_10442);console.log(msg_10443);
{
var G__10444 = seq__10435_10439;
var G__10445 = chunk__10436_10440;
var G__10446 = count__10437_10441;
var G__10447 = (i__10438_10442 + (1));
seq__10435_10439 = G__10444;
chunk__10436_10440 = G__10445;
count__10437_10441 = G__10446;
i__10438_10442 = G__10447;
continue;
}
} else
{var temp__4126__auto___10448 = cljs.core.seq.call(null,seq__10435_10439);if(temp__4126__auto___10448)
{var seq__10435_10449__$1 = temp__4126__auto___10448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10435_10449__$1))
{var c__4406__auto___10450 = cljs.core.chunk_first.call(null,seq__10435_10449__$1);{
var G__10451 = cljs.core.chunk_rest.call(null,seq__10435_10449__$1);
var G__10452 = c__4406__auto___10450;
var G__10453 = cljs.core.count.call(null,c__4406__auto___10450);
var G__10454 = (0);
seq__10435_10439 = G__10451;
chunk__10436_10440 = G__10452;
count__10437_10441 = G__10453;
i__10438_10442 = G__10454;
continue;
}
} else
{var msg_10455 = cljs.core.first.call(null,seq__10435_10449__$1);console.log(msg_10455);
{
var G__10456 = cljs.core.next.call(null,seq__10435_10449__$1);
var G__10457 = null;
var G__10458 = (0);
var G__10459 = (0);
seq__10435_10439 = G__10456;
chunk__10436_10440 = G__10457;
count__10437_10441 = G__10458;
i__10438_10442 = G__10459;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3637__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__10460){var map__10462 = p__10460;var map__10462__$1 = ((cljs.core.seq_QMARK_.call(null,map__10462))?cljs.core.apply.call(null,cljs.core.hash_map,map__10462):map__10462);var opts = map__10462__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__10460 = null;if (arguments.length > 0) {
  p__10460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__10460);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__10463){
var p__10460 = cljs.core.seq(arglist__10463);
return watch_and_reload__delegate(p__10460);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map