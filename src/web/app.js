
var msg = (x) => { return x + ' world!'; }

console.log(msg('hello'))
var React = require('react');

var Pixel = require('../components/pixel');

var Dispatcher = require('../dispatcher_f');

React.render(<Pixel />, document.getElementById('example'));


