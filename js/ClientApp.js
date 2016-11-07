var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var myTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var myFirstComponent = (
    div(null,
        myTitleFactory({title: 'Props are Great', color: 'rebeccapurple'}),
        ce(MyTitle, {title: 'Pops are the best', color: 'mediumaquamarine'}),
        React.createElement(MyTitle, {title: 'use props everywhere', color: 'papayawhip'})
    )
)
ReactDOM.render(myFirstComponent, document.getElementById('app'))
