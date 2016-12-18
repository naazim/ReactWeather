var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h3>About</h3>
        <p>Welcome to About page</p>
      </div>
    )
  }
});

var About = (props) => <h3>About Component</h3>;

module.exports = About;
