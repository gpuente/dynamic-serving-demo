# Dynamic-Serving-Demo

Dynamic Serving with React and Express, based on [react-universal-component](https://github.com/faceyspacey/react-universal-component):

  - Code Splitting for different versions supported (Mobile, Desktop).
  - UserAgent info injection with [express-useragent](https://github.com/biggora/express-useragent/)
  - Set Vary header in response
  - SSR with HMR
  - Webpack 4

## Scripts

  - ```start```: start the server in development mode (default PORT 3000)
  - ```start:prod```: build project and start server in production mode.
  - ```format```: runs prettier.
  - ```clean```: delete build folders
