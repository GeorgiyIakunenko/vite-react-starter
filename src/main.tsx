import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Welcome} from "@/pages/Welcome.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Welcome/>
  </React.StrictMode>,
)
