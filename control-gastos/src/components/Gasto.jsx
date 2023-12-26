import React from 'react'
import { LeadingActions, SwipeAction, SwipeableList, SwipeableListItem, TrailingActions} from 'react-swipeable-list';

import { formatearFecha } from '../helpers'
import IconoAhorrar from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'

const diccionarioIconos = {
  "ahorro":IconoAhorrar,
  "comida":IconoComida,
  "casa":IconoCasa,
  "gastos":IconoGastos,
  "salud":IconoSalud,
  "ocio":IconoOcio,
  "suscripciones":IconoSuscripciones

}


export const Gasto = ({gasto}) => {
  return (
    <div className='gasto sombra'>
        <div className="contenido-gasto">
            {/* IMAGEN */}
            <img 
              src={diccionarioIconos[gasto.categoria]} alt={gasto.categoria} />
            <div className="descripcion-gasto">
                <p className='categoria'>{gasto.categoria}</p>
                <p className='nombre-gasto'>{gasto.nombre}</p>
                <p className='fecha-gasto'>
                    Agregado el: {' '}
                    <span>{formatearFecha(gasto.fecha)}</span>
                </p>
            </div>
        </div>
            <p className='cantidad-gasto'>${gasto.cantidad}</p>
    </div>
  )
}
