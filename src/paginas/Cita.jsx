import Header from "../components/Header"
import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import BasicFooter from "../components/BasicFooter"
import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import { RiArrowLeftDoubleLine } from "react-icons/ri";

const Cita = () => {

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState([]); //Llenara conforme a los datos del formulario
    //const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({});   //State para editar un paciente


    useEffect(() => {
        const obtenerLocalStorage = () => {
            const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []
            setPacientes(pacientesLocalStorage);
        }

        obtenerLocalStorage();
    }, []);


    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const eliminarPaciente = (id) => {
        
        const listaDePacientesActualizada = pacientes.filter(paciente => paciente.id !== id);

        console.log('Eliminado paciente: ', id);
        setPacientes(listaDePacientesActualizada);
    }

    return (
        <div>
            <div className="container mx-auto mt-16">
                <Header />

                <button className=" absolute left-56 xl:top-44 top-36 cursor-pointer border 
                    border-gray-900 p-2 rounded-lg 
                    text-gray-900 hover:translate-x-1 transition-all duration-200
                    hover:border-y-4 hover:border-x-4"
                    onClick={() => navigate(-1)}>
                    <RiArrowLeftDoubleLine />
                </button>

                <div className=" mt-12">


                    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                        Seguimiento Pacientes {' '}
                        <span className="text-indigo-500">Veterinaria</span>
                    </h1>

                    <div className="mt-20 md:flex">
                        <Formulario
                            pacientes={pacientes}
                            setPacientes={setPacientes}
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

            </div>           

            <div>

                <BasicFooter />
            </div>
        </div>
    )
}

export default Cita
