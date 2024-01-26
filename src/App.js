import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    websiteName: '',
    userName: '',
    passwordsList: [],
    password: '',
    searchValue: '',
    onSubmit: false,
    isChecked: false,
    count: 0,
  }

  onSubmitting = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newPassword = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteName: '',
      userName: '',
      password: '',
      onSubmit: true,
      count: prevState.count + 1,
    }))
  }

  onChangingwebsite = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangingusername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangingpassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangingSearch = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  renderPasswords = () => {
    const {passwordsList, isChecked} = this.state

    return (
      <div>
        <ul>
          {passwordsList.map(eachitem => (
            <div>
              <li>
                key={eachitem.id}
                <p>{eachitem.websiteName}</p>
                <p>{eachitem.userName}</p>
                {isChecked ? (
                  <p>{eachitem.password}</p>
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                    alt="stars"
                    className="stars-img"
                  />
                )}
                <button type="button" data-testid="delete">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="delete-img"
                  />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }

  renderNoPasswordImg = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-img"
      />
      <p>No Passwords</p>
    </div>
  )

  render() {
    const {searchValue, passwordsList, onSubmit, count, isChecked} = this.state
    const onClickedShowPasswords = () => {
      this.setState(prevState => ({
        isChecked: !prevState.isChecked,
      }))
    }
    /*  const searchResults = passwordsList.filter(eachitem =>
      eachitem.website.includes(searchValue),
    ) */

    return (
      <div className="main-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-img"
        />
        <div className="password-container">
          <form onSubmit={this.onSubmitting}>
            <div className="new-password-container">
              <h1 className="password-para">Add new Password</h1>
              <div className="website-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="website-value"
                  onChange={this.onChangingwebsite}
                />
              </div>
              <div className="username-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="username-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="username-value"
                  onChange={this.onChangingusername}
                />
              </div>
              <div className="password-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="password-logo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="password-value"
                  onChange={this.onChangingpassword}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="img-password-manager"
          />
        </div>

        <div className="password-add-container">
          <div className="your-password-head">
            <h1 className="password-para">Your Passwords</h1>
            <p>{count}</p>
            <div className="search-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Enter the search"
                className="search-value"
                onChange={this.onChangingSearch}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            <button
              type="button"
              onClick={onClickedShowPasswords}
              className="showpassword-btn"
            >
              <input type="checkbox" id="showPasswords" />
              <label htmlFor="showPasswords" className="password-para-1">
                Show Passwords
              </label>
            </button>
          </div>
          {onSubmit ? this.renderPasswords() : this.renderNoPasswordImg()}
        </div>
      </div>
    )
  }
}

export default App
