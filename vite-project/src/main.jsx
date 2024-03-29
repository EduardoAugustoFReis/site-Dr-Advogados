import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from "./pages/home"

import GlobalStyles from "./styles/global";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home/>
  </React.StrictMode>,
)
