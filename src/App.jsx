//import reactLogo from './assets/react.svg'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./paginas/Home"
import Contacto from "./paginas/Contacto"
import Cita from "./paginas/Cita"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="contacto" element={<Contacto />} />
        <Route path="cita" element={< Cita/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
