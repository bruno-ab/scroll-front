import React from 'react'
import PropTypes from 'prop-types'
import styles from './Base.module.css'

console.info(styles)

const BaseTemplate = ({ children }) => (
  <div className={styles.base}>
    {children}
  </div>
)

BaseTemplate.propTypes = {
  children: PropTypes.string
}

export default BaseTemplate
