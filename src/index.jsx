import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const history = createHistory()
const { __LAYOUT_VERSION__: layoutInfo } = window

const render = App => ReactDOM.hydrate(
  <AppContainer>
    <App history={history} {...layoutInfo} />
  </AppContainer>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const App = require('./components/App.jsx').default // eslint-ignore-line
    render(App)
  })
}

render(App)
