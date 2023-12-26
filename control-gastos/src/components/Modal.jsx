import { useState } from 'react'
import {Mensaje} from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

export const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState()
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')

    const handleCerrarModal = () => {
        setAnimarModal(false)
        setTimeout(() =>{
            setModal(false);
          }, 300)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            setTimeout(()=>{
                setMensaje('')
            }, 3000)
            return;
        }
        console.log(nombre, cantidad, categoria);
        guardarGasto({nombre, cantidad, categoria})
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

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar':'cerrar'}`}>
            {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            

            <legend>Nuevo gasto</legend>

            <div className="campo">
                <label htmlFor="nombre">Nombre gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Añade el nombre del gasto'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad de gasto: ej: $10.000'
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select
                    name="categoria"
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">--- Selecciona ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input 
                type="submit"
                value={'Agregar gasto'}
            />

        </form>
    </div>
  )
}
