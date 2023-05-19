import './index.css'

const PasswordItem = props => {
  const {passwordItemDetails, onDeletePasswordItem, isChecked} = props
  const {id, websiteName, userName, password} = passwordItemDetails

  const onClickDelete = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="list-item">
      <div className="first-letter">{websiteName[0].toUpperCase()}</div>
      <div className="site-password-name-container">
        <p className="website">{websiteName}</p>
        <p className="name">{userName}</p>
        {isChecked === true ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
