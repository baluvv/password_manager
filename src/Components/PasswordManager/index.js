import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordItemsList: [],
    websiteName: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPasswordItem = event => {
    event.preventDefault()
    const {passwordItemsList, websiteName, userName, password} = this.state
    const newPasswordItem = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }

    this.setState({
      passwordItemsList: [...passwordItemsList, newPasswordItem],
      websiteName: '',
      userName: '',
      password: '',
    })
  }

  onDeletePasswordItem = id => {
    const {passwordItemsList} = this.state
    const filteredList = passwordItemsList.filter(
      eachPasswordItem => eachPasswordItem.id !== id,
    )
    this.setState({passwordItemsList: filteredList})
  }

  toggleChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {
      passwordItemsList,
      websiteName,
      userName,
      password,
      searchInput,
      isChecked,
    } = this.state

    const filteredPasswordsList = passwordItemsList.filter(eachPasswordItem =>
      eachPasswordItem.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-container">
          <form className="inputs-container">
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsite}
                value={websiteName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.onChangeUserName}
                value={userName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.onAddPasswordItem}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image"
          />
        </div>
        <div className="bottom-container">
          <div className="bottom-top-container">
            <div className="password-count-container">
              <h1 className="your-passwords">Your Passwords</h1>
              <p className="count">{filteredPasswordsList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png  "
                alt="search"
                className="search-input-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input type="checkbox" id="Checkbox" onClick={this.toggleChecked} />
            <label className="label" htmlFor="Checkbox">
              Show Passwords
            </label>
          </div>
          {filteredPasswordsList.length === 0 && (
            <div className="no-views-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords">No Passwords</p>
            </div>
          )}
          {filteredPasswordsList.length !== 0 && (
            <ul className="password-items-container">
              {filteredPasswordsList.map(eachPasswordItem => (
                <PasswordItem
                  passwordItemDetails={eachPasswordItem}
                  key={eachPasswordItem.id}
                  onDeletePasswordItem={this.onDeletePasswordItem}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
