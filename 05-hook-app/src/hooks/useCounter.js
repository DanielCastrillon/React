// UN HOOK ES UNA FUNCION CON UN RETURN

import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    //USESTATE
    const [counter, setCounter] = useState(initialValue)

    //FUNCIONES
    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const decrement = (value = 1) => {
        if (counter <= 0) return
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    //RETORNO
    return{
        counter,
        increment,
        decrement,
        setCounter,
        reset
    }
}