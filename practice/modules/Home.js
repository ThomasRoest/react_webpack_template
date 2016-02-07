var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
  getInitialState : function(){
    return {
      test_items: {}
    };
  },
  render: function() {
    return (
      <div>
        <h1>React template</h1>
      </div>
    );
  }
});


module.exports = Home;



    