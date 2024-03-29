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

    const [error, setError] = useState({});


    // Detecta el state del paciente. Editar y rellenar el form
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


     const handleSubmit = (e) => {
    //  const onSubmit = handleSubmit((e) => {
        e.preventDefault();

        console.log('Enviando Formulario...');

        //Validación de formulario:
        if ([nombre, propietario, mail, alta, hora, sintomas].includes('')) {
            console.log('Todos los campos son obligatorios');
            //alert('Hay al menos un campo vacio');
            setError({
                msg: 'Todos los campos son obligatorios',     
                err: true,
            })
            // setError(true);
            return;
        }
        if (sintomas.length > 120) {
            setError({
                msg: 'Revasó el númeró máximo de caracteres en sintomas',     
                err: true,
            })
            // setError(true);
            return;
        }
        if (nombre.length > 30) {
            setError({
                msg: 'Nombre mascota max. de 30 caracteres',     
                err: true,
            })
            return;
        }
        if (propietario.length > 30) {
            setError({
                msg: 'Nombre propietario max. de 30 caracteres',     
                err: true,
            })
            return;
        }

     // Funcion fecha y hora cupada
         var horaNoDisponible = pacientes.findIndex( (objeto) => objeto.hora === hora );
         var diaNoDisponible = pacientes.findIndex( (objeto) => objeto.alta === alta );


        //  console.log( horaNoDisponible, diaNoDisponible );
    
        if( horaNoDisponible >= 0 && diaNoDisponible >= 0){            
            setError({
                msg: 'La fecha y hora no se encuentran disponibles ',     
                err: true,
            })
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
            console.log(paciente);          //Versión antes de actaualizar, presionada
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? (objetoPaciente) : (pacienteState))

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

    const { msg } = error


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3 mb-5">
            <h2 className="font-black text-center text-3xl">
                Agendar Una Cita </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className=" text-indigo-500 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg pb-10 pt-5 px-5 "
                onSubmit={handleSubmit}
            >
                <div className=" flex justify-center pb-2">
                {msg && <Error error={error}/>}
                </div>

                <div className="mb-5 mt-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <div className=" relative">

                        <RiBaiduLine className="text-gray-500 absolute top-1/2 -translate-y-1/3 left-3" />
                        <input
                            // required
                            id="mascota"
                            type="text"
                            maxLength={31}
                            placeholder="Nombre de la mascota"
                            className={`border-2 w-full p-2 pl-10 mt-2 placeholder-gray-400 rounded-md`}
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
                            // required
                            minLength={2}
                            maxLength={31}
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
                            // pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
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
                        // required
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
                        // required
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={(e) => setHora(e.target.value)}
                    />
                    <label className=" text-gray-400"> Horario de 10:00am a 18:00pm ( intervalo 30min. ) </label>
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        name=""
                        id="sintomas"
                        maxLength={121}
                        // required
                        className={`border-2 w-full shadow-lg p-2 mt-2 placeholder-gray-400 rounded-md outline-none
                                    ${sintomas.length > 120 ? "shadow-red-300 && border-red-400" : "border-gray-500"}`
                        }
                        placeholder="Describe brevemente el motivo de la cita"
                        value={sintomas}

                        onChange={(e) => setSintomas(e.target.value)}
                    />

                    <label className=" text-gray-400">( Max. 120 caracteres ) </label>

                </div>

                <button 
                    id="botonCita"
                    type="submit"
                    className={`
                             p-3 bg-indigo-600 hover:bg-indigo-800 cursor-pointer enabled:transition-colors
                             w-full text-white uppercase font-bold rounded-lg 
                             
                            `}
                    >
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                    
                </button>
 

            </form>

        </div>
    )
}

export default Formulario
