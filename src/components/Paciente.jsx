import {RiCloseCircleLine, 
        RiBaiduLine,
        RiUser3Fill,
        RiCalendarCheckFill,
        RiMailFill,
        RiArrowRightSFill } from "react-icons/ri";


const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, mail, alta, hora, sintomas, id } = paciente

  const handleEliminar = () => {
    console.log('Eliminando....', id);

    const respuesta = confirm('¿Desea eliminar este paciente?');

    if (respuesta) { eliminarPaciente(id); }
  }

  // logica para imprimir AM o PM 

  var [h, m] = paciente.hora.split(":");
  const fHOra = ((h % 12 ? h % 12 : 12) + ":" + m, h >= 12 ? 'PM' : 'AM');


  return (

    <div className="bg-white rounded-3xl p-2 shadow-xl mx-10 mb-5 xl:mx-40 xl:h-60">

      <div className="flex justify-between mb-8 p-3 grid-cols-1 xl:grid-cols-8">
        <div className=" md:col-span-6 flex-row flex gap-4">
          <span className="bg-amber-500/10 flex items-center justify-center rounded-full w-12 h-12">
            <RiBaiduLine className="text-2xl text-amber-500" />
          </span>

          <div >
            <h3 className="font-medium"> {nombre} </h3>
            <div className=" ">
              <p className="text-sm text-neutral-500 ">
                {sintomas}
              </p>
            </div>
          </div>
        </div>

        <span>
        <button
          type="button"
          className=" bg-red-600 hover:bg-red-800 text-5xl
                     text-white rounded-full md:col-span-2"
          onClick={handleEliminar}
        > <RiCloseCircleLine className="" />
        </button>

        </span>

      </div>


      <div className="flex flex-col md:flex-row xl:flex-row items-center justify-between gap-8 mb-2 px-4">
        <div className="flex flex-row items-center gap-2 text-neutral-500 ">
          <RiUser3Fill
            className="rounded-full object-cover"
          />
          <h5 className="text-neutral-500"> {propietario} </h5>
        </div>
        <div className="flex flex-row items-center gap-2 text-neutral-500">
          <RiCalendarCheckFill  />
          <h5 className="text-neutral-600"> {alta} </h5>
        </div>
        <div className="flex flex-row items-center gap-2 text-neutral-500 xl:inline-flex md:hidden">
          <RiMailFill  />
          <h5>{mail}</h5>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl">
        <h2 className="text-xl font-medium"> {hora} {" "} {fHOra} </h2>
        <button
          type="button"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors"
          onClick={() => setPaciente(paciente)}
        >
          Editar <RiArrowRightSFill  />
        </button>

      </div>

    </div>

    /* 
    
    <div className="mx-3 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case"> {nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal normal-case"> {propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {' '}
            <span className="font-normal normal-case"> {mail}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
            <span className="font-normal normal-case"> {alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>


        <div className="flex justify-between mt-5">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800
                 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
            >Editar
            </button>

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-800
                 text-white font-bold uppercase rounded-lg"
                 onClick={handleEliminar}
            >Eliminar
            </button>
        </div>
    </div>

    */


  )
}

export default Paciente
