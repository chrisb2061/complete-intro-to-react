var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({

  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }

})

var myTitleFactory = React.createFactory(myTitle);
var ce = React.createElement

var myFirstComponent = (
  div(null,
    myTitleFactory({title: "Props are Great", color: "rebeccapurple"}),
    ce(myTitle, {title: "Pops are the best", color: "mediumaquamarine"}),
    React.createElement(myTitle, {title: "use props everyehere", color: "papayawhip"})
  )
)
ReactDOM.render(myFirstComponent, document.getElementById("app"))
