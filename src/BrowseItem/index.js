import './index.css'

const BrowseItem = props => {
  const {History, onDeletingItem, length} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = History
  const onDelete = () => {
    onDeletingItem(id)
  }

  const paraItem = () => {
    ;<p className="paragraph">There is no history to show</p>
  }

  return (
    <li className="list-container" key={id}>
      {length === 0 && paraItem()}
      <div className="lists">
        <p className="parag-time">{timeAccessed}</p>
        <div className="element-container">
          <div className="logo-container">
            <img src={logoUrl} alt="domain logo" className="image" />
            <div className="domain-container">
              <p className="parag">{title}</p>
              <p className="paragraph">{domainUrl}</p>
            </div>
          </div>
          <button
            className="button-container"
            data-testid="delete"
            type="button"
            onClick={onDelete}
            id={id}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
              onClick={onDelete}
              id={id}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowseItem
