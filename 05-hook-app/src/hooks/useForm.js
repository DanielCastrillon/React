import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    //DETECTA CAMBIOS PERMITE ESCRIBIR
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    //RESETEA EL FORMULARIO
    const onResetForm = () => {
        setFormState(initialForm)
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
