const React = require('react')
const ReactDOM = require('react-dom')

/*
*     these two are the same
*     () => ()
*
*     whatever is in the second parenthesis will be returned automatically
*
*     function () {
*
*       return
*
*     }
*
* */

const App = () => (
  <div className='app-container'>
    <div className="home-info">
      <h1 className='title'>svidec</h1>
      <input type='text' className='search' placeholder='Search' />
      <button className='browse-all'>or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
