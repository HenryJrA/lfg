import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App/App'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route render={({ history }) => <App history={history} />} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
