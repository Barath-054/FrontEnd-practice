// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
//  import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from '../../../react-redux/src/store.js'

import {Provider } from "react-redux"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
)
