import React from 'react'
import { useState, useEffect } from 'react'
import { Error } from './Error';

export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  //useStates
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaAlta(paciente.fechaAlta)
      setSintomas(paciente.sintomas)
    }
    
  }, [paciente])
  

  const generarId = () => {
    let fecha = Date.now().toString(36)
    let ramdom = Math.random().toString(36).substr(2)

    return fecha + ramdom

  }


  generarId()

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDACION DEL FORMULARIO
    //Si estos campos incluyen uno con '' entonces true
    if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
      console.log('Hay al meno un campo vacio');
      setError(true);
      return
    }

    setError(false);

    //OBJETO DE PACIENTES
    const objPacientes = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas
    }

    if (paciente.id) {
      //EDITAR UN REGISTRO
      objPacientes.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPacientes : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      //NUEVO REGISTRO
      //AGREGAR PACIENTES CON EL OPERADOR SPREAD
      objPacientes.id = generarId()
      setPacientes([...pacientes, objPacientes]);

    }

    //REINICIAR EL FORMULARIO
    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {' '}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit} 
          className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

            {error &&  <Error><p>Todos los campos son obligatorios.</p></Error>}

          <div className="mb-5">
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la mascota</label>
            <input 
              type="text"
              name='mascota'
              id='mascota'
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
            <input 
              type="text"
              name='propietario'
              id='propietario'
              placeholder='Nombre propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Correo electronico</label>
            <input 
              type="email"
              name='email'
              id='email'
              placeholder='Correo electronico'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input 
              type="date"
              name='alta'
              id='alta'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={fechaAlta}
              onChange={(e) => setFechaAlta(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
            <textarea 
              name="sintomas"
              id="sintomas"
              cols="30"
              rows="5"
              placeholder='Describe los sintomas'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            value={paciente.id ? "Editar paciente":"+ Agregar paciente"}
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md'
          />
          
        </form>
    </div>
  )
}
