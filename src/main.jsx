import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createHashRouter, RouterProvider } from 'react-router-dom'

import Home from './paginas/Home.jsx'
import Cita from './paginas/Cita.jsx'
import Contacto from './paginas/Contacto.jsx'

const router = createHashRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/contacto",
    element: <Contacto />
  },
  {
    path:"/cita",
    element: <Cita />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <React.StrictMode>
    <RouterProvider router={router}>

        <App />
    </RouterProvider>
   </React.StrictMode>,


  //  <React.StrictMode>
    // <HashRouter>
    //     <App />
    // </HashRouter>
  //  </React.StrictMode>,

  // <BrowserRouter>
  //     <Routes>
  //       <Route path="*" element={ 
         
  //           <App /> 
  //       }>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
)
