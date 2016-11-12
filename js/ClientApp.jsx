const React = require('react')
const ReactDOM = require('react-dom')

// Routing
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

// Layout
const Layout = require('./layout')

// Page components
const Landing = require('./Landing')
const Search = require('./Search')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
