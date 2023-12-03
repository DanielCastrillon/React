import CerrarBtn from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const handleCerrarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() =>{
            setModal(false);
          }, 300)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn} 
                alt="CerrarBtn"
                onClick={handleCerrarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? 'animar':'cerrar'}`}>

            <legend>Nuevo gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Añade el nombre del gasto'
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad de gasto: ej: $10.000'
                />
            </div>

        </form>
    </div>
  )
}
