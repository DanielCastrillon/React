import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';


function App() {
  //Objeto de tipo usuario que se pasa a formulario
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          //Se pasa el objeto mediante props al formularios
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
