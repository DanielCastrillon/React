import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { useForm } from '../hooks/useForm'
import { Loading } from './Loading'
import { Quote } from './Quote'



export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset, setCounter } = useCounter();
    const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter+'/')
    const [search, setSearch] = useState(counter)
    const {formState, onInputChange, onResetForm, searchInput} = useForm({searchInput:counter})
    //console.log({data, isLoading, hasError});
    //console.log(searchInput);

  return (
    <>
        <h1>MutipleCustom Hooks</h1>
        <hr />
        
        {
          isLoading 
          ? <Loading/>
          : <Quote counter={counter} data={data} />
        }

        <input 
          className='form-control mb-2' 
          type="text" 
          name='searchInput' 
          id='searchInput'
          value={counter}
          onChange={onInputChange}
          />

        { counter > 1 &&
          (
            <button className='btn btn-primary' onClick={() => decrement(1)}>
              Anterior Pokemon
            </button>
          )
        }

        <button disabled={isLoading} className='btn btn-primary' onClick={() => increment(1)}>
          Siguiente Pokemon
        </button>
        

    </>
  )
}
