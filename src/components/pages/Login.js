import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'ui/Button'
import './Login.css'

export default () => (
  <div className="login-page">
    <div className="form">
      <form className="register-form">
        <input type="text" placeholder="name" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="email address" />
        <Button type="success">create</Button>
        <p className="message">Already registered?
          <Link to="/signin">Sign in</Link>
        </p>
      </form>
      <form className="login-form">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <Button type="success">login</Button>
        <p className="message">Not registered?
          <Link to="/signup">Create account</Link>
        </p>
      </form>
    </div>
  </div>
)
