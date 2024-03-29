import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presuesto valido');
            return;
        }

        setMensaje('')
        setIsValidPresupuesto(true)

    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className="campo">
                <label htmlFor="">Definir presupuesto</label>
                <input 
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    min={0}
                    value={presupuesto}
                    onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
                <input type="submit" value={'Añadir'} />

                {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            </div>
        </form>
    </div>
  )
}
