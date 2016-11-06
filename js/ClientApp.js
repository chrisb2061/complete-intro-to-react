var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({

  render () {
    return (
      div(null,
        h1(null, "here is a new line")
      )
    )
  }

})

var myFirstComponent = (
  div(null,
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null)
  )
)
ReactDOM.render(myFirstComponent, document.getElementById("app"))
