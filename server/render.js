import React from 'react'
import ReactDOM from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import App from '../src/components/App'

export default ({ clientStats }) => (req, res) => {
  const { isMobile, isDesktop } = req.useragent
  const layoutVersion = {
    isMobile,
    isDesktop
  }

  const history = createHistory({ initialEntries: [req.path] })
  const app = ReactDOM.renderToString(
    <App
      history={history}
      isMobile={isMobile}
      isDesktop={isDesktop}
    />
  )
  const chunkNames = flushChunkNames()

  const {
    js,
    styles,
    cssHash
  } = flushChunks(clientStats, { chunkNames })

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Dynamic Serving</title>
          ${styles}
        </head>
        <body>
          <div id="root">${app}</div>
          ${cssHash}
          ${js}

          <script>
            window.__LAYOUT_VERSION__ = ${JSON.stringify(layoutVersion).replace(
              /</g,
              '\\u003c'
            )};
          </script>
        </body>
      </html>`
  )
}
