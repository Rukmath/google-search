import './index.css'

const SuggestionItem = props => {
  const {details, selectedItem} = props
  const {id, suggestion} = details

  const addSuggestion = () => {
    selectedItem(id, suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={addSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
