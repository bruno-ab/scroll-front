import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'store/reducers'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )

  // Hot reloading[]
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(createRootReducer(history))
    })
  }

  return store
}
