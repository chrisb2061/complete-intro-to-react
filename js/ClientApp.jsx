const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

var MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title='Whatevs' color='rebeccapurple' />
      <MyTitle title='Yooo' color='papayawhip' />
      <MyTitle title='what upppp' color='#f06d06' />
    </div>
    )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
