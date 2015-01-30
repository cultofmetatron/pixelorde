
var React = require('react');

var Pixel = React.createClass({
  
  getInitialState: function() {
    return {
      red:  this.props.red || 0,
      green: this.props.green || 0,
      blue:  this.props.blue || 0,
      alpha:  this.props.alpha || 1,
      size: this.props.size || 5
    };
  },
  
  computeColor: function() {
    return 'rgba(' + [ this.state.red, this.state.green, this.state.blue, this.state.alpha ].join(', ') + ')';
  },
  
  render: function() {
    var colorVal = this.computeColor();
    console.log(((x) => {return "hello"})())
    
    //var colorVal =  'rgba(255, 0, 0, 1)';
    console.log(colorVal, this.state)
    var divstyle = {
      backgroundColor: colorVal,
      width: '' + this.state.size + 'px',
      height: '' + this.state.size + 'px'
    }
    return <div style={divstyle}></div>
  }

});

module.exports = Pixel;
