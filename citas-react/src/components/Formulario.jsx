import {useState, useEffect} from 'react';
import ComponenteError from './ComponenteError';

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  //Escucha los cambios que sucedan en alguna parte del state
  useEffect(() => {
    console.log(paciente);
  },[paciente]);



  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random+fecha;
  }

  const handleSubmit = (e) => {
    //Siempre se debe poner para evitar comportamiento por defecto
    e.preventDefault();

    //Validacion de formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio');
      setError(true);
      return;
    }

    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: generarId()
    }

    console.log(objetoPaciente);

    //Agrega un nuevo paciente
    setPacientes([...pacientes, objetoPaciente]);

    //Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold +'>Admnistralos</span>
      </p>

        <form 
          onSubmit={ handleSubmit }
          className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          <div className='mb-5'>

            {error && (<ComponenteError><p>Todos los campos son requeridos.</p></ComponenteError>)}

            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
            <input
              name='mascota'
              id='mascota'
              type="text" 
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={nombre}
              onChange={ (e) => setNombre(e.target.value)} />
          </div>

          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
            <input
              name='propietario'
              id='propietario'
              type="text" 
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value)} />
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Correo electronico</label>
            <input
              name='email'
              id='email'
              type="email" 
              placeholder='Correo electronico'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
              value={email}
              onChange={ (e) => setEmail(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input
              name='alta'
              id='alta'
              type="date" 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
              value={alta}
              onChange={ (e) => setAlta(e.target.value)}/>
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
            <textarea
            id='sintomas'
            placeholder='Describe los sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
            ></textarea>
          </div>

          <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar paciente' />
        </form>

    </div>
  )
}

export default Formulario;
