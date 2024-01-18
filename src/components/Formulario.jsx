import { useState, useEffect } from "react";
import Error from "./Error";

import { RiUser3Line, RiMailSendLine, RiBaiduLine } from "react-icons/ri";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [mail, setMail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [hora, setHora] = useState('');

    const [error, setError] = useState(false);


    // DEtecta el state del paciente. Editar y rellenar el form
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            console.log('Si hay paciente');
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setMail(paciente.mail);
            setAlta(paciente.alta);
            setHora(paciente.hora);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)


        return random + fecha;
    }

    // console.log('Nombre:', nombre);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Enviando Formulario...');

        //Validación de formulario:
        if ([nombre, propietario, mail, alta, hora, sintomas].includes('') || sintomas.length > 120) {
            //alert('Hay al menos un campo vacio');
            setError(true);
            return;
        }

        console.log('Todos los campos llenos');
        setError(false);

        // Objeto de Pacientes
        const objetoPaciente = {
            nombre,
            propietario,
            mail,
            alta,
            hora,
            sintomas,

        }

        if (paciente.id) {
            //Editando Registro
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente);        //Nuevo y actualizado
            console.log(paciente);          //Versión antes de actaualizar
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({});

        } else {
            //Nuevo Registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }



        //Reiniciar el form

        setNombre('');
        setPropietario('');
        setMail('');
        setAlta('');
        setHora('');
        setSintomas('');

    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3 mb-5">
            <h2 className="font-black text-center text-3xl">
                Agendar Una Cita </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className=" text-indigo-500 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 "
                onSubmit={handleSubmit}
            >

                {error && <Error> <p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <div className=" relative">

                        <RiBaiduLine className="text-gray-500 absolute top-1/2 -translate-y-1/3 left-3" />
                        <input
                            id="mascota"
                            type="text"
                            placeholder="Nombre de la mascota"
                            className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} // Escribe el cambio con la func. modificadora

                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <div className=" relative">
                        <RiUser3Line className="text-gray-500 absolute top-1/2 -translate-y-1/3 left-3" />
                        <input
                            id="propietario"
                            type="text"
                            placeholder="Nombre del propietario"
                            className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">
                        E-mail
                    </label>
                    <div className=" relative">

                        <RiMailSendLine className="text-gray-500 absolute top-1/2 -translate-y-1/3 left-3" />
                        <input
                            id="mail"
                            type="email"
                            placeholder="E-mail contacto propietario"
                            className="border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Día
                    </label>
                    <input
                        id="alta"
                        type="date"
                        // defaultValue={ Date.now() }
                        min={new Date().toJSON().slice(0, 10)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="hora" className="block text-gray-700 uppercase font-bold">
                        Hora
                    </label>
                    <input
                        id="hora"
                        type="time"
                        value={hora}
                        min={"10:00"}
                        max={"18:00"}
                        step={"1800"}
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={(e) => setHora(e.target.value)}
                    />
                    <label htmlFor="" className=" text-gray-400"> Horario de 10:00am a 18:00pm ( intervalo 30min. ) </label>
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        name=""
                        id="sintomas"
                        maxLength={121}
                        className={`border-2 w-full shadow-lg p-2 mt-2 placeholder-gray-400 rounded-md outline-none
                                    ${sintomas.length > 120 ? "shadow-red-300 && border-red-400" : "border-gray-500"}`
                        }
                        placeholder="Describe brevemente el motivo de la cita"
                        value={sintomas}

                        onChange={(e) => setSintomas(e.target.value)}
                    />

                    <label htmlFor="" className=" text-gray-400">( Max. 120 caracteres ) </label>

                </div>

                <button disabled={!setError}
                    enabled={ setError}
                    id="botonCita"
                    type="submit"
                    className={`bg-gray-400 pointer-events-none 
                             p-3 enabled:bg-indigo-600 hover:bg-indigo-800 enabled:cursor-pointer enabled:transition-colors
                             w-full text-white uppercase font-bold rounded-lg 
                             
                            `}
                    >
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                    
                </button>
                {/* <button disabled
                        type="submit"
                        className={`w-full p-3 bg-gray-400 text-white uppercase font-bold rounded-lg pointer-events-none
                        ${setError == true? "hidden" : "return"}
                        `}
                        >

                </button> */}
                {/* <input
                    name="botonAgregar"
                    type="submit"
                    className={`bg-indigo-600 w-full p-3 text-white uppercase font-bold
                            hover:bg-indigo-800 cursor-pointer transition-colors rounded-lg`}
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                    
                /> */}

            </form>

        </div>
    )
}

export default Formulario
