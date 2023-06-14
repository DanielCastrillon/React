import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const Paciente = ({paciente, setPaciente}) => {

  const {nombre} = paciente;


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:{' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario:{' '}
            <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email:{' '}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta:{' '}
            <span className="font-normal normal-case">{paciente.alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas:{' '}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
                type="button"
                onClick={()=>setPaciente(paciente)}>
                Editar
            </button>

            <PDFDownloadLink className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' document={<MyDocument paciente={paciente}></MyDocument>} fileName="formulario.pdf">
                <button >Descargar PDF</button>
            </PDFDownloadLink>

            <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button">
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente
