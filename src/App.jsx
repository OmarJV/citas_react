//import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {

  const [pacientes, setPacientes] = useState([]); //Llenara conforme a los datos del formulario
  //const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});   //State para editar un paciente


  useEffect( () => {
    const obtenerLocalStorage = () =>{
      const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLocalStorage);
    }

    obtenerLocalStorage();
  }, []);


  useEffect( () =>{
     localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const listaDePacientesActualizada = pacientes.filter( paciente => paciente.id !== id);

    console.log('Eliminado paciente: ', id);
    setPacientes(listaDePacientesActualizada);
  }

  return (
    // <>  fragment
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes ={pacientes}
          setPacientes = {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
