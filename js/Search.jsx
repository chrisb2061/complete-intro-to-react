const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
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
          {data.shows
            //  checks if search term matches anything in show.title or show.description
            .filter((show) => {
              //  same as show.title + show.descrition (es6 concatination)
              let searchString = `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase())

              return searchString >= 0
            })
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
