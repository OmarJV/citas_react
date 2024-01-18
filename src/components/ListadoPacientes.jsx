import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  console.log(pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {console.log('Pruebaaa')}

      {pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus pacientes y {' '}  
            <span className="text-indigo-600 font-bold">Citas</span>
          </p>

          <div className="md:h-screen overflow-y-scroll xl:scroll ">

            {pacientes.map((paciente) => (   //.map debe tener un key único siempre
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />

            )
            )}


          </div>
        </>

      ) : (

        <>

          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <div className=" ">
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza Registrando Algún Paciente {' '}
              <span className="text-indigo-600 font-bold"> Y Aparecerá en Este Lugar</span>
            </p>
          </div>

        </>
      )}

    </div>
  )
}

export default ListadoPacientes
