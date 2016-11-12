const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'This is my search term'
    }
  },
  handleSearchTermEvent (event) {
    // sets the value of searchTerm from the input
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Svideo</h1>
          <input value={this.state.searchTerm} type='text' placeholder='Search' className='search-input' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
