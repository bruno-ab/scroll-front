import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from 'store/counter/actions'
import Button from 'ui/Button'
import logo from 'static/img/bg-panel.jpg'

const Counter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <img src={logo} alt="asdad" />
      Counter: {count}
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  )
}

export default Counter
