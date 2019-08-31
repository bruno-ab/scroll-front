import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Button.module.css'

const Button = ({ children, type, onClick }) => {
  const classComponent = classNames(styles.button, {
    [styles['button-success']]: type === 'success'
  })

  return (
    <button
      type="button"
      className={classComponent}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
