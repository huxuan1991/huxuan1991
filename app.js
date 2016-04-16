import React from 'react'
import ReactDOM from 'react-dom'

var Name = React.createClass({
  render: function() {
    return (
      <div>
        <h1>yeah</h1>
      </div>
      )
  }
});

ReactDOM.render(
  <Name />,
  document.getElementById('content')
  )
