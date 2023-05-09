import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  select = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResultsList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <ul className="box-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              onChange={this.onSearch}
              type="search"
              className="search-input"
              value={searchInput}
            />
          </div>
          {searchResultsList.map(eachSuggestion => (
            <SuggestionItem
              key={eachSuggestion.id}
              details={eachSuggestion}
              selectedItem={this.select}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
