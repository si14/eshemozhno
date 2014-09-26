// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10592 = (function (f,fn_handler,meta10593){
this.f = f;
this.fn_handler = fn_handler;
this.meta10593 = meta10593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10592.cljs$lang$type = true;
cljs.core.async.t10592.cljs$lang$ctorStr = "cljs.core.async/t10592";
cljs.core.async.t10592.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10592");
});
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10594){var self__ = this;
var _10594__$1 = this;return self__.meta10593;
});
cljs.core.async.t10592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10594,meta10593__$1){var self__ = this;
var _10594__$1 = this;return (new cljs.core.async.t10592(self__.f,self__.fn_handler,meta10593__$1));
});
cljs.core.async.__GT_t10592 = (function __GT_t10592(f__$1,fn_handler__$1,meta10593){return (new cljs.core.async.t10592(f__$1,fn_handler__$1,meta10593));
});
}
return (new cljs.core.async.t10592(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10596 = buff;if(G__10596)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__10596.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10596);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10597 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10597);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10597,ret){
return (function (){return fn1.call(null,val_10597);
});})(val_10597,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___10598 = n;var x_10599 = (0);while(true){
if((x_10599 < n__4506__auto___10598))
{(a[x_10599] = (0));
{
var G__10600 = (x_10599 + (1));
x_10599 = G__10600;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10601 = (i + (1));
i = G__10601;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10605 = (function (flag,alt_flag,meta10606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10606 = meta10606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10605.cljs$lang$type = true;
cljs.core.async.t10605.cljs$lang$ctorStr = "cljs.core.async/t10605";
cljs.core.async.t10605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10605");
});})(flag))
;
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10607){var self__ = this;
var _10607__$1 = this;return self__.meta10606;
});})(flag))
;
cljs.core.async.t10605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10607,meta10606__$1){var self__ = this;
var _10607__$1 = this;return (new cljs.core.async.t10605(self__.flag,self__.alt_flag,meta10606__$1));
});})(flag))
;
cljs.core.async.__GT_t10605 = ((function (flag){
return (function __GT_t10605(flag__$1,alt_flag__$1,meta10606){return (new cljs.core.async.t10605(flag__$1,alt_flag__$1,meta10606));
});})(flag))
;
}
return (new cljs.core.async.t10605(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10611 = (function (cb,flag,alt_handler,meta10612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10612 = meta10612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10611.cljs$lang$type = true;
cljs.core.async.t10611.cljs$lang$ctorStr = "cljs.core.async/t10611";
cljs.core.async.t10611.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10611");
});
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10613){var self__ = this;
var _10613__$1 = this;return self__.meta10612;
});
cljs.core.async.t10611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10613,meta10612__$1){var self__ = this;
var _10613__$1 = this;return (new cljs.core.async.t10611(self__.cb,self__.flag,self__.alt_handler,meta10612__$1));
});
cljs.core.async.__GT_t10611 = (function __GT_t10611(cb__$1,flag__$1,alt_handler__$1,meta10612){return (new cljs.core.async.t10611(cb__$1,flag__$1,alt_handler__$1,meta10612));
});
}
return (new cljs.core.async.t10611(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10614_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10615_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3637__auto__ = wport;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10616 = (i + (1));
i = G__10616;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3637__auto__ = ret;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3625__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3625__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10617){var map__10619 = p__10617;var map__10619__$1 = ((cljs.core.seq_QMARK_.call(null,map__10619))?cljs.core.apply.call(null,cljs.core.hash_map,map__10619):map__10619);var opts = map__10619__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__10617 = null;if (arguments.length > 1) {
  p__10617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10617);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10620){
var ports = cljs.core.first(arglist__10620);
var p__10617 = cljs.core.rest(arglist__10620);
return alts_BANG___delegate(ports,p__10617);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10628 = (function (ch,f,map_LT_,meta10629){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10629 = meta10629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10628.cljs$lang$type = true;
cljs.core.async.t10628.cljs$lang$ctorStr = "cljs.core.async/t10628";
cljs.core.async.t10628.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10628");
});
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10631 = (function (fn1,_,meta10629,ch,f,map_LT_,meta10632){
this.fn1 = fn1;
this._ = _;
this.meta10629 = meta10629;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10632 = meta10632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10631.cljs$lang$type = true;
cljs.core.async.t10631.cljs$lang$ctorStr = "cljs.core.async/t10631";
cljs.core.async.t10631.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10631");
});})(___$1))
;
cljs.core.async.t10631.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10631.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10621_SHARP_){return f1.call(null,(((p1__10621_SHARP_ == null))?null:self__.f.call(null,p1__10621_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10633){var self__ = this;
var _10633__$1 = this;return self__.meta10632;
});})(___$1))
;
cljs.core.async.t10631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10633,meta10632__$1){var self__ = this;
var _10633__$1 = this;return (new cljs.core.async.t10631(self__.fn1,self__._,self__.meta10629,self__.ch,self__.f,self__.map_LT_,meta10632__$1));
});})(___$1))
;
cljs.core.async.__GT_t10631 = ((function (___$1){
return (function __GT_t10631(fn1__$1,___$2,meta10629__$1,ch__$2,f__$2,map_LT___$2,meta10632){return (new cljs.core.async.t10631(fn1__$1,___$2,meta10629__$1,ch__$2,f__$2,map_LT___$2,meta10632));
});})(___$1))
;
}
return (new cljs.core.async.t10631(fn1,___$1,self__.meta10629,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3625__auto__ = ret;if(cljs.core.truth_(and__3625__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10628.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10630){var self__ = this;
var _10630__$1 = this;return self__.meta10629;
});
cljs.core.async.t10628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10630,meta10629__$1){var self__ = this;
var _10630__$1 = this;return (new cljs.core.async.t10628(self__.ch,self__.f,self__.map_LT_,meta10629__$1));
});
cljs.core.async.__GT_t10628 = (function __GT_t10628(ch__$1,f__$1,map_LT___$1,meta10629){return (new cljs.core.async.t10628(ch__$1,f__$1,map_LT___$1,meta10629));
});
}
return (new cljs.core.async.t10628(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10637 = (function (ch,f,map_GT_,meta10638){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10638 = meta10638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10637.cljs$lang$type = true;
cljs.core.async.t10637.cljs$lang$ctorStr = "cljs.core.async/t10637";
cljs.core.async.t10637.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10637");
});
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10639){var self__ = this;
var _10639__$1 = this;return self__.meta10638;
});
cljs.core.async.t10637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10639,meta10638__$1){var self__ = this;
var _10639__$1 = this;return (new cljs.core.async.t10637(self__.ch,self__.f,self__.map_GT_,meta10638__$1));
});
cljs.core.async.__GT_t10637 = (function __GT_t10637(ch__$1,f__$1,map_GT___$1,meta10638){return (new cljs.core.async.t10637(ch__$1,f__$1,map_GT___$1,meta10638));
});
}
return (new cljs.core.async.t10637(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10643 = (function (ch,p,filter_GT_,meta10644){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10644 = meta10644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10643.cljs$lang$type = true;
cljs.core.async.t10643.cljs$lang$ctorStr = "cljs.core.async/t10643";
cljs.core.async.t10643.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t10643");
});
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10643.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10645){var self__ = this;
var _10645__$1 = this;return self__.meta10644;
});
cljs.core.async.t10643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10645,meta10644__$1){var self__ = this;
var _10645__$1 = this;return (new cljs.core.async.t10643(self__.ch,self__.p,self__.filter_GT_,meta10644__$1));
});
cljs.core.async.__GT_t10643 = (function __GT_t10643(ch__$1,p__$1,filter_GT___$1,meta10644){return (new cljs.core.async.t10643(ch__$1,p__$1,filter_GT___$1,meta10644));
});
}
return (new cljs.core.async.t10643(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___10728 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___10728,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___10728,out){
return (function (state_10707){var state_val_10708 = (state_10707[(1)]);if((state_val_10708 === (7)))
{var inst_10703 = (state_10707[(2)]);var state_10707__$1 = state_10707;var statearr_10709_10729 = state_10707__$1;(statearr_10709_10729[(2)] = inst_10703);
(statearr_10709_10729[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (1)))
{var state_10707__$1 = state_10707;var statearr_10710_10730 = state_10707__$1;(statearr_10710_10730[(2)] = null);
(statearr_10710_10730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (4)))
{var inst_10689 = (state_10707[(7)]);var inst_10689__$1 = (state_10707[(2)]);var inst_10690 = (inst_10689__$1 == null);var state_10707__$1 = (function (){var statearr_10711 = state_10707;(statearr_10711[(7)] = inst_10689__$1);
return statearr_10711;
})();if(cljs.core.truth_(inst_10690))
{var statearr_10712_10731 = state_10707__$1;(statearr_10712_10731[(1)] = (5));
} else
{var statearr_10713_10732 = state_10707__$1;(statearr_10713_10732[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (6)))
{var inst_10689 = (state_10707[(7)]);var inst_10694 = p.call(null,inst_10689);var state_10707__$1 = state_10707;if(cljs.core.truth_(inst_10694))
{var statearr_10714_10733 = state_10707__$1;(statearr_10714_10733[(1)] = (8));
} else
{var statearr_10715_10734 = state_10707__$1;(statearr_10715_10734[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (3)))
{var inst_10705 = (state_10707[(2)]);var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10707__$1,inst_10705);
} else
{if((state_val_10708 === (2)))
{var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10707__$1,(4),ch);
} else
{if((state_val_10708 === (11)))
{var inst_10697 = (state_10707[(2)]);var state_10707__$1 = state_10707;var statearr_10716_10735 = state_10707__$1;(statearr_10716_10735[(2)] = inst_10697);
(statearr_10716_10735[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (9)))
{var state_10707__$1 = state_10707;var statearr_10717_10736 = state_10707__$1;(statearr_10717_10736[(2)] = null);
(statearr_10717_10736[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (5)))
{var inst_10692 = cljs.core.async.close_BANG_.call(null,out);var state_10707__$1 = state_10707;var statearr_10718_10737 = state_10707__$1;(statearr_10718_10737[(2)] = inst_10692);
(statearr_10718_10737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (10)))
{var inst_10700 = (state_10707[(2)]);var state_10707__$1 = (function (){var statearr_10719 = state_10707;(statearr_10719[(8)] = inst_10700);
return statearr_10719;
})();var statearr_10720_10738 = state_10707__$1;(statearr_10720_10738[(2)] = null);
(statearr_10720_10738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10708 === (8)))
{var inst_10689 = (state_10707[(7)]);var state_10707__$1 = state_10707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10707__$1,(11),out,inst_10689);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___10728,out))
;return ((function (switch__6313__auto__,c__6378__auto___10728,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_10724 = [null,null,null,null,null,null,null,null,null];(statearr_10724[(0)] = state_machine__6314__auto__);
(statearr_10724[(1)] = (1));
return statearr_10724;
});
var state_machine__6314__auto____1 = (function (state_10707){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_10707);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e10725){if((e10725 instanceof Object))
{var ex__6317__auto__ = e10725;var statearr_10726_10739 = state_10707;(statearr_10726_10739[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10725;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10740 = state_10707;
state_10707 = G__10740;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_10707){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_10707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___10728,out))
})();var state__6380__auto__ = (function (){var statearr_10727 = f__6379__auto__.call(null);(statearr_10727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___10728);
return statearr_10727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___10728,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__){
return (function (state_10906){var state_val_10907 = (state_10906[(1)]);if((state_val_10907 === (7)))
{var inst_10902 = (state_10906[(2)]);var state_10906__$1 = state_10906;var statearr_10908_10949 = state_10906__$1;(statearr_10908_10949[(2)] = inst_10902);
(statearr_10908_10949[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (20)))
{var inst_10872 = (state_10906[(7)]);var inst_10883 = (state_10906[(2)]);var inst_10884 = cljs.core.next.call(null,inst_10872);var inst_10858 = inst_10884;var inst_10859 = null;var inst_10860 = (0);var inst_10861 = (0);var state_10906__$1 = (function (){var statearr_10909 = state_10906;(statearr_10909[(8)] = inst_10861);
(statearr_10909[(9)] = inst_10858);
(statearr_10909[(10)] = inst_10860);
(statearr_10909[(11)] = inst_10883);
(statearr_10909[(12)] = inst_10859);
return statearr_10909;
})();var statearr_10910_10950 = state_10906__$1;(statearr_10910_10950[(2)] = null);
(statearr_10910_10950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (1)))
{var state_10906__$1 = state_10906;var statearr_10911_10951 = state_10906__$1;(statearr_10911_10951[(2)] = null);
(statearr_10911_10951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (4)))
{var inst_10847 = (state_10906[(13)]);var inst_10847__$1 = (state_10906[(2)]);var inst_10848 = (inst_10847__$1 == null);var state_10906__$1 = (function (){var statearr_10912 = state_10906;(statearr_10912[(13)] = inst_10847__$1);
return statearr_10912;
})();if(cljs.core.truth_(inst_10848))
{var statearr_10913_10952 = state_10906__$1;(statearr_10913_10952[(1)] = (5));
} else
{var statearr_10914_10953 = state_10906__$1;(statearr_10914_10953[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (15)))
{var state_10906__$1 = state_10906;var statearr_10918_10954 = state_10906__$1;(statearr_10918_10954[(2)] = null);
(statearr_10918_10954[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (21)))
{var state_10906__$1 = state_10906;var statearr_10919_10955 = state_10906__$1;(statearr_10919_10955[(2)] = null);
(statearr_10919_10955[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (13)))
{var inst_10861 = (state_10906[(8)]);var inst_10858 = (state_10906[(9)]);var inst_10860 = (state_10906[(10)]);var inst_10859 = (state_10906[(12)]);var inst_10868 = (state_10906[(2)]);var inst_10869 = (inst_10861 + (1));var tmp10915 = inst_10858;var tmp10916 = inst_10860;var tmp10917 = inst_10859;var inst_10858__$1 = tmp10915;var inst_10859__$1 = tmp10917;var inst_10860__$1 = tmp10916;var inst_10861__$1 = inst_10869;var state_10906__$1 = (function (){var statearr_10920 = state_10906;(statearr_10920[(8)] = inst_10861__$1);
(statearr_10920[(9)] = inst_10858__$1);
(statearr_10920[(10)] = inst_10860__$1);
(statearr_10920[(12)] = inst_10859__$1);
(statearr_10920[(14)] = inst_10868);
return statearr_10920;
})();var statearr_10921_10956 = state_10906__$1;(statearr_10921_10956[(2)] = null);
(statearr_10921_10956[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (22)))
{var state_10906__$1 = state_10906;var statearr_10922_10957 = state_10906__$1;(statearr_10922_10957[(2)] = null);
(statearr_10922_10957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (6)))
{var inst_10847 = (state_10906[(13)]);var inst_10856 = f.call(null,inst_10847);var inst_10857 = cljs.core.seq.call(null,inst_10856);var inst_10858 = inst_10857;var inst_10859 = null;var inst_10860 = (0);var inst_10861 = (0);var state_10906__$1 = (function (){var statearr_10923 = state_10906;(statearr_10923[(8)] = inst_10861);
(statearr_10923[(9)] = inst_10858);
(statearr_10923[(10)] = inst_10860);
(statearr_10923[(12)] = inst_10859);
return statearr_10923;
})();var statearr_10924_10958 = state_10906__$1;(statearr_10924_10958[(2)] = null);
(statearr_10924_10958[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (17)))
{var inst_10872 = (state_10906[(7)]);var inst_10876 = cljs.core.chunk_first.call(null,inst_10872);var inst_10877 = cljs.core.chunk_rest.call(null,inst_10872);var inst_10878 = cljs.core.count.call(null,inst_10876);var inst_10858 = inst_10877;var inst_10859 = inst_10876;var inst_10860 = inst_10878;var inst_10861 = (0);var state_10906__$1 = (function (){var statearr_10925 = state_10906;(statearr_10925[(8)] = inst_10861);
(statearr_10925[(9)] = inst_10858);
(statearr_10925[(10)] = inst_10860);
(statearr_10925[(12)] = inst_10859);
return statearr_10925;
})();var statearr_10926_10959 = state_10906__$1;(statearr_10926_10959[(2)] = null);
(statearr_10926_10959[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (3)))
{var inst_10904 = (state_10906[(2)]);var state_10906__$1 = state_10906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10906__$1,inst_10904);
} else
{if((state_val_10907 === (12)))
{var inst_10892 = (state_10906[(2)]);var state_10906__$1 = state_10906;var statearr_10927_10960 = state_10906__$1;(statearr_10927_10960[(2)] = inst_10892);
(statearr_10927_10960[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (2)))
{var state_10906__$1 = state_10906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10906__$1,(4),in$);
} else
{if((state_val_10907 === (23)))
{var inst_10900 = (state_10906[(2)]);var state_10906__$1 = state_10906;var statearr_10928_10961 = state_10906__$1;(statearr_10928_10961[(2)] = inst_10900);
(statearr_10928_10961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (19)))
{var inst_10887 = (state_10906[(2)]);var state_10906__$1 = state_10906;var statearr_10929_10962 = state_10906__$1;(statearr_10929_10962[(2)] = inst_10887);
(statearr_10929_10962[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (11)))
{var inst_10872 = (state_10906[(7)]);var inst_10858 = (state_10906[(9)]);var inst_10872__$1 = cljs.core.seq.call(null,inst_10858);var state_10906__$1 = (function (){var statearr_10930 = state_10906;(statearr_10930[(7)] = inst_10872__$1);
return statearr_10930;
})();if(inst_10872__$1)
{var statearr_10931_10963 = state_10906__$1;(statearr_10931_10963[(1)] = (14));
} else
{var statearr_10932_10964 = state_10906__$1;(statearr_10932_10964[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (9)))
{var inst_10894 = (state_10906[(2)]);var inst_10895 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_10906__$1 = (function (){var statearr_10933 = state_10906;(statearr_10933[(15)] = inst_10894);
return statearr_10933;
})();if(cljs.core.truth_(inst_10895))
{var statearr_10934_10965 = state_10906__$1;(statearr_10934_10965[(1)] = (21));
} else
{var statearr_10935_10966 = state_10906__$1;(statearr_10935_10966[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (5)))
{var inst_10850 = cljs.core.async.close_BANG_.call(null,out);var state_10906__$1 = state_10906;var statearr_10936_10967 = state_10906__$1;(statearr_10936_10967[(2)] = inst_10850);
(statearr_10936_10967[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (14)))
{var inst_10872 = (state_10906[(7)]);var inst_10874 = cljs.core.chunked_seq_QMARK_.call(null,inst_10872);var state_10906__$1 = state_10906;if(inst_10874)
{var statearr_10937_10968 = state_10906__$1;(statearr_10937_10968[(1)] = (17));
} else
{var statearr_10938_10969 = state_10906__$1;(statearr_10938_10969[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (16)))
{var inst_10890 = (state_10906[(2)]);var state_10906__$1 = state_10906;var statearr_10939_10970 = state_10906__$1;(statearr_10939_10970[(2)] = inst_10890);
(statearr_10939_10970[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10907 === (10)))
{var inst_10861 = (state_10906[(8)]);var inst_10859 = (state_10906[(12)]);var inst_10866 = cljs.core._nth.call(null,inst_10859,inst_10861);var state_10906__$1 = state_10906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10906__$1,(13),out,inst_10866);
} else
{if((state_val_10907 === (18)))
{var inst_10872 = (state_10906[(7)]);var inst_10881 = cljs.core.first.call(null,inst_10872);var state_10906__$1 = state_10906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10906__$1,(20),out,inst_10881);
} else
{if((state_val_10907 === (8)))
{var inst_10861 = (state_10906[(8)]);var inst_10860 = (state_10906[(10)]);var inst_10863 = (inst_10861 < inst_10860);var inst_10864 = inst_10863;var state_10906__$1 = state_10906;if(cljs.core.truth_(inst_10864))
{var statearr_10940_10971 = state_10906__$1;(statearr_10940_10971[(1)] = (10));
} else
{var statearr_10941_10972 = state_10906__$1;(statearr_10941_10972[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto__))
;return ((function (switch__6313__auto__,c__6378__auto__){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_10945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10945[(0)] = state_machine__6314__auto__);
(statearr_10945[(1)] = (1));
return statearr_10945;
});
var state_machine__6314__auto____1 = (function (state_10906){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_10906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e10946){if((e10946 instanceof Object))
{var ex__6317__auto__ = e10946;var statearr_10947_10973 = state_10906;(statearr_10947_10973[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10946;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10974 = state_10906;
state_10906 = G__10974;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_10906){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_10906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__))
})();var state__6380__auto__ = (function (){var statearr_10948 = f__6379__auto__.call(null);(statearr_10948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_10948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__))
);
return c__6378__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6378__auto___11069 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___11069){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___11069){
return (function (state_11045){var state_val_11046 = (state_11045[(1)]);if((state_val_11046 === (7)))
{var inst_11041 = (state_11045[(2)]);var state_11045__$1 = state_11045;var statearr_11047_11070 = state_11045__$1;(statearr_11047_11070[(2)] = inst_11041);
(statearr_11047_11070[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (1)))
{var state_11045__$1 = state_11045;var statearr_11048_11071 = state_11045__$1;(statearr_11048_11071[(2)] = null);
(statearr_11048_11071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (4)))
{var inst_11024 = (state_11045[(7)]);var inst_11024__$1 = (state_11045[(2)]);var inst_11025 = (inst_11024__$1 == null);var state_11045__$1 = (function (){var statearr_11049 = state_11045;(statearr_11049[(7)] = inst_11024__$1);
return statearr_11049;
})();if(cljs.core.truth_(inst_11025))
{var statearr_11050_11072 = state_11045__$1;(statearr_11050_11072[(1)] = (5));
} else
{var statearr_11051_11073 = state_11045__$1;(statearr_11051_11073[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (13)))
{var state_11045__$1 = state_11045;var statearr_11052_11074 = state_11045__$1;(statearr_11052_11074[(2)] = null);
(statearr_11052_11074[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (6)))
{var inst_11024 = (state_11045[(7)]);var state_11045__$1 = state_11045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11045__$1,(11),to,inst_11024);
} else
{if((state_val_11046 === (3)))
{var inst_11043 = (state_11045[(2)]);var state_11045__$1 = state_11045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11045__$1,inst_11043);
} else
{if((state_val_11046 === (12)))
{var state_11045__$1 = state_11045;var statearr_11053_11075 = state_11045__$1;(statearr_11053_11075[(2)] = null);
(statearr_11053_11075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (2)))
{var state_11045__$1 = state_11045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11045__$1,(4),from);
} else
{if((state_val_11046 === (11)))
{var inst_11034 = (state_11045[(2)]);var state_11045__$1 = state_11045;if(cljs.core.truth_(inst_11034))
{var statearr_11054_11076 = state_11045__$1;(statearr_11054_11076[(1)] = (12));
} else
{var statearr_11055_11077 = state_11045__$1;(statearr_11055_11077[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (9)))
{var state_11045__$1 = state_11045;var statearr_11056_11078 = state_11045__$1;(statearr_11056_11078[(2)] = null);
(statearr_11056_11078[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (5)))
{var state_11045__$1 = state_11045;if(cljs.core.truth_(close_QMARK_))
{var statearr_11057_11079 = state_11045__$1;(statearr_11057_11079[(1)] = (8));
} else
{var statearr_11058_11080 = state_11045__$1;(statearr_11058_11080[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (14)))
{var inst_11039 = (state_11045[(2)]);var state_11045__$1 = state_11045;var statearr_11059_11081 = state_11045__$1;(statearr_11059_11081[(2)] = inst_11039);
(statearr_11059_11081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (10)))
{var inst_11031 = (state_11045[(2)]);var state_11045__$1 = state_11045;var statearr_11060_11082 = state_11045__$1;(statearr_11060_11082[(2)] = inst_11031);
(statearr_11060_11082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11046 === (8)))
{var inst_11028 = cljs.core.async.close_BANG_.call(null,to);var state_11045__$1 = state_11045;var statearr_11061_11083 = state_11045__$1;(statearr_11061_11083[(2)] = inst_11028);
(statearr_11061_11083[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___11069))
;return ((function (switch__6313__auto__,c__6378__auto___11069){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_11065 = [null,null,null,null,null,null,null,null];(statearr_11065[(0)] = state_machine__6314__auto__);
(statearr_11065[(1)] = (1));
return statearr_11065;
});
var state_machine__6314__auto____1 = (function (state_11045){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_11045);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e11066){if((e11066 instanceof Object))
{var ex__6317__auto__ = e11066;var statearr_11067_11084 = state_11045;(statearr_11067_11084[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11066;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11085 = state_11045;
state_11045 = G__11085;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_11045){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_11045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___11069))
})();var state__6380__auto__ = (function (){var statearr_11068 = f__6379__auto__.call(null);(statearr_11068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___11069);
return statearr_11068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___11069))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6378__auto___11186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___11186,tc,fc){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___11186,tc,fc){
return (function (state_11161){var state_val_11162 = (state_11161[(1)]);if((state_val_11162 === (7)))
{var inst_11157 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11163_11187 = state_11161__$1;(statearr_11163_11187[(2)] = inst_11157);
(statearr_11163_11187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (1)))
{var state_11161__$1 = state_11161;var statearr_11164_11188 = state_11161__$1;(statearr_11164_11188[(2)] = null);
(statearr_11164_11188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (4)))
{var inst_11138 = (state_11161[(7)]);var inst_11138__$1 = (state_11161[(2)]);var inst_11139 = (inst_11138__$1 == null);var state_11161__$1 = (function (){var statearr_11165 = state_11161;(statearr_11165[(7)] = inst_11138__$1);
return statearr_11165;
})();if(cljs.core.truth_(inst_11139))
{var statearr_11166_11189 = state_11161__$1;(statearr_11166_11189[(1)] = (5));
} else
{var statearr_11167_11190 = state_11161__$1;(statearr_11167_11190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (13)))
{var state_11161__$1 = state_11161;var statearr_11168_11191 = state_11161__$1;(statearr_11168_11191[(2)] = null);
(statearr_11168_11191[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (6)))
{var inst_11138 = (state_11161[(7)]);var inst_11144 = p.call(null,inst_11138);var state_11161__$1 = state_11161;if(cljs.core.truth_(inst_11144))
{var statearr_11169_11192 = state_11161__$1;(statearr_11169_11192[(1)] = (9));
} else
{var statearr_11170_11193 = state_11161__$1;(statearr_11170_11193[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (3)))
{var inst_11159 = (state_11161[(2)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11161__$1,inst_11159);
} else
{if((state_val_11162 === (12)))
{var state_11161__$1 = state_11161;var statearr_11171_11194 = state_11161__$1;(statearr_11171_11194[(2)] = null);
(statearr_11171_11194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (2)))
{var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11161__$1,(4),ch);
} else
{if((state_val_11162 === (11)))
{var inst_11138 = (state_11161[(7)]);var inst_11148 = (state_11161[(2)]);var state_11161__$1 = state_11161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11161__$1,(8),inst_11148,inst_11138);
} else
{if((state_val_11162 === (9)))
{var state_11161__$1 = state_11161;var statearr_11172_11195 = state_11161__$1;(statearr_11172_11195[(2)] = tc);
(statearr_11172_11195[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (5)))
{var inst_11141 = cljs.core.async.close_BANG_.call(null,tc);var inst_11142 = cljs.core.async.close_BANG_.call(null,fc);var state_11161__$1 = (function (){var statearr_11173 = state_11161;(statearr_11173[(8)] = inst_11141);
return statearr_11173;
})();var statearr_11174_11196 = state_11161__$1;(statearr_11174_11196[(2)] = inst_11142);
(statearr_11174_11196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (14)))
{var inst_11155 = (state_11161[(2)]);var state_11161__$1 = state_11161;var statearr_11175_11197 = state_11161__$1;(statearr_11175_11197[(2)] = inst_11155);
(statearr_11175_11197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (10)))
{var state_11161__$1 = state_11161;var statearr_11176_11198 = state_11161__$1;(statearr_11176_11198[(2)] = fc);
(statearr_11176_11198[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11162 === (8)))
{var inst_11150 = (state_11161[(2)]);var state_11161__$1 = state_11161;if(cljs.core.truth_(inst_11150))
{var statearr_11177_11199 = state_11161__$1;(statearr_11177_11199[(1)] = (12));
} else
{var statearr_11178_11200 = state_11161__$1;(statearr_11178_11200[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___11186,tc,fc))
;return ((function (switch__6313__auto__,c__6378__auto___11186,tc,fc){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_11182 = [null,null,null,null,null,null,null,null,null];(statearr_11182[(0)] = state_machine__6314__auto__);
(statearr_11182[(1)] = (1));
return statearr_11182;
});
var state_machine__6314__auto____1 = (function (state_11161){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_11161);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e11183){if((e11183 instanceof Object))
{var ex__6317__auto__ = e11183;var statearr_11184_11201 = state_11161;(statearr_11184_11201[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11183;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11202 = state_11161;
state_11161 = G__11202;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_11161){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_11161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___11186,tc,fc))
})();var state__6380__auto__ = (function (){var statearr_11185 = f__6379__auto__.call(null);(statearr_11185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___11186);
return statearr_11185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___11186,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__){
return (function (state_11249){var state_val_11250 = (state_11249[(1)]);if((state_val_11250 === (7)))
{var inst_11245 = (state_11249[(2)]);var state_11249__$1 = state_11249;var statearr_11251_11267 = state_11249__$1;(statearr_11251_11267[(2)] = inst_11245);
(statearr_11251_11267[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11250 === (6)))
{var inst_11235 = (state_11249[(7)]);var inst_11238 = (state_11249[(8)]);var inst_11242 = f.call(null,inst_11235,inst_11238);var inst_11235__$1 = inst_11242;var state_11249__$1 = (function (){var statearr_11252 = state_11249;(statearr_11252[(7)] = inst_11235__$1);
return statearr_11252;
})();var statearr_11253_11268 = state_11249__$1;(statearr_11253_11268[(2)] = null);
(statearr_11253_11268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11250 === (5)))
{var inst_11235 = (state_11249[(7)]);var state_11249__$1 = state_11249;var statearr_11254_11269 = state_11249__$1;(statearr_11254_11269[(2)] = inst_11235);
(statearr_11254_11269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11250 === (4)))
{var inst_11238 = (state_11249[(8)]);var inst_11238__$1 = (state_11249[(2)]);var inst_11239 = (inst_11238__$1 == null);var state_11249__$1 = (function (){var statearr_11255 = state_11249;(statearr_11255[(8)] = inst_11238__$1);
return statearr_11255;
})();if(cljs.core.truth_(inst_11239))
{var statearr_11256_11270 = state_11249__$1;(statearr_11256_11270[(1)] = (5));
} else
{var statearr_11257_11271 = state_11249__$1;(statearr_11257_11271[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11250 === (3)))
{var inst_11247 = (state_11249[(2)]);var state_11249__$1 = state_11249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11249__$1,inst_11247);
} else
{if((state_val_11250 === (2)))
{var state_11249__$1 = state_11249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11249__$1,(4),ch);
} else
{if((state_val_11250 === (1)))
{var inst_11235 = init;var state_11249__$1 = (function (){var statearr_11258 = state_11249;(statearr_11258[(7)] = inst_11235);
return statearr_11258;
})();var statearr_11259_11272 = state_11249__$1;(statearr_11259_11272[(2)] = null);
(statearr_11259_11272[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6378__auto__))
;return ((function (switch__6313__auto__,c__6378__auto__){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_11263 = [null,null,null,null,null,null,null,null,null];(statearr_11263[(0)] = state_machine__6314__auto__);
(statearr_11263[(1)] = (1));
return statearr_11263;
});
var state_machine__6314__auto____1 = (function (state_11249){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_11249);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e11264){if((e11264 instanceof Object))
{var ex__6317__auto__ = e11264;var statearr_11265_11273 = state_11249;(statearr_11265_11273[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11249);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11264;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11274 = state_11249;
state_11249 = G__11274;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_11249){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_11249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__))
})();var state__6380__auto__ = (function (){var statearr_11266 = f__6379__auto__.call(null);(statearr_11266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_11266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__))
);
return c__6378__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6378__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto__){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto__){
return (function (state_11348){var state_val_11349 = (state_11348[(1)]);if((state_val_11349 === (7)))
{var inst_11330 = (state_11348[(2)]);var state_11348__$1 = state_11348;var statearr_11350_11373 = state_11348__$1;(statearr_11350_11373[(2)] = inst_11330);
(statearr_11350_11373[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (1)))
{var inst_11324 = cljs.core.seq.call(null,coll);var inst_11325 = inst_11324;var state_11348__$1 = (function (){var statearr_11351 = state_11348;(statearr_11351[(7)] = inst_11325);
return statearr_11351;
})();var statearr_11352_11374 = state_11348__$1;(statearr_11352_11374[(2)] = null);
(statearr_11352_11374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (4)))
{var inst_11325 = (state_11348[(7)]);var inst_11328 = cljs.core.first.call(null,inst_11325);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11348__$1,(7),ch,inst_11328);
} else
{if((state_val_11349 === (13)))
{var inst_11342 = (state_11348[(2)]);var state_11348__$1 = state_11348;var statearr_11353_11375 = state_11348__$1;(statearr_11353_11375[(2)] = inst_11342);
(statearr_11353_11375[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (6)))
{var inst_11333 = (state_11348[(2)]);var state_11348__$1 = state_11348;if(cljs.core.truth_(inst_11333))
{var statearr_11354_11376 = state_11348__$1;(statearr_11354_11376[(1)] = (8));
} else
{var statearr_11355_11377 = state_11348__$1;(statearr_11355_11377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (3)))
{var inst_11346 = (state_11348[(2)]);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11348__$1,inst_11346);
} else
{if((state_val_11349 === (12)))
{var state_11348__$1 = state_11348;var statearr_11356_11378 = state_11348__$1;(statearr_11356_11378[(2)] = null);
(statearr_11356_11378[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (2)))
{var inst_11325 = (state_11348[(7)]);var state_11348__$1 = state_11348;if(cljs.core.truth_(inst_11325))
{var statearr_11357_11379 = state_11348__$1;(statearr_11357_11379[(1)] = (4));
} else
{var statearr_11358_11380 = state_11348__$1;(statearr_11358_11380[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (11)))
{var inst_11339 = cljs.core.async.close_BANG_.call(null,ch);var state_11348__$1 = state_11348;var statearr_11359_11381 = state_11348__$1;(statearr_11359_11381[(2)] = inst_11339);
(statearr_11359_11381[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (9)))
{var state_11348__$1 = state_11348;if(cljs.core.truth_(close_QMARK_))
{var statearr_11360_11382 = state_11348__$1;(statearr_11360_11382[(1)] = (11));
} else
{var statearr_11361_11383 = state_11348__$1;(statearr_11361_11383[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (5)))
{var inst_11325 = (state_11348[(7)]);var state_11348__$1 = state_11348;var statearr_11362_11384 = state_11348__$1;(statearr_11362_11384[(2)] = inst_11325);
(statearr_11362_11384[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (10)))
{var inst_11344 = (state_11348[(2)]);var state_11348__$1 = state_11348;var statearr_11363_11385 = state_11348__$1;(statearr_11363_11385[(2)] = inst_11344);
(statearr_11363_11385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (8)))
{var inst_11325 = (state_11348[(7)]);var inst_11335 = cljs.core.next.call(null,inst_11325);var inst_11325__$1 = inst_11335;var state_11348__$1 = (function (){var statearr_11364 = state_11348;(statearr_11364[(7)] = inst_11325__$1);
return statearr_11364;
})();var statearr_11365_11386 = state_11348__$1;(statearr_11365_11386[(2)] = null);
(statearr_11365_11386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto__))
;return ((function (switch__6313__auto__,c__6378__auto__){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_11369 = [null,null,null,null,null,null,null,null];(statearr_11369[(0)] = state_machine__6314__auto__);
(statearr_11369[(1)] = (1));
return statearr_11369;
});
var state_machine__6314__auto____1 = (function (state_11348){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_11348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e11370){if((e11370 instanceof Object))
{var ex__6317__auto__ = e11370;var statearr_11371_11387 = state_11348;(statearr_11371_11387[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11370;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11388 = state_11348;
state_11348 = G__11388;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_11348){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_11348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto__))
})();var state__6380__auto__ = (function (){var statearr_11372 = f__6379__auto__.call(null);(statearr_11372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto__);
return statearr_11372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto__))
);
return c__6378__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11390 = {};return obj11390;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3625__auto__ = _;if(and__3625__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4273__auto__ = (((_ == null))?null:_);return (function (){var or__3637__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11392 = {};return obj11392;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11614 = (function (cs,ch,mult,meta11615){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11615 = meta11615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11614.cljs$lang$type = true;
cljs.core.async.t11614.cljs$lang$ctorStr = "cljs.core.async/t11614";
cljs.core.async.t11614.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t11614");
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11616){var self__ = this;
var _11616__$1 = this;return self__.meta11615;
});})(cs))
;
cljs.core.async.t11614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11616,meta11615__$1){var self__ = this;
var _11616__$1 = this;return (new cljs.core.async.t11614(self__.cs,self__.ch,self__.mult,meta11615__$1));
});})(cs))
;
cljs.core.async.__GT_t11614 = ((function (cs){
return (function __GT_t11614(cs__$1,ch__$1,mult__$1,meta11615){return (new cljs.core.async.t11614(cs__$1,ch__$1,mult__$1,meta11615));
});})(cs))
;
}
return (new cljs.core.async.t11614(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6378__auto___11835 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___11835,cs,m,dchan,dctr,done){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___11835,cs,m,dchan,dctr,done){
return (function (state_11747){var state_val_11748 = (state_11747[(1)]);if((state_val_11748 === (7)))
{var inst_11743 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11749_11836 = state_11747__$1;(statearr_11749_11836[(2)] = inst_11743);
(statearr_11749_11836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (20)))
{var inst_11648 = (state_11747[(7)]);var inst_11658 = cljs.core.first.call(null,inst_11648);var inst_11659 = cljs.core.nth.call(null,inst_11658,(0),null);var inst_11660 = cljs.core.nth.call(null,inst_11658,(1),null);var state_11747__$1 = (function (){var statearr_11750 = state_11747;(statearr_11750[(8)] = inst_11659);
return statearr_11750;
})();if(cljs.core.truth_(inst_11660))
{var statearr_11751_11837 = state_11747__$1;(statearr_11751_11837[(1)] = (22));
} else
{var statearr_11752_11838 = state_11747__$1;(statearr_11752_11838[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (27)))
{var inst_11688 = (state_11747[(9)]);var inst_11619 = (state_11747[(10)]);var inst_11690 = (state_11747[(11)]);var inst_11695 = (state_11747[(12)]);var inst_11695__$1 = cljs.core._nth.call(null,inst_11688,inst_11690);var inst_11696 = cljs.core.async.put_BANG_.call(null,inst_11695__$1,inst_11619,done);var state_11747__$1 = (function (){var statearr_11753 = state_11747;(statearr_11753[(12)] = inst_11695__$1);
return statearr_11753;
})();if(cljs.core.truth_(inst_11696))
{var statearr_11754_11839 = state_11747__$1;(statearr_11754_11839[(1)] = (30));
} else
{var statearr_11755_11840 = state_11747__$1;(statearr_11755_11840[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (1)))
{var state_11747__$1 = state_11747;var statearr_11756_11841 = state_11747__$1;(statearr_11756_11841[(2)] = null);
(statearr_11756_11841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (24)))
{var inst_11648 = (state_11747[(7)]);var inst_11665 = (state_11747[(2)]);var inst_11666 = cljs.core.next.call(null,inst_11648);var inst_11628 = inst_11666;var inst_11629 = null;var inst_11630 = (0);var inst_11631 = (0);var state_11747__$1 = (function (){var statearr_11757 = state_11747;(statearr_11757[(13)] = inst_11630);
(statearr_11757[(14)] = inst_11628);
(statearr_11757[(15)] = inst_11631);
(statearr_11757[(16)] = inst_11665);
(statearr_11757[(17)] = inst_11629);
return statearr_11757;
})();var statearr_11758_11842 = state_11747__$1;(statearr_11758_11842[(2)] = null);
(statearr_11758_11842[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (39)))
{var state_11747__$1 = state_11747;var statearr_11762_11843 = state_11747__$1;(statearr_11762_11843[(2)] = null);
(statearr_11762_11843[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (4)))
{var inst_11619 = (state_11747[(10)]);var inst_11619__$1 = (state_11747[(2)]);var inst_11620 = (inst_11619__$1 == null);var state_11747__$1 = (function (){var statearr_11763 = state_11747;(statearr_11763[(10)] = inst_11619__$1);
return statearr_11763;
})();if(cljs.core.truth_(inst_11620))
{var statearr_11764_11844 = state_11747__$1;(statearr_11764_11844[(1)] = (5));
} else
{var statearr_11765_11845 = state_11747__$1;(statearr_11765_11845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (15)))
{var inst_11630 = (state_11747[(13)]);var inst_11628 = (state_11747[(14)]);var inst_11631 = (state_11747[(15)]);var inst_11629 = (state_11747[(17)]);var inst_11644 = (state_11747[(2)]);var inst_11645 = (inst_11631 + (1));var tmp11759 = inst_11630;var tmp11760 = inst_11628;var tmp11761 = inst_11629;var inst_11628__$1 = tmp11760;var inst_11629__$1 = tmp11761;var inst_11630__$1 = tmp11759;var inst_11631__$1 = inst_11645;var state_11747__$1 = (function (){var statearr_11766 = state_11747;(statearr_11766[(13)] = inst_11630__$1);
(statearr_11766[(14)] = inst_11628__$1);
(statearr_11766[(15)] = inst_11631__$1);
(statearr_11766[(18)] = inst_11644);
(statearr_11766[(17)] = inst_11629__$1);
return statearr_11766;
})();var statearr_11767_11846 = state_11747__$1;(statearr_11767_11846[(2)] = null);
(statearr_11767_11846[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (21)))
{var inst_11669 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11771_11847 = state_11747__$1;(statearr_11771_11847[(2)] = inst_11669);
(statearr_11771_11847[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (31)))
{var inst_11695 = (state_11747[(12)]);var inst_11699 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11700 = cljs.core.async.untap_STAR_.call(null,m,inst_11695);var state_11747__$1 = (function (){var statearr_11772 = state_11747;(statearr_11772[(19)] = inst_11699);
return statearr_11772;
})();var statearr_11773_11848 = state_11747__$1;(statearr_11773_11848[(2)] = inst_11700);
(statearr_11773_11848[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (32)))
{var inst_11689 = (state_11747[(20)]);var inst_11688 = (state_11747[(9)]);var inst_11687 = (state_11747[(21)]);var inst_11690 = (state_11747[(11)]);var inst_11702 = (state_11747[(2)]);var inst_11703 = (inst_11690 + (1));var tmp11768 = inst_11689;var tmp11769 = inst_11688;var tmp11770 = inst_11687;var inst_11687__$1 = tmp11770;var inst_11688__$1 = tmp11769;var inst_11689__$1 = tmp11768;var inst_11690__$1 = inst_11703;var state_11747__$1 = (function (){var statearr_11774 = state_11747;(statearr_11774[(20)] = inst_11689__$1);
(statearr_11774[(9)] = inst_11688__$1);
(statearr_11774[(21)] = inst_11687__$1);
(statearr_11774[(11)] = inst_11690__$1);
(statearr_11774[(22)] = inst_11702);
return statearr_11774;
})();var statearr_11775_11849 = state_11747__$1;(statearr_11775_11849[(2)] = null);
(statearr_11775_11849[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (40)))
{var inst_11715 = (state_11747[(23)]);var inst_11719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11720 = cljs.core.async.untap_STAR_.call(null,m,inst_11715);var state_11747__$1 = (function (){var statearr_11776 = state_11747;(statearr_11776[(24)] = inst_11719);
return statearr_11776;
})();var statearr_11777_11850 = state_11747__$1;(statearr_11777_11850[(2)] = inst_11720);
(statearr_11777_11850[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (33)))
{var inst_11706 = (state_11747[(25)]);var inst_11708 = cljs.core.chunked_seq_QMARK_.call(null,inst_11706);var state_11747__$1 = state_11747;if(inst_11708)
{var statearr_11778_11851 = state_11747__$1;(statearr_11778_11851[(1)] = (36));
} else
{var statearr_11779_11852 = state_11747__$1;(statearr_11779_11852[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (13)))
{var inst_11638 = (state_11747[(26)]);var inst_11641 = cljs.core.async.close_BANG_.call(null,inst_11638);var state_11747__$1 = state_11747;var statearr_11780_11853 = state_11747__$1;(statearr_11780_11853[(2)] = inst_11641);
(statearr_11780_11853[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (22)))
{var inst_11659 = (state_11747[(8)]);var inst_11662 = cljs.core.async.close_BANG_.call(null,inst_11659);var state_11747__$1 = state_11747;var statearr_11781_11854 = state_11747__$1;(statearr_11781_11854[(2)] = inst_11662);
(statearr_11781_11854[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (36)))
{var inst_11706 = (state_11747[(25)]);var inst_11710 = cljs.core.chunk_first.call(null,inst_11706);var inst_11711 = cljs.core.chunk_rest.call(null,inst_11706);var inst_11712 = cljs.core.count.call(null,inst_11710);var inst_11687 = inst_11711;var inst_11688 = inst_11710;var inst_11689 = inst_11712;var inst_11690 = (0);var state_11747__$1 = (function (){var statearr_11782 = state_11747;(statearr_11782[(20)] = inst_11689);
(statearr_11782[(9)] = inst_11688);
(statearr_11782[(21)] = inst_11687);
(statearr_11782[(11)] = inst_11690);
return statearr_11782;
})();var statearr_11783_11855 = state_11747__$1;(statearr_11783_11855[(2)] = null);
(statearr_11783_11855[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (41)))
{var inst_11706 = (state_11747[(25)]);var inst_11722 = (state_11747[(2)]);var inst_11723 = cljs.core.next.call(null,inst_11706);var inst_11687 = inst_11723;var inst_11688 = null;var inst_11689 = (0);var inst_11690 = (0);var state_11747__$1 = (function (){var statearr_11784 = state_11747;(statearr_11784[(20)] = inst_11689);
(statearr_11784[(9)] = inst_11688);
(statearr_11784[(21)] = inst_11687);
(statearr_11784[(27)] = inst_11722);
(statearr_11784[(11)] = inst_11690);
return statearr_11784;
})();var statearr_11785_11856 = state_11747__$1;(statearr_11785_11856[(2)] = null);
(statearr_11785_11856[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (43)))
{var state_11747__$1 = state_11747;var statearr_11786_11857 = state_11747__$1;(statearr_11786_11857[(2)] = null);
(statearr_11786_11857[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (29)))
{var inst_11731 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11787_11858 = state_11747__$1;(statearr_11787_11858[(2)] = inst_11731);
(statearr_11787_11858[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (44)))
{var inst_11740 = (state_11747[(2)]);var state_11747__$1 = (function (){var statearr_11788 = state_11747;(statearr_11788[(28)] = inst_11740);
return statearr_11788;
})();var statearr_11789_11859 = state_11747__$1;(statearr_11789_11859[(2)] = null);
(statearr_11789_11859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (6)))
{var inst_11679 = (state_11747[(29)]);var inst_11678 = cljs.core.deref.call(null,cs);var inst_11679__$1 = cljs.core.keys.call(null,inst_11678);var inst_11680 = cljs.core.count.call(null,inst_11679__$1);var inst_11681 = cljs.core.reset_BANG_.call(null,dctr,inst_11680);var inst_11686 = cljs.core.seq.call(null,inst_11679__$1);var inst_11687 = inst_11686;var inst_11688 = null;var inst_11689 = (0);var inst_11690 = (0);var state_11747__$1 = (function (){var statearr_11790 = state_11747;(statearr_11790[(20)] = inst_11689);
(statearr_11790[(9)] = inst_11688);
(statearr_11790[(21)] = inst_11687);
(statearr_11790[(30)] = inst_11681);
(statearr_11790[(11)] = inst_11690);
(statearr_11790[(29)] = inst_11679__$1);
return statearr_11790;
})();var statearr_11791_11860 = state_11747__$1;(statearr_11791_11860[(2)] = null);
(statearr_11791_11860[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (28)))
{var inst_11687 = (state_11747[(21)]);var inst_11706 = (state_11747[(25)]);var inst_11706__$1 = cljs.core.seq.call(null,inst_11687);var state_11747__$1 = (function (){var statearr_11792 = state_11747;(statearr_11792[(25)] = inst_11706__$1);
return statearr_11792;
})();if(inst_11706__$1)
{var statearr_11793_11861 = state_11747__$1;(statearr_11793_11861[(1)] = (33));
} else
{var statearr_11794_11862 = state_11747__$1;(statearr_11794_11862[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (25)))
{var inst_11689 = (state_11747[(20)]);var inst_11690 = (state_11747[(11)]);var inst_11692 = (inst_11690 < inst_11689);var inst_11693 = inst_11692;var state_11747__$1 = state_11747;if(cljs.core.truth_(inst_11693))
{var statearr_11795_11863 = state_11747__$1;(statearr_11795_11863[(1)] = (27));
} else
{var statearr_11796_11864 = state_11747__$1;(statearr_11796_11864[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (34)))
{var state_11747__$1 = state_11747;var statearr_11797_11865 = state_11747__$1;(statearr_11797_11865[(2)] = null);
(statearr_11797_11865[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (17)))
{var state_11747__$1 = state_11747;var statearr_11798_11866 = state_11747__$1;(statearr_11798_11866[(2)] = null);
(statearr_11798_11866[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (3)))
{var inst_11745 = (state_11747[(2)]);var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11747__$1,inst_11745);
} else
{if((state_val_11748 === (12)))
{var inst_11674 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11799_11867 = state_11747__$1;(statearr_11799_11867[(2)] = inst_11674);
(statearr_11799_11867[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (2)))
{var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11747__$1,(4),ch);
} else
{if((state_val_11748 === (23)))
{var state_11747__$1 = state_11747;var statearr_11800_11868 = state_11747__$1;(statearr_11800_11868[(2)] = null);
(statearr_11800_11868[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (35)))
{var inst_11729 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11801_11869 = state_11747__$1;(statearr_11801_11869[(2)] = inst_11729);
(statearr_11801_11869[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (19)))
{var inst_11648 = (state_11747[(7)]);var inst_11652 = cljs.core.chunk_first.call(null,inst_11648);var inst_11653 = cljs.core.chunk_rest.call(null,inst_11648);var inst_11654 = cljs.core.count.call(null,inst_11652);var inst_11628 = inst_11653;var inst_11629 = inst_11652;var inst_11630 = inst_11654;var inst_11631 = (0);var state_11747__$1 = (function (){var statearr_11802 = state_11747;(statearr_11802[(13)] = inst_11630);
(statearr_11802[(14)] = inst_11628);
(statearr_11802[(15)] = inst_11631);
(statearr_11802[(17)] = inst_11629);
return statearr_11802;
})();var statearr_11803_11870 = state_11747__$1;(statearr_11803_11870[(2)] = null);
(statearr_11803_11870[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (11)))
{var inst_11628 = (state_11747[(14)]);var inst_11648 = (state_11747[(7)]);var inst_11648__$1 = cljs.core.seq.call(null,inst_11628);var state_11747__$1 = (function (){var statearr_11804 = state_11747;(statearr_11804[(7)] = inst_11648__$1);
return statearr_11804;
})();if(inst_11648__$1)
{var statearr_11805_11871 = state_11747__$1;(statearr_11805_11871[(1)] = (16));
} else
{var statearr_11806_11872 = state_11747__$1;(statearr_11806_11872[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (9)))
{var inst_11676 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11807_11873 = state_11747__$1;(statearr_11807_11873[(2)] = inst_11676);
(statearr_11807_11873[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (5)))
{var inst_11626 = cljs.core.deref.call(null,cs);var inst_11627 = cljs.core.seq.call(null,inst_11626);var inst_11628 = inst_11627;var inst_11629 = null;var inst_11630 = (0);var inst_11631 = (0);var state_11747__$1 = (function (){var statearr_11808 = state_11747;(statearr_11808[(13)] = inst_11630);
(statearr_11808[(14)] = inst_11628);
(statearr_11808[(15)] = inst_11631);
(statearr_11808[(17)] = inst_11629);
return statearr_11808;
})();var statearr_11809_11874 = state_11747__$1;(statearr_11809_11874[(2)] = null);
(statearr_11809_11874[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (14)))
{var state_11747__$1 = state_11747;var statearr_11810_11875 = state_11747__$1;(statearr_11810_11875[(2)] = null);
(statearr_11810_11875[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (45)))
{var inst_11737 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11811_11876 = state_11747__$1;(statearr_11811_11876[(2)] = inst_11737);
(statearr_11811_11876[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (26)))
{var inst_11679 = (state_11747[(29)]);var inst_11733 = (state_11747[(2)]);var inst_11734 = cljs.core.seq.call(null,inst_11679);var state_11747__$1 = (function (){var statearr_11812 = state_11747;(statearr_11812[(31)] = inst_11733);
return statearr_11812;
})();if(inst_11734)
{var statearr_11813_11877 = state_11747__$1;(statearr_11813_11877[(1)] = (42));
} else
{var statearr_11814_11878 = state_11747__$1;(statearr_11814_11878[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (16)))
{var inst_11648 = (state_11747[(7)]);var inst_11650 = cljs.core.chunked_seq_QMARK_.call(null,inst_11648);var state_11747__$1 = state_11747;if(inst_11650)
{var statearr_11815_11879 = state_11747__$1;(statearr_11815_11879[(1)] = (19));
} else
{var statearr_11816_11880 = state_11747__$1;(statearr_11816_11880[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (38)))
{var inst_11726 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11817_11881 = state_11747__$1;(statearr_11817_11881[(2)] = inst_11726);
(statearr_11817_11881[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (30)))
{var state_11747__$1 = state_11747;var statearr_11818_11882 = state_11747__$1;(statearr_11818_11882[(2)] = null);
(statearr_11818_11882[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (10)))
{var inst_11631 = (state_11747[(15)]);var inst_11629 = (state_11747[(17)]);var inst_11637 = cljs.core._nth.call(null,inst_11629,inst_11631);var inst_11638 = cljs.core.nth.call(null,inst_11637,(0),null);var inst_11639 = cljs.core.nth.call(null,inst_11637,(1),null);var state_11747__$1 = (function (){var statearr_11819 = state_11747;(statearr_11819[(26)] = inst_11638);
return statearr_11819;
})();if(cljs.core.truth_(inst_11639))
{var statearr_11820_11883 = state_11747__$1;(statearr_11820_11883[(1)] = (13));
} else
{var statearr_11821_11884 = state_11747__$1;(statearr_11821_11884[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (18)))
{var inst_11672 = (state_11747[(2)]);var state_11747__$1 = state_11747;var statearr_11822_11885 = state_11747__$1;(statearr_11822_11885[(2)] = inst_11672);
(statearr_11822_11885[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (42)))
{var state_11747__$1 = state_11747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11747__$1,(45),dchan);
} else
{if((state_val_11748 === (37)))
{var inst_11619 = (state_11747[(10)]);var inst_11706 = (state_11747[(25)]);var inst_11715 = (state_11747[(23)]);var inst_11715__$1 = cljs.core.first.call(null,inst_11706);var inst_11716 = cljs.core.async.put_BANG_.call(null,inst_11715__$1,inst_11619,done);var state_11747__$1 = (function (){var statearr_11823 = state_11747;(statearr_11823[(23)] = inst_11715__$1);
return statearr_11823;
})();if(cljs.core.truth_(inst_11716))
{var statearr_11824_11886 = state_11747__$1;(statearr_11824_11886[(1)] = (39));
} else
{var statearr_11825_11887 = state_11747__$1;(statearr_11825_11887[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11748 === (8)))
{var inst_11630 = (state_11747[(13)]);var inst_11631 = (state_11747[(15)]);var inst_11633 = (inst_11631 < inst_11630);var inst_11634 = inst_11633;var state_11747__$1 = state_11747;if(cljs.core.truth_(inst_11634))
{var statearr_11826_11888 = state_11747__$1;(statearr_11826_11888[(1)] = (10));
} else
{var statearr_11827_11889 = state_11747__$1;(statearr_11827_11889[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___11835,cs,m,dchan,dctr,done))
;return ((function (switch__6313__auto__,c__6378__auto___11835,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_11831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11831[(0)] = state_machine__6314__auto__);
(statearr_11831[(1)] = (1));
return statearr_11831;
});
var state_machine__6314__auto____1 = (function (state_11747){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_11747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e11832){if((e11832 instanceof Object))
{var ex__6317__auto__ = e11832;var statearr_11833_11890 = state_11747;(statearr_11833_11890[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11891 = state_11747;
state_11747 = G__11891;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_11747){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_11747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___11835,cs,m,dchan,dctr,done))
})();var state__6380__auto__ = (function (){var statearr_11834 = f__6379__auto__.call(null);(statearr_11834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___11835);
return statearr_11834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___11835,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11893 = {};return obj11893;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12013 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12014){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12014 = meta12014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12013.cljs$lang$type = true;
cljs.core.async.t12013.cljs$lang$ctorStr = "cljs.core.async/t12013";
cljs.core.async.t12013.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t12013");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12015){var self__ = this;
var _12015__$1 = this;return self__.meta12014;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12015,meta12014__$1){var self__ = this;
var _12015__$1 = this;return (new cljs.core.async.t12013(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12014__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12013 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12013(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12014){return (new cljs.core.async.t12013(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12014));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12013(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6378__auto___12132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12085){var state_val_12086 = (state_12085[(1)]);if((state_val_12086 === (7)))
{var inst_12029 = (state_12085[(7)]);var inst_12034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12029);var state_12085__$1 = state_12085;var statearr_12087_12133 = state_12085__$1;(statearr_12087_12133[(2)] = inst_12034);
(statearr_12087_12133[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (20)))
{var inst_12044 = (state_12085[(8)]);var state_12085__$1 = state_12085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12085__$1,(23),out,inst_12044);
} else
{if((state_val_12086 === (1)))
{var inst_12019 = (state_12085[(9)]);var inst_12019__$1 = calc_state.call(null);var inst_12020 = cljs.core.seq_QMARK_.call(null,inst_12019__$1);var state_12085__$1 = (function (){var statearr_12088 = state_12085;(statearr_12088[(9)] = inst_12019__$1);
return statearr_12088;
})();if(inst_12020)
{var statearr_12089_12134 = state_12085__$1;(statearr_12089_12134[(1)] = (2));
} else
{var statearr_12090_12135 = state_12085__$1;(statearr_12090_12135[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (24)))
{var inst_12037 = (state_12085[(10)]);var inst_12029 = inst_12037;var state_12085__$1 = (function (){var statearr_12091 = state_12085;(statearr_12091[(7)] = inst_12029);
return statearr_12091;
})();var statearr_12092_12136 = state_12085__$1;(statearr_12092_12136[(2)] = null);
(statearr_12092_12136[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (4)))
{var inst_12019 = (state_12085[(9)]);var inst_12025 = (state_12085[(2)]);var inst_12026 = cljs.core.get.call(null,inst_12025,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12027 = cljs.core.get.call(null,inst_12025,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12028 = cljs.core.get.call(null,inst_12025,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12029 = inst_12019;var state_12085__$1 = (function (){var statearr_12093 = state_12085;(statearr_12093[(11)] = inst_12026);
(statearr_12093[(12)] = inst_12027);
(statearr_12093[(7)] = inst_12029);
(statearr_12093[(13)] = inst_12028);
return statearr_12093;
})();var statearr_12094_12137 = state_12085__$1;(statearr_12094_12137[(2)] = null);
(statearr_12094_12137[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (15)))
{var state_12085__$1 = state_12085;var statearr_12095_12138 = state_12085__$1;(statearr_12095_12138[(2)] = null);
(statearr_12095_12138[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (21)))
{var inst_12037 = (state_12085[(10)]);var inst_12029 = inst_12037;var state_12085__$1 = (function (){var statearr_12096 = state_12085;(statearr_12096[(7)] = inst_12029);
return statearr_12096;
})();var statearr_12097_12139 = state_12085__$1;(statearr_12097_12139[(2)] = null);
(statearr_12097_12139[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (13)))
{var inst_12081 = (state_12085[(2)]);var state_12085__$1 = state_12085;var statearr_12098_12140 = state_12085__$1;(statearr_12098_12140[(2)] = inst_12081);
(statearr_12098_12140[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (22)))
{var inst_12079 = (state_12085[(2)]);var state_12085__$1 = state_12085;var statearr_12099_12141 = state_12085__$1;(statearr_12099_12141[(2)] = inst_12079);
(statearr_12099_12141[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (6)))
{var inst_12083 = (state_12085[(2)]);var state_12085__$1 = state_12085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12085__$1,inst_12083);
} else
{if((state_val_12086 === (25)))
{var state_12085__$1 = state_12085;var statearr_12100_12142 = state_12085__$1;(statearr_12100_12142[(2)] = null);
(statearr_12100_12142[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (17)))
{var inst_12059 = (state_12085[(14)]);var state_12085__$1 = state_12085;var statearr_12101_12143 = state_12085__$1;(statearr_12101_12143[(2)] = inst_12059);
(statearr_12101_12143[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (3)))
{var inst_12019 = (state_12085[(9)]);var state_12085__$1 = state_12085;var statearr_12102_12144 = state_12085__$1;(statearr_12102_12144[(2)] = inst_12019);
(statearr_12102_12144[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (12)))
{var inst_12059 = (state_12085[(14)]);var inst_12045 = (state_12085[(15)]);var inst_12040 = (state_12085[(16)]);var inst_12059__$1 = inst_12040.call(null,inst_12045);var state_12085__$1 = (function (){var statearr_12103 = state_12085;(statearr_12103[(14)] = inst_12059__$1);
return statearr_12103;
})();if(cljs.core.truth_(inst_12059__$1))
{var statearr_12104_12145 = state_12085__$1;(statearr_12104_12145[(1)] = (17));
} else
{var statearr_12105_12146 = state_12085__$1;(statearr_12105_12146[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (2)))
{var inst_12019 = (state_12085[(9)]);var inst_12022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12019);var state_12085__$1 = state_12085;var statearr_12106_12147 = state_12085__$1;(statearr_12106_12147[(2)] = inst_12022);
(statearr_12106_12147[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (23)))
{var inst_12070 = (state_12085[(2)]);var state_12085__$1 = state_12085;if(cljs.core.truth_(inst_12070))
{var statearr_12107_12148 = state_12085__$1;(statearr_12107_12148[(1)] = (24));
} else
{var statearr_12108_12149 = state_12085__$1;(statearr_12108_12149[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (19)))
{var inst_12067 = (state_12085[(2)]);var state_12085__$1 = state_12085;if(cljs.core.truth_(inst_12067))
{var statearr_12109_12150 = state_12085__$1;(statearr_12109_12150[(1)] = (20));
} else
{var statearr_12110_12151 = state_12085__$1;(statearr_12110_12151[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (11)))
{var inst_12044 = (state_12085[(8)]);var inst_12050 = (inst_12044 == null);var state_12085__$1 = state_12085;if(cljs.core.truth_(inst_12050))
{var statearr_12111_12152 = state_12085__$1;(statearr_12111_12152[(1)] = (14));
} else
{var statearr_12112_12153 = state_12085__$1;(statearr_12112_12153[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (9)))
{var inst_12037 = (state_12085[(10)]);var inst_12037__$1 = (state_12085[(2)]);var inst_12038 = cljs.core.get.call(null,inst_12037__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12039 = cljs.core.get.call(null,inst_12037__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12040 = cljs.core.get.call(null,inst_12037__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12085__$1 = (function (){var statearr_12113 = state_12085;(statearr_12113[(17)] = inst_12039);
(statearr_12113[(10)] = inst_12037__$1);
(statearr_12113[(16)] = inst_12040);
return statearr_12113;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12085__$1,(10),inst_12038);
} else
{if((state_val_12086 === (5)))
{var inst_12029 = (state_12085[(7)]);var inst_12032 = cljs.core.seq_QMARK_.call(null,inst_12029);var state_12085__$1 = state_12085;if(inst_12032)
{var statearr_12114_12154 = state_12085__$1;(statearr_12114_12154[(1)] = (7));
} else
{var statearr_12115_12155 = state_12085__$1;(statearr_12115_12155[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (14)))
{var inst_12045 = (state_12085[(15)]);var inst_12052 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12045);var state_12085__$1 = state_12085;var statearr_12116_12156 = state_12085__$1;(statearr_12116_12156[(2)] = inst_12052);
(statearr_12116_12156[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (26)))
{var inst_12075 = (state_12085[(2)]);var state_12085__$1 = state_12085;var statearr_12117_12157 = state_12085__$1;(statearr_12117_12157[(2)] = inst_12075);
(statearr_12117_12157[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (16)))
{var inst_12055 = (state_12085[(2)]);var inst_12056 = calc_state.call(null);var inst_12029 = inst_12056;var state_12085__$1 = (function (){var statearr_12118 = state_12085;(statearr_12118[(18)] = inst_12055);
(statearr_12118[(7)] = inst_12029);
return statearr_12118;
})();var statearr_12119_12158 = state_12085__$1;(statearr_12119_12158[(2)] = null);
(statearr_12119_12158[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (10)))
{var inst_12044 = (state_12085[(8)]);var inst_12045 = (state_12085[(15)]);var inst_12043 = (state_12085[(2)]);var inst_12044__$1 = cljs.core.nth.call(null,inst_12043,(0),null);var inst_12045__$1 = cljs.core.nth.call(null,inst_12043,(1),null);var inst_12046 = (inst_12044__$1 == null);var inst_12047 = cljs.core._EQ_.call(null,inst_12045__$1,change);var inst_12048 = (inst_12046) || (inst_12047);var state_12085__$1 = (function (){var statearr_12120 = state_12085;(statearr_12120[(8)] = inst_12044__$1);
(statearr_12120[(15)] = inst_12045__$1);
return statearr_12120;
})();if(cljs.core.truth_(inst_12048))
{var statearr_12121_12159 = state_12085__$1;(statearr_12121_12159[(1)] = (11));
} else
{var statearr_12122_12160 = state_12085__$1;(statearr_12122_12160[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (18)))
{var inst_12039 = (state_12085[(17)]);var inst_12045 = (state_12085[(15)]);var inst_12040 = (state_12085[(16)]);var inst_12062 = cljs.core.empty_QMARK_.call(null,inst_12040);var inst_12063 = inst_12039.call(null,inst_12045);var inst_12064 = cljs.core.not.call(null,inst_12063);var inst_12065 = (inst_12062) && (inst_12064);var state_12085__$1 = state_12085;var statearr_12123_12161 = state_12085__$1;(statearr_12123_12161[(2)] = inst_12065);
(statearr_12123_12161[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12086 === (8)))
{var inst_12029 = (state_12085[(7)]);var state_12085__$1 = state_12085;var statearr_12124_12162 = state_12085__$1;(statearr_12124_12162[(2)] = inst_12029);
(statearr_12124_12162[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6313__auto__,c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12128[(0)] = state_machine__6314__auto__);
(statearr_12128[(1)] = (1));
return statearr_12128;
});
var state_machine__6314__auto____1 = (function (state_12085){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12085);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12129){if((e12129 instanceof Object))
{var ex__6317__auto__ = e12129;var statearr_12130_12163 = state_12085;(statearr_12130_12163[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12164 = state_12085;
state_12085 = G__12164;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12085){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6380__auto__ = (function (){var statearr_12131 = f__6379__auto__.call(null);(statearr_12131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12132);
return statearr_12131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12132,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12166 = {};return obj12166;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3637__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3637__auto__,mults){
return (function (p1__12167_SHARP_){if(cljs.core.truth_(p1__12167_SHARP_.call(null,topic)))
{return p1__12167_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12167_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12282 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12283){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12283 = meta12283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12282.cljs$lang$type = true;
cljs.core.async.t12282.cljs$lang$ctorStr = "cljs.core.async/t12282";
cljs.core.async.t12282.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t12282");
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12284){var self__ = this;
var _12284__$1 = this;return self__.meta12283;
});})(mults,ensure_mult))
;
cljs.core.async.t12282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12284,meta12283__$1){var self__ = this;
var _12284__$1 = this;return (new cljs.core.async.t12282(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12283__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12282 = ((function (mults,ensure_mult){
return (function __GT_t12282(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12283){return (new cljs.core.async.t12282(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12283));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12282(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6378__auto___12396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12396,mults,ensure_mult,p){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12396,mults,ensure_mult,p){
return (function (state_12352){var state_val_12353 = (state_12352[(1)]);if((state_val_12353 === (7)))
{var inst_12348 = (state_12352[(2)]);var state_12352__$1 = state_12352;var statearr_12354_12397 = state_12352__$1;(statearr_12354_12397[(2)] = inst_12348);
(statearr_12354_12397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (20)))
{var state_12352__$1 = state_12352;var statearr_12355_12398 = state_12352__$1;(statearr_12355_12398[(2)] = null);
(statearr_12355_12398[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (1)))
{var state_12352__$1 = state_12352;var statearr_12356_12399 = state_12352__$1;(statearr_12356_12399[(2)] = null);
(statearr_12356_12399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (4)))
{var inst_12287 = (state_12352[(7)]);var inst_12287__$1 = (state_12352[(2)]);var inst_12288 = (inst_12287__$1 == null);var state_12352__$1 = (function (){var statearr_12357 = state_12352;(statearr_12357[(7)] = inst_12287__$1);
return statearr_12357;
})();if(cljs.core.truth_(inst_12288))
{var statearr_12358_12400 = state_12352__$1;(statearr_12358_12400[(1)] = (5));
} else
{var statearr_12359_12401 = state_12352__$1;(statearr_12359_12401[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (15)))
{var inst_12329 = (state_12352[(2)]);var state_12352__$1 = state_12352;var statearr_12360_12402 = state_12352__$1;(statearr_12360_12402[(2)] = inst_12329);
(statearr_12360_12402[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (21)))
{var inst_12335 = (state_12352[(8)]);var inst_12343 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12335);var state_12352__$1 = state_12352;var statearr_12361_12403 = state_12352__$1;(statearr_12361_12403[(2)] = inst_12343);
(statearr_12361_12403[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (13)))
{var inst_12311 = (state_12352[(9)]);var inst_12313 = cljs.core.chunked_seq_QMARK_.call(null,inst_12311);var state_12352__$1 = state_12352;if(inst_12313)
{var statearr_12362_12404 = state_12352__$1;(statearr_12362_12404[(1)] = (16));
} else
{var statearr_12363_12405 = state_12352__$1;(statearr_12363_12405[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (22)))
{var inst_12345 = (state_12352[(2)]);var state_12352__$1 = (function (){var statearr_12364 = state_12352;(statearr_12364[(10)] = inst_12345);
return statearr_12364;
})();var statearr_12365_12406 = state_12352__$1;(statearr_12365_12406[(2)] = null);
(statearr_12365_12406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (6)))
{var inst_12335 = (state_12352[(8)]);var inst_12287 = (state_12352[(7)]);var inst_12335__$1 = topic_fn.call(null,inst_12287);var inst_12336 = cljs.core.deref.call(null,mults);var inst_12337 = cljs.core.get.call(null,inst_12336,inst_12335__$1);var inst_12338 = cljs.core.async.muxch_STAR_.call(null,inst_12337);var state_12352__$1 = (function (){var statearr_12366 = state_12352;(statearr_12366[(8)] = inst_12335__$1);
return statearr_12366;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12352__$1,(19),inst_12338,inst_12287);
} else
{if((state_val_12353 === (17)))
{var inst_12311 = (state_12352[(9)]);var inst_12320 = cljs.core.first.call(null,inst_12311);var inst_12321 = cljs.core.async.muxch_STAR_.call(null,inst_12320);var inst_12322 = cljs.core.async.close_BANG_.call(null,inst_12321);var inst_12323 = cljs.core.next.call(null,inst_12311);var inst_12297 = inst_12323;var inst_12298 = null;var inst_12299 = (0);var inst_12300 = (0);var state_12352__$1 = (function (){var statearr_12367 = state_12352;(statearr_12367[(11)] = inst_12299);
(statearr_12367[(12)] = inst_12300);
(statearr_12367[(13)] = inst_12298);
(statearr_12367[(14)] = inst_12297);
(statearr_12367[(15)] = inst_12322);
return statearr_12367;
})();var statearr_12368_12407 = state_12352__$1;(statearr_12368_12407[(2)] = null);
(statearr_12368_12407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (3)))
{var inst_12350 = (state_12352[(2)]);var state_12352__$1 = state_12352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12352__$1,inst_12350);
} else
{if((state_val_12353 === (12)))
{var inst_12331 = (state_12352[(2)]);var state_12352__$1 = state_12352;var statearr_12369_12408 = state_12352__$1;(statearr_12369_12408[(2)] = inst_12331);
(statearr_12369_12408[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (2)))
{var state_12352__$1 = state_12352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12352__$1,(4),ch);
} else
{if((state_val_12353 === (19)))
{var inst_12340 = (state_12352[(2)]);var state_12352__$1 = state_12352;if(cljs.core.truth_(inst_12340))
{var statearr_12370_12409 = state_12352__$1;(statearr_12370_12409[(1)] = (20));
} else
{var statearr_12371_12410 = state_12352__$1;(statearr_12371_12410[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (11)))
{var inst_12311 = (state_12352[(9)]);var inst_12297 = (state_12352[(14)]);var inst_12311__$1 = cljs.core.seq.call(null,inst_12297);var state_12352__$1 = (function (){var statearr_12372 = state_12352;(statearr_12372[(9)] = inst_12311__$1);
return statearr_12372;
})();if(inst_12311__$1)
{var statearr_12373_12411 = state_12352__$1;(statearr_12373_12411[(1)] = (13));
} else
{var statearr_12374_12412 = state_12352__$1;(statearr_12374_12412[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (9)))
{var inst_12333 = (state_12352[(2)]);var state_12352__$1 = state_12352;var statearr_12375_12413 = state_12352__$1;(statearr_12375_12413[(2)] = inst_12333);
(statearr_12375_12413[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (5)))
{var inst_12294 = cljs.core.deref.call(null,mults);var inst_12295 = cljs.core.vals.call(null,inst_12294);var inst_12296 = cljs.core.seq.call(null,inst_12295);var inst_12297 = inst_12296;var inst_12298 = null;var inst_12299 = (0);var inst_12300 = (0);var state_12352__$1 = (function (){var statearr_12376 = state_12352;(statearr_12376[(11)] = inst_12299);
(statearr_12376[(12)] = inst_12300);
(statearr_12376[(13)] = inst_12298);
(statearr_12376[(14)] = inst_12297);
return statearr_12376;
})();var statearr_12377_12414 = state_12352__$1;(statearr_12377_12414[(2)] = null);
(statearr_12377_12414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (14)))
{var state_12352__$1 = state_12352;var statearr_12381_12415 = state_12352__$1;(statearr_12381_12415[(2)] = null);
(statearr_12381_12415[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (16)))
{var inst_12311 = (state_12352[(9)]);var inst_12315 = cljs.core.chunk_first.call(null,inst_12311);var inst_12316 = cljs.core.chunk_rest.call(null,inst_12311);var inst_12317 = cljs.core.count.call(null,inst_12315);var inst_12297 = inst_12316;var inst_12298 = inst_12315;var inst_12299 = inst_12317;var inst_12300 = (0);var state_12352__$1 = (function (){var statearr_12382 = state_12352;(statearr_12382[(11)] = inst_12299);
(statearr_12382[(12)] = inst_12300);
(statearr_12382[(13)] = inst_12298);
(statearr_12382[(14)] = inst_12297);
return statearr_12382;
})();var statearr_12383_12416 = state_12352__$1;(statearr_12383_12416[(2)] = null);
(statearr_12383_12416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (10)))
{var inst_12299 = (state_12352[(11)]);var inst_12300 = (state_12352[(12)]);var inst_12298 = (state_12352[(13)]);var inst_12297 = (state_12352[(14)]);var inst_12305 = cljs.core._nth.call(null,inst_12298,inst_12300);var inst_12306 = cljs.core.async.muxch_STAR_.call(null,inst_12305);var inst_12307 = cljs.core.async.close_BANG_.call(null,inst_12306);var inst_12308 = (inst_12300 + (1));var tmp12378 = inst_12299;var tmp12379 = inst_12298;var tmp12380 = inst_12297;var inst_12297__$1 = tmp12380;var inst_12298__$1 = tmp12379;var inst_12299__$1 = tmp12378;var inst_12300__$1 = inst_12308;var state_12352__$1 = (function (){var statearr_12384 = state_12352;(statearr_12384[(11)] = inst_12299__$1);
(statearr_12384[(16)] = inst_12307);
(statearr_12384[(12)] = inst_12300__$1);
(statearr_12384[(13)] = inst_12298__$1);
(statearr_12384[(14)] = inst_12297__$1);
return statearr_12384;
})();var statearr_12385_12417 = state_12352__$1;(statearr_12385_12417[(2)] = null);
(statearr_12385_12417[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (18)))
{var inst_12326 = (state_12352[(2)]);var state_12352__$1 = state_12352;var statearr_12386_12418 = state_12352__$1;(statearr_12386_12418[(2)] = inst_12326);
(statearr_12386_12418[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12353 === (8)))
{var inst_12299 = (state_12352[(11)]);var inst_12300 = (state_12352[(12)]);var inst_12302 = (inst_12300 < inst_12299);var inst_12303 = inst_12302;var state_12352__$1 = state_12352;if(cljs.core.truth_(inst_12303))
{var statearr_12387_12419 = state_12352__$1;(statearr_12387_12419[(1)] = (10));
} else
{var statearr_12388_12420 = state_12352__$1;(statearr_12388_12420[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12396,mults,ensure_mult,p))
;return ((function (switch__6313__auto__,c__6378__auto___12396,mults,ensure_mult,p){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12392[(0)] = state_machine__6314__auto__);
(statearr_12392[(1)] = (1));
return statearr_12392;
});
var state_machine__6314__auto____1 = (function (state_12352){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object))
{var ex__6317__auto__ = e12393;var statearr_12394_12421 = state_12352;(statearr_12394_12421[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12422 = state_12352;
state_12352 = G__12422;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12352){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12396,mults,ensure_mult,p))
})();var state__6380__auto__ = (function (){var statearr_12395 = f__6379__auto__.call(null);(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12396);
return statearr_12395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12396,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6378__auto___12559 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12529){var state_val_12530 = (state_12529[(1)]);if((state_val_12530 === (7)))
{var state_12529__$1 = state_12529;var statearr_12531_12560 = state_12529__$1;(statearr_12531_12560[(2)] = null);
(statearr_12531_12560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (1)))
{var state_12529__$1 = state_12529;var statearr_12532_12561 = state_12529__$1;(statearr_12532_12561[(2)] = null);
(statearr_12532_12561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (4)))
{var inst_12493 = (state_12529[(7)]);var inst_12495 = (inst_12493 < cnt);var state_12529__$1 = state_12529;if(cljs.core.truth_(inst_12495))
{var statearr_12533_12562 = state_12529__$1;(statearr_12533_12562[(1)] = (6));
} else
{var statearr_12534_12563 = state_12529__$1;(statearr_12534_12563[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (15)))
{var inst_12525 = (state_12529[(2)]);var state_12529__$1 = state_12529;var statearr_12535_12564 = state_12529__$1;(statearr_12535_12564[(2)] = inst_12525);
(statearr_12535_12564[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (13)))
{var inst_12518 = cljs.core.async.close_BANG_.call(null,out);var state_12529__$1 = state_12529;var statearr_12536_12565 = state_12529__$1;(statearr_12536_12565[(2)] = inst_12518);
(statearr_12536_12565[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (6)))
{var state_12529__$1 = state_12529;var statearr_12537_12566 = state_12529__$1;(statearr_12537_12566[(2)] = null);
(statearr_12537_12566[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (3)))
{var inst_12527 = (state_12529[(2)]);var state_12529__$1 = state_12529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12529__$1,inst_12527);
} else
{if((state_val_12530 === (12)))
{var inst_12515 = (state_12529[(8)]);var inst_12515__$1 = (state_12529[(2)]);var inst_12516 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12515__$1);var state_12529__$1 = (function (){var statearr_12538 = state_12529;(statearr_12538[(8)] = inst_12515__$1);
return statearr_12538;
})();if(cljs.core.truth_(inst_12516))
{var statearr_12539_12567 = state_12529__$1;(statearr_12539_12567[(1)] = (13));
} else
{var statearr_12540_12568 = state_12529__$1;(statearr_12540_12568[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (2)))
{var inst_12492 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12493 = (0);var state_12529__$1 = (function (){var statearr_12541 = state_12529;(statearr_12541[(7)] = inst_12493);
(statearr_12541[(9)] = inst_12492);
return statearr_12541;
})();var statearr_12542_12569 = state_12529__$1;(statearr_12542_12569[(2)] = null);
(statearr_12542_12569[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (11)))
{var inst_12493 = (state_12529[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12529,(10),Object,null,(9));var inst_12502 = chs__$1.call(null,inst_12493);var inst_12503 = done.call(null,inst_12493);var inst_12504 = cljs.core.async.take_BANG_.call(null,inst_12502,inst_12503);var state_12529__$1 = state_12529;var statearr_12543_12570 = state_12529__$1;(statearr_12543_12570[(2)] = inst_12504);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12529__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (9)))
{var inst_12493 = (state_12529[(7)]);var inst_12506 = (state_12529[(2)]);var inst_12507 = (inst_12493 + (1));var inst_12493__$1 = inst_12507;var state_12529__$1 = (function (){var statearr_12544 = state_12529;(statearr_12544[(10)] = inst_12506);
(statearr_12544[(7)] = inst_12493__$1);
return statearr_12544;
})();var statearr_12545_12571 = state_12529__$1;(statearr_12545_12571[(2)] = null);
(statearr_12545_12571[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (5)))
{var inst_12513 = (state_12529[(2)]);var state_12529__$1 = (function (){var statearr_12546 = state_12529;(statearr_12546[(11)] = inst_12513);
return statearr_12546;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12529__$1,(12),dchan);
} else
{if((state_val_12530 === (14)))
{var inst_12515 = (state_12529[(8)]);var inst_12520 = cljs.core.apply.call(null,f,inst_12515);var state_12529__$1 = state_12529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12529__$1,(16),out,inst_12520);
} else
{if((state_val_12530 === (16)))
{var inst_12522 = (state_12529[(2)]);var state_12529__$1 = (function (){var statearr_12547 = state_12529;(statearr_12547[(12)] = inst_12522);
return statearr_12547;
})();var statearr_12548_12572 = state_12529__$1;(statearr_12548_12572[(2)] = null);
(statearr_12548_12572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (10)))
{var inst_12497 = (state_12529[(2)]);var inst_12498 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12529__$1 = (function (){var statearr_12549 = state_12529;(statearr_12549[(13)] = inst_12497);
return statearr_12549;
})();var statearr_12550_12573 = state_12529__$1;(statearr_12550_12573[(2)] = inst_12498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12529__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12530 === (8)))
{var inst_12511 = (state_12529[(2)]);var state_12529__$1 = state_12529;var statearr_12551_12574 = state_12529__$1;(statearr_12551_12574[(2)] = inst_12511);
(statearr_12551_12574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6313__auto__,c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12555[(0)] = state_machine__6314__auto__);
(statearr_12555[(1)] = (1));
return statearr_12555;
});
var state_machine__6314__auto____1 = (function (state_12529){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12529);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12556){if((e12556 instanceof Object))
{var ex__6317__auto__ = e12556;var statearr_12557_12575 = state_12529;(statearr_12557_12575[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12576 = state_12529;
state_12529 = G__12576;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12529){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6380__auto__ = (function (){var statearr_12558 = f__6379__auto__.call(null);(statearr_12558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12559);
return statearr_12558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12559,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___12684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12684,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12684,out){
return (function (state_12660){var state_val_12661 = (state_12660[(1)]);if((state_val_12661 === (7)))
{var inst_12639 = (state_12660[(7)]);var inst_12640 = (state_12660[(8)]);var inst_12639__$1 = (state_12660[(2)]);var inst_12640__$1 = cljs.core.nth.call(null,inst_12639__$1,(0),null);var inst_12641 = cljs.core.nth.call(null,inst_12639__$1,(1),null);var inst_12642 = (inst_12640__$1 == null);var state_12660__$1 = (function (){var statearr_12662 = state_12660;(statearr_12662[(7)] = inst_12639__$1);
(statearr_12662[(9)] = inst_12641);
(statearr_12662[(8)] = inst_12640__$1);
return statearr_12662;
})();if(cljs.core.truth_(inst_12642))
{var statearr_12663_12685 = state_12660__$1;(statearr_12663_12685[(1)] = (8));
} else
{var statearr_12664_12686 = state_12660__$1;(statearr_12664_12686[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (1)))
{var inst_12631 = cljs.core.vec.call(null,chs);var inst_12632 = inst_12631;var state_12660__$1 = (function (){var statearr_12665 = state_12660;(statearr_12665[(10)] = inst_12632);
return statearr_12665;
})();var statearr_12666_12687 = state_12660__$1;(statearr_12666_12687[(2)] = null);
(statearr_12666_12687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (4)))
{var inst_12632 = (state_12660[(10)]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12660__$1,(7),inst_12632);
} else
{if((state_val_12661 === (6)))
{var inst_12656 = (state_12660[(2)]);var state_12660__$1 = state_12660;var statearr_12667_12688 = state_12660__$1;(statearr_12667_12688[(2)] = inst_12656);
(statearr_12667_12688[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (3)))
{var inst_12658 = (state_12660[(2)]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12660__$1,inst_12658);
} else
{if((state_val_12661 === (2)))
{var inst_12632 = (state_12660[(10)]);var inst_12634 = cljs.core.count.call(null,inst_12632);var inst_12635 = (inst_12634 > (0));var state_12660__$1 = state_12660;if(cljs.core.truth_(inst_12635))
{var statearr_12669_12689 = state_12660__$1;(statearr_12669_12689[(1)] = (4));
} else
{var statearr_12670_12690 = state_12660__$1;(statearr_12670_12690[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (11)))
{var inst_12632 = (state_12660[(10)]);var inst_12649 = (state_12660[(2)]);var tmp12668 = inst_12632;var inst_12632__$1 = tmp12668;var state_12660__$1 = (function (){var statearr_12671 = state_12660;(statearr_12671[(11)] = inst_12649);
(statearr_12671[(10)] = inst_12632__$1);
return statearr_12671;
})();var statearr_12672_12691 = state_12660__$1;(statearr_12672_12691[(2)] = null);
(statearr_12672_12691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (9)))
{var inst_12640 = (state_12660[(8)]);var state_12660__$1 = state_12660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12660__$1,(11),out,inst_12640);
} else
{if((state_val_12661 === (5)))
{var inst_12654 = cljs.core.async.close_BANG_.call(null,out);var state_12660__$1 = state_12660;var statearr_12673_12692 = state_12660__$1;(statearr_12673_12692[(2)] = inst_12654);
(statearr_12673_12692[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (10)))
{var inst_12652 = (state_12660[(2)]);var state_12660__$1 = state_12660;var statearr_12674_12693 = state_12660__$1;(statearr_12674_12693[(2)] = inst_12652);
(statearr_12674_12693[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12661 === (8)))
{var inst_12639 = (state_12660[(7)]);var inst_12641 = (state_12660[(9)]);var inst_12632 = (state_12660[(10)]);var inst_12640 = (state_12660[(8)]);var inst_12644 = (function (){var c = inst_12641;var v = inst_12640;var vec__12637 = inst_12639;var cs = inst_12632;return ((function (c,v,vec__12637,cs,inst_12639,inst_12641,inst_12632,inst_12640,state_val_12661,c__6378__auto___12684,out){
return (function (p1__12577_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12577_SHARP_);
});
;})(c,v,vec__12637,cs,inst_12639,inst_12641,inst_12632,inst_12640,state_val_12661,c__6378__auto___12684,out))
})();var inst_12645 = cljs.core.filterv.call(null,inst_12644,inst_12632);var inst_12632__$1 = inst_12645;var state_12660__$1 = (function (){var statearr_12675 = state_12660;(statearr_12675[(10)] = inst_12632__$1);
return statearr_12675;
})();var statearr_12676_12694 = state_12660__$1;(statearr_12676_12694[(2)] = null);
(statearr_12676_12694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12684,out))
;return ((function (switch__6313__auto__,c__6378__auto___12684,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12680 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12680[(0)] = state_machine__6314__auto__);
(statearr_12680[(1)] = (1));
return statearr_12680;
});
var state_machine__6314__auto____1 = (function (state_12660){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12681){if((e12681 instanceof Object))
{var ex__6317__auto__ = e12681;var statearr_12682_12695 = state_12660;(statearr_12682_12695[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12696 = state_12660;
state_12660 = G__12696;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12684,out))
})();var state__6380__auto__ = (function (){var statearr_12683 = f__6379__auto__.call(null);(statearr_12683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12684);
return statearr_12683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12684,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___12789 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12789,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12789,out){
return (function (state_12766){var state_val_12767 = (state_12766[(1)]);if((state_val_12767 === (7)))
{var inst_12748 = (state_12766[(7)]);var inst_12748__$1 = (state_12766[(2)]);var inst_12749 = (inst_12748__$1 == null);var inst_12750 = cljs.core.not.call(null,inst_12749);var state_12766__$1 = (function (){var statearr_12768 = state_12766;(statearr_12768[(7)] = inst_12748__$1);
return statearr_12768;
})();if(inst_12750)
{var statearr_12769_12790 = state_12766__$1;(statearr_12769_12790[(1)] = (8));
} else
{var statearr_12770_12791 = state_12766__$1;(statearr_12770_12791[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (1)))
{var inst_12743 = (0);var state_12766__$1 = (function (){var statearr_12771 = state_12766;(statearr_12771[(8)] = inst_12743);
return statearr_12771;
})();var statearr_12772_12792 = state_12766__$1;(statearr_12772_12792[(2)] = null);
(statearr_12772_12792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (4)))
{var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12766__$1,(7),ch);
} else
{if((state_val_12767 === (6)))
{var inst_12761 = (state_12766[(2)]);var state_12766__$1 = state_12766;var statearr_12773_12793 = state_12766__$1;(statearr_12773_12793[(2)] = inst_12761);
(statearr_12773_12793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (3)))
{var inst_12763 = (state_12766[(2)]);var inst_12764 = cljs.core.async.close_BANG_.call(null,out);var state_12766__$1 = (function (){var statearr_12774 = state_12766;(statearr_12774[(9)] = inst_12763);
return statearr_12774;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12766__$1,inst_12764);
} else
{if((state_val_12767 === (2)))
{var inst_12743 = (state_12766[(8)]);var inst_12745 = (inst_12743 < n);var state_12766__$1 = state_12766;if(cljs.core.truth_(inst_12745))
{var statearr_12775_12794 = state_12766__$1;(statearr_12775_12794[(1)] = (4));
} else
{var statearr_12776_12795 = state_12766__$1;(statearr_12776_12795[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (11)))
{var inst_12743 = (state_12766[(8)]);var inst_12753 = (state_12766[(2)]);var inst_12754 = (inst_12743 + (1));var inst_12743__$1 = inst_12754;var state_12766__$1 = (function (){var statearr_12777 = state_12766;(statearr_12777[(8)] = inst_12743__$1);
(statearr_12777[(10)] = inst_12753);
return statearr_12777;
})();var statearr_12778_12796 = state_12766__$1;(statearr_12778_12796[(2)] = null);
(statearr_12778_12796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (9)))
{var state_12766__$1 = state_12766;var statearr_12779_12797 = state_12766__$1;(statearr_12779_12797[(2)] = null);
(statearr_12779_12797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (5)))
{var state_12766__$1 = state_12766;var statearr_12780_12798 = state_12766__$1;(statearr_12780_12798[(2)] = null);
(statearr_12780_12798[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (10)))
{var inst_12758 = (state_12766[(2)]);var state_12766__$1 = state_12766;var statearr_12781_12799 = state_12766__$1;(statearr_12781_12799[(2)] = inst_12758);
(statearr_12781_12799[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12767 === (8)))
{var inst_12748 = (state_12766[(7)]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,(11),out,inst_12748);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12789,out))
;return ((function (switch__6313__auto__,c__6378__auto___12789,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12785 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12785[(0)] = state_machine__6314__auto__);
(statearr_12785[(1)] = (1));
return statearr_12785;
});
var state_machine__6314__auto____1 = (function (state_12766){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12766);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object))
{var ex__6317__auto__ = e12786;var statearr_12787_12800 = state_12766;(statearr_12787_12800[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12801 = state_12766;
state_12766 = G__12801;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12766){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12789,out))
})();var state__6380__auto__ = (function (){var statearr_12788 = f__6379__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12789);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12789,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___12898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___12898,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___12898,out){
return (function (state_12873){var state_val_12874 = (state_12873[(1)]);if((state_val_12874 === (7)))
{var inst_12868 = (state_12873[(2)]);var state_12873__$1 = state_12873;var statearr_12875_12899 = state_12873__$1;(statearr_12875_12899[(2)] = inst_12868);
(statearr_12875_12899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (1)))
{var inst_12850 = null;var state_12873__$1 = (function (){var statearr_12876 = state_12873;(statearr_12876[(7)] = inst_12850);
return statearr_12876;
})();var statearr_12877_12900 = state_12873__$1;(statearr_12877_12900[(2)] = null);
(statearr_12877_12900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (4)))
{var inst_12853 = (state_12873[(8)]);var inst_12853__$1 = (state_12873[(2)]);var inst_12854 = (inst_12853__$1 == null);var inst_12855 = cljs.core.not.call(null,inst_12854);var state_12873__$1 = (function (){var statearr_12878 = state_12873;(statearr_12878[(8)] = inst_12853__$1);
return statearr_12878;
})();if(inst_12855)
{var statearr_12879_12901 = state_12873__$1;(statearr_12879_12901[(1)] = (5));
} else
{var statearr_12880_12902 = state_12873__$1;(statearr_12880_12902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (6)))
{var state_12873__$1 = state_12873;var statearr_12881_12903 = state_12873__$1;(statearr_12881_12903[(2)] = null);
(statearr_12881_12903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (3)))
{var inst_12870 = (state_12873[(2)]);var inst_12871 = cljs.core.async.close_BANG_.call(null,out);var state_12873__$1 = (function (){var statearr_12882 = state_12873;(statearr_12882[(9)] = inst_12870);
return statearr_12882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12873__$1,inst_12871);
} else
{if((state_val_12874 === (2)))
{var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12873__$1,(4),ch);
} else
{if((state_val_12874 === (11)))
{var inst_12853 = (state_12873[(8)]);var inst_12862 = (state_12873[(2)]);var inst_12850 = inst_12853;var state_12873__$1 = (function (){var statearr_12883 = state_12873;(statearr_12883[(10)] = inst_12862);
(statearr_12883[(7)] = inst_12850);
return statearr_12883;
})();var statearr_12884_12904 = state_12873__$1;(statearr_12884_12904[(2)] = null);
(statearr_12884_12904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (9)))
{var inst_12853 = (state_12873[(8)]);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12873__$1,(11),out,inst_12853);
} else
{if((state_val_12874 === (5)))
{var inst_12850 = (state_12873[(7)]);var inst_12853 = (state_12873[(8)]);var inst_12857 = cljs.core._EQ_.call(null,inst_12853,inst_12850);var state_12873__$1 = state_12873;if(inst_12857)
{var statearr_12886_12905 = state_12873__$1;(statearr_12886_12905[(1)] = (8));
} else
{var statearr_12887_12906 = state_12873__$1;(statearr_12887_12906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (10)))
{var inst_12865 = (state_12873[(2)]);var state_12873__$1 = state_12873;var statearr_12888_12907 = state_12873__$1;(statearr_12888_12907[(2)] = inst_12865);
(statearr_12888_12907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12874 === (8)))
{var inst_12850 = (state_12873[(7)]);var tmp12885 = inst_12850;var inst_12850__$1 = tmp12885;var state_12873__$1 = (function (){var statearr_12889 = state_12873;(statearr_12889[(7)] = inst_12850__$1);
return statearr_12889;
})();var statearr_12890_12908 = state_12873__$1;(statearr_12890_12908[(2)] = null);
(statearr_12890_12908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___12898,out))
;return ((function (switch__6313__auto__,c__6378__auto___12898,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_12894 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12894[(0)] = state_machine__6314__auto__);
(statearr_12894[(1)] = (1));
return statearr_12894;
});
var state_machine__6314__auto____1 = (function (state_12873){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_12873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e12895){if((e12895 instanceof Object))
{var ex__6317__auto__ = e12895;var statearr_12896_12909 = state_12873;(statearr_12896_12909[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12910 = state_12873;
state_12873 = G__12910;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_12873){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_12873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___12898,out))
})();var state__6380__auto__ = (function (){var statearr_12897 = f__6379__auto__.call(null);(statearr_12897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___12898);
return statearr_12897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___12898,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___13045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___13045,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___13045,out){
return (function (state_13015){var state_val_13016 = (state_13015[(1)]);if((state_val_13016 === (7)))
{var inst_13011 = (state_13015[(2)]);var state_13015__$1 = state_13015;var statearr_13017_13046 = state_13015__$1;(statearr_13017_13046[(2)] = inst_13011);
(statearr_13017_13046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (1)))
{var inst_12978 = (new Array(n));var inst_12979 = inst_12978;var inst_12980 = (0);var state_13015__$1 = (function (){var statearr_13018 = state_13015;(statearr_13018[(7)] = inst_12979);
(statearr_13018[(8)] = inst_12980);
return statearr_13018;
})();var statearr_13019_13047 = state_13015__$1;(statearr_13019_13047[(2)] = null);
(statearr_13019_13047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (4)))
{var inst_12983 = (state_13015[(9)]);var inst_12983__$1 = (state_13015[(2)]);var inst_12984 = (inst_12983__$1 == null);var inst_12985 = cljs.core.not.call(null,inst_12984);var state_13015__$1 = (function (){var statearr_13020 = state_13015;(statearr_13020[(9)] = inst_12983__$1);
return statearr_13020;
})();if(inst_12985)
{var statearr_13021_13048 = state_13015__$1;(statearr_13021_13048[(1)] = (5));
} else
{var statearr_13022_13049 = state_13015__$1;(statearr_13022_13049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (15)))
{var inst_13005 = (state_13015[(2)]);var state_13015__$1 = state_13015;var statearr_13023_13050 = state_13015__$1;(statearr_13023_13050[(2)] = inst_13005);
(statearr_13023_13050[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (13)))
{var state_13015__$1 = state_13015;var statearr_13024_13051 = state_13015__$1;(statearr_13024_13051[(2)] = null);
(statearr_13024_13051[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (6)))
{var inst_12980 = (state_13015[(8)]);var inst_13001 = (inst_12980 > (0));var state_13015__$1 = state_13015;if(cljs.core.truth_(inst_13001))
{var statearr_13025_13052 = state_13015__$1;(statearr_13025_13052[(1)] = (12));
} else
{var statearr_13026_13053 = state_13015__$1;(statearr_13026_13053[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (3)))
{var inst_13013 = (state_13015[(2)]);var state_13015__$1 = state_13015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13015__$1,inst_13013);
} else
{if((state_val_13016 === (12)))
{var inst_12979 = (state_13015[(7)]);var inst_13003 = cljs.core.vec.call(null,inst_12979);var state_13015__$1 = state_13015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13015__$1,(15),out,inst_13003);
} else
{if((state_val_13016 === (2)))
{var state_13015__$1 = state_13015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13015__$1,(4),ch);
} else
{if((state_val_13016 === (11)))
{var inst_12995 = (state_13015[(2)]);var inst_12996 = (new Array(n));var inst_12979 = inst_12996;var inst_12980 = (0);var state_13015__$1 = (function (){var statearr_13027 = state_13015;(statearr_13027[(10)] = inst_12995);
(statearr_13027[(7)] = inst_12979);
(statearr_13027[(8)] = inst_12980);
return statearr_13027;
})();var statearr_13028_13054 = state_13015__$1;(statearr_13028_13054[(2)] = null);
(statearr_13028_13054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (9)))
{var inst_12979 = (state_13015[(7)]);var inst_12993 = cljs.core.vec.call(null,inst_12979);var state_13015__$1 = state_13015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13015__$1,(11),out,inst_12993);
} else
{if((state_val_13016 === (5)))
{var inst_12983 = (state_13015[(9)]);var inst_12979 = (state_13015[(7)]);var inst_12988 = (state_13015[(11)]);var inst_12980 = (state_13015[(8)]);var inst_12987 = (inst_12979[inst_12980] = inst_12983);var inst_12988__$1 = (inst_12980 + (1));var inst_12989 = (inst_12988__$1 < n);var state_13015__$1 = (function (){var statearr_13029 = state_13015;(statearr_13029[(11)] = inst_12988__$1);
(statearr_13029[(12)] = inst_12987);
return statearr_13029;
})();if(cljs.core.truth_(inst_12989))
{var statearr_13030_13055 = state_13015__$1;(statearr_13030_13055[(1)] = (8));
} else
{var statearr_13031_13056 = state_13015__$1;(statearr_13031_13056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (14)))
{var inst_13008 = (state_13015[(2)]);var inst_13009 = cljs.core.async.close_BANG_.call(null,out);var state_13015__$1 = (function (){var statearr_13033 = state_13015;(statearr_13033[(13)] = inst_13008);
return statearr_13033;
})();var statearr_13034_13057 = state_13015__$1;(statearr_13034_13057[(2)] = inst_13009);
(statearr_13034_13057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (10)))
{var inst_12999 = (state_13015[(2)]);var state_13015__$1 = state_13015;var statearr_13035_13058 = state_13015__$1;(statearr_13035_13058[(2)] = inst_12999);
(statearr_13035_13058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13016 === (8)))
{var inst_12979 = (state_13015[(7)]);var inst_12988 = (state_13015[(11)]);var tmp13032 = inst_12979;var inst_12979__$1 = tmp13032;var inst_12980 = inst_12988;var state_13015__$1 = (function (){var statearr_13036 = state_13015;(statearr_13036[(7)] = inst_12979__$1);
(statearr_13036[(8)] = inst_12980);
return statearr_13036;
})();var statearr_13037_13059 = state_13015__$1;(statearr_13037_13059[(2)] = null);
(statearr_13037_13059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___13045,out))
;return ((function (switch__6313__auto__,c__6378__auto___13045,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_13041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13041[(0)] = state_machine__6314__auto__);
(statearr_13041[(1)] = (1));
return statearr_13041;
});
var state_machine__6314__auto____1 = (function (state_13015){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_13015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e13042){if((e13042 instanceof Object))
{var ex__6317__auto__ = e13042;var statearr_13043_13060 = state_13015;(statearr_13043_13060[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13061 = state_13015;
state_13015 = G__13061;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_13015){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_13015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___13045,out))
})();var state__6380__auto__ = (function (){var statearr_13044 = f__6379__auto__.call(null);(statearr_13044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___13045);
return statearr_13044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___13045,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6378__auto___13204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6378__auto___13204,out){
return (function (){var f__6379__auto__ = (function (){var switch__6313__auto__ = ((function (c__6378__auto___13204,out){
return (function (state_13174){var state_val_13175 = (state_13174[(1)]);if((state_val_13175 === (7)))
{var inst_13170 = (state_13174[(2)]);var state_13174__$1 = state_13174;var statearr_13176_13205 = state_13174__$1;(statearr_13176_13205[(2)] = inst_13170);
(statearr_13176_13205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (1)))
{var inst_13133 = [];var inst_13134 = inst_13133;var inst_13135 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13174__$1 = (function (){var statearr_13177 = state_13174;(statearr_13177[(7)] = inst_13135);
(statearr_13177[(8)] = inst_13134);
return statearr_13177;
})();var statearr_13178_13206 = state_13174__$1;(statearr_13178_13206[(2)] = null);
(statearr_13178_13206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (4)))
{var inst_13138 = (state_13174[(9)]);var inst_13138__$1 = (state_13174[(2)]);var inst_13139 = (inst_13138__$1 == null);var inst_13140 = cljs.core.not.call(null,inst_13139);var state_13174__$1 = (function (){var statearr_13179 = state_13174;(statearr_13179[(9)] = inst_13138__$1);
return statearr_13179;
})();if(inst_13140)
{var statearr_13180_13207 = state_13174__$1;(statearr_13180_13207[(1)] = (5));
} else
{var statearr_13181_13208 = state_13174__$1;(statearr_13181_13208[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (15)))
{var inst_13164 = (state_13174[(2)]);var state_13174__$1 = state_13174;var statearr_13182_13209 = state_13174__$1;(statearr_13182_13209[(2)] = inst_13164);
(statearr_13182_13209[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (13)))
{var state_13174__$1 = state_13174;var statearr_13183_13210 = state_13174__$1;(statearr_13183_13210[(2)] = null);
(statearr_13183_13210[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (6)))
{var inst_13134 = (state_13174[(8)]);var inst_13159 = inst_13134.length;var inst_13160 = (inst_13159 > (0));var state_13174__$1 = state_13174;if(cljs.core.truth_(inst_13160))
{var statearr_13184_13211 = state_13174__$1;(statearr_13184_13211[(1)] = (12));
} else
{var statearr_13185_13212 = state_13174__$1;(statearr_13185_13212[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (3)))
{var inst_13172 = (state_13174[(2)]);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13174__$1,inst_13172);
} else
{if((state_val_13175 === (12)))
{var inst_13134 = (state_13174[(8)]);var inst_13162 = cljs.core.vec.call(null,inst_13134);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,(15),out,inst_13162);
} else
{if((state_val_13175 === (2)))
{var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13174__$1,(4),ch);
} else
{if((state_val_13175 === (11)))
{var inst_13138 = (state_13174[(9)]);var inst_13142 = (state_13174[(10)]);var inst_13152 = (state_13174[(2)]);var inst_13153 = [];var inst_13154 = inst_13153.push(inst_13138);var inst_13134 = inst_13153;var inst_13135 = inst_13142;var state_13174__$1 = (function (){var statearr_13186 = state_13174;(statearr_13186[(11)] = inst_13152);
(statearr_13186[(7)] = inst_13135);
(statearr_13186[(8)] = inst_13134);
(statearr_13186[(12)] = inst_13154);
return statearr_13186;
})();var statearr_13187_13213 = state_13174__$1;(statearr_13187_13213[(2)] = null);
(statearr_13187_13213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (9)))
{var inst_13134 = (state_13174[(8)]);var inst_13150 = cljs.core.vec.call(null,inst_13134);var state_13174__$1 = state_13174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13174__$1,(11),out,inst_13150);
} else
{if((state_val_13175 === (5)))
{var inst_13135 = (state_13174[(7)]);var inst_13138 = (state_13174[(9)]);var inst_13142 = (state_13174[(10)]);var inst_13142__$1 = f.call(null,inst_13138);var inst_13143 = cljs.core._EQ_.call(null,inst_13142__$1,inst_13135);var inst_13144 = cljs.core.keyword_identical_QMARK_.call(null,inst_13135,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13145 = (inst_13143) || (inst_13144);var state_13174__$1 = (function (){var statearr_13188 = state_13174;(statearr_13188[(10)] = inst_13142__$1);
return statearr_13188;
})();if(cljs.core.truth_(inst_13145))
{var statearr_13189_13214 = state_13174__$1;(statearr_13189_13214[(1)] = (8));
} else
{var statearr_13190_13215 = state_13174__$1;(statearr_13190_13215[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (14)))
{var inst_13167 = (state_13174[(2)]);var inst_13168 = cljs.core.async.close_BANG_.call(null,out);var state_13174__$1 = (function (){var statearr_13192 = state_13174;(statearr_13192[(13)] = inst_13167);
return statearr_13192;
})();var statearr_13193_13216 = state_13174__$1;(statearr_13193_13216[(2)] = inst_13168);
(statearr_13193_13216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (10)))
{var inst_13157 = (state_13174[(2)]);var state_13174__$1 = state_13174;var statearr_13194_13217 = state_13174__$1;(statearr_13194_13217[(2)] = inst_13157);
(statearr_13194_13217[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13175 === (8)))
{var inst_13138 = (state_13174[(9)]);var inst_13142 = (state_13174[(10)]);var inst_13134 = (state_13174[(8)]);var inst_13147 = inst_13134.push(inst_13138);var tmp13191 = inst_13134;var inst_13134__$1 = tmp13191;var inst_13135 = inst_13142;var state_13174__$1 = (function (){var statearr_13195 = state_13174;(statearr_13195[(7)] = inst_13135);
(statearr_13195[(14)] = inst_13147);
(statearr_13195[(8)] = inst_13134__$1);
return statearr_13195;
})();var statearr_13196_13218 = state_13174__$1;(statearr_13196_13218[(2)] = null);
(statearr_13196_13218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6378__auto___13204,out))
;return ((function (switch__6313__auto__,c__6378__auto___13204,out){
return (function() {
var state_machine__6314__auto__ = null;
var state_machine__6314__auto____0 = (function (){var statearr_13200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13200[(0)] = state_machine__6314__auto__);
(statearr_13200[(1)] = (1));
return statearr_13200;
});
var state_machine__6314__auto____1 = (function (state_13174){while(true){
var ret_value__6315__auto__ = (function (){try{while(true){
var result__6316__auto__ = switch__6313__auto__.call(null,state_13174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6316__auto__;
}
break;
}
}catch (e13201){if((e13201 instanceof Object))
{var ex__6317__auto__ = e13201;var statearr_13202_13219 = state_13174;(statearr_13202_13219[(5)] = ex__6317__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13220 = state_13174;
state_13174 = G__13220;
continue;
}
} else
{return ret_value__6315__auto__;
}
break;
}
});
state_machine__6314__auto__ = function(state_13174){
switch(arguments.length){
case 0:
return state_machine__6314__auto____0.call(this);
case 1:
return state_machine__6314__auto____1.call(this,state_13174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6314__auto____0;
state_machine__6314__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6314__auto____1;
return state_machine__6314__auto__;
})()
;})(switch__6313__auto__,c__6378__auto___13204,out))
})();var state__6380__auto__ = (function (){var statearr_13203 = f__6379__auto__.call(null);(statearr_13203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6378__auto___13204);
return statearr_13203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6380__auto__);
});})(c__6378__auto___13204,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map