const React = require('react')

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

const Landing = () => (
  <div className='app-container'>
    <div className="home-info">
      <h1 className='title'>svidec</h1>
      <input type='text' className='search' placeholder='Search' />
      <button className='browse-all'>or Browse All</button>
    </div>
  </div>
)

module.exports = Landing
