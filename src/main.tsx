import React from 'react'
import ReactDOM from 'react-dom/client'

import {Welcome} from "@/pages/Welcome.tsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Welcome/>
  </React.StrictMode>,
)
