export const increment = () => (dispatch) => {
  dispatch({
    type: 'INCREMENT',
  })
}

export const decrement = () => ({
  type: 'DECREMENT',
})
