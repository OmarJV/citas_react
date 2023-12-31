import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [mail, setMail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);


    // DEtecta el state del paciente. Editar y rellenar el form
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            console.log('Si hay paciente');
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setMail(paciente.mail);
            setAlta(paciente.alta);
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
        if ([nombre, propietario, mail, alta, sintomas].includes('')) {
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
        setSintomas('');


    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3 mb-5">
            <h2 className="font-black text-center text-3xl">
                Seguimiento Pacientes </h2>

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
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} // Escribe el cambio con la func. modificadora

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">
                        E-mail
                    </label>
                    <input
                        id="mail"
                        type="email"
                        placeholder="E-mail contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        name=""
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                hover:bg-indigo-800 cursor-pointer transition-colors"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>

        </div>
    )
}

export default Formulario
