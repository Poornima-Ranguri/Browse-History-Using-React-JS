import './index.css'

const BrowseItem = props => {
  const {history, onDlt} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDeleting = () => {
    onDlt(id)
  }

  return (
    <li className="item-container">
      <div className="time-container">
        <p>{timeAccessed}</p>
      </div>
      <div className="logo-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="parag">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={onDeleting}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowseItem
