import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { ContextPorvider } from './contexts/ContexProvider'

ReactDOM.render(
  <ContextPorvider>
    <App />
  </ContextPorvider>,
  document.getElementById('root'),
)
