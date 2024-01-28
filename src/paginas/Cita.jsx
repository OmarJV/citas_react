import Header from "../components/Header"
import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import BasicFooter from "../components/BasicFooter"
import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import { RiArrowLeftDoubleLine } from "react-icons/ri";

const Cita = ( ) => {

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState([]); //Llenara conforme a los datos del formulario
    //const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({});   //State para editar un paciente
    const [admin, setAdmin] = useState(false);


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

                <div className=" grid-cols-8 grid mt-5">
                    <div className=" col-span-6 ">
                        <button className=" ml-8 left-8 xl:left-56 xl:top-44 top-36 cursor-pointer border 
                    border-gray-900 p-2 rounded-lg 
                    text-gray-900 hover:translate-x-1 transition-all duration-100
                    hover:border-y-4 hover:border-x-4 "
                            onClick={() => navigate(-1)}>
                            <RiArrowLeftDoubleLine />
                        </button>
                    </div>

                    {/* ADMINN?? */}
                    <div className="col-span-2 justify-end flex gap-3 ">
                        <h2 className=""> ADMIN</h2>
                        <div className="">
                            <div onClick={() => setAdmin(!admin)}
                                className={`cursor-pointer flex size-16 h-8 rounded-full transition-all duration-500
                                ${admin ? "bg-gray-400" : "bg-gray-600"}`}>

                                <span className={` h-8 w-8 bg-indigo-500 rounded-full transition-all duration-500
                                        shadow-lg ${admin ? " ml-8" : ""} ${console.log('CITA:', admin)}`} />
                            </div>
                        </div>
                        <h2 className=" mr-6"> USER</h2>
                    </div>
                </div>


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
                            setAdmin={admin}
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
