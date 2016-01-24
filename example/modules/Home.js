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
        <Form/>
      </div>
    );
  }
});


var Form = React.createClass({
  onButtonClick : function() {
    event.preventDefault();
    var value = this.refs.formInput.value;

    // var value = this.refs.testvalue.value;
    // console.log(this.refs.bullshit.value);

    // console.log(value);
    // event.preventDefault();
  },
  render : function(){
    return (
      <form action="">
        <label htmlFor="">label</label>
        <input type="text" ref="formInput"/>
        <button type="submit" onClick={this.onButtonClick}>submit</button>
      </form>
    );
  }
});

module.exports = Home;



    