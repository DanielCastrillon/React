import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente}) => {
  useEffect(() => {
    if (pacientes.length > 0) {
      console.log('Nuevo paciente');
    }
  }, [pacientes])

  


  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      
      {/* CONDICIONAL DE TEXTO DINAMICO */}
      {pacientes.length && pacientes ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
            {pacientes.map((paciente)=>
              <Paciente
                key = {paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
              />
            )}
        </>
        /* EL SI NO DEL CONDICIONAL */
      ):(
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Agrega pacientes {''}
              <span className="text-indigo-600 font-bold">para verlos aqui</span>
          </p>        
        </>
      )}
    </div>
  )
}

export default ListadoPacientes;
