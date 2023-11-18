import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import HookApp from './HookApp'
//import Counter from './01-useState/Counter'
//import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormCustomHook } from './02-useEffect/FormCustomHook'
import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //<FormCustomHook/>
  //<MultipleCustomHooks/>
  <FocusScreen/>
    //<SimpleForm/>
    //<Counter />
    //<CounterWithCustomHook/>
  //</React.StrictMode>,
)
