/*
 * this is the Dispatcher, its basicly the main system through which
 * all events will trickly to and work with
 */


var EventEmitter = require('events').EventEmitter;
var Rx = require('rx');
var util = require('util');

var Dispatcher = function() {
  EventEmitter.call(this);
};

util.inherits(Dispatcher, EventEmitter);

//returns an Observable for an event in the dispatcher
Dispatcher.prototype.getObservable = function(event) {
  return Rx.Node.fromEvent(this, event);
};

Dispatcher.prototype.notify = function() {
  
};


module.exports.Dispatcher = Dispatcher;
