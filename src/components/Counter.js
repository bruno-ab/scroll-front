import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from 'store/actions/counter'

const Counter = ({ increment, decrement, count }) => (
  <div>
    Counter: {count}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

Counter.defaultProps = {
  count: 0
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
