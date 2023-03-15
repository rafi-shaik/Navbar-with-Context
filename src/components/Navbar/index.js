// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const buttonClicked = () => {
        toggleTheme()
      }

      const renderDarkTheme = () => (
        <div className="navbar dark-theme">
          <div className="navbar-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
            <ul className="list-container">
              <li className="nav-menu-item">
                <Link to="/" className="dark-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className="dark-link">
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={buttonClicked}
              data-testid="theme"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            </button>
          </div>
        </div>
      )

      const renderLightTheme = () => (
        <div className="navbar light-theme">
          <div className="navbar-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
            <ul className="list-container">
              <li className="nav-menu-item">
                <Link to="/" className="light-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className="light-link">
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              onClick={buttonClicked}
              data-testid="theme"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme-image"
              />
            </button>
          </div>
        </div>
      )

      return isDarkTheme ? renderDarkTheme() : renderLightTheme()
    }}
  </ThemeContext.Consumer>
)

export default Navbar
