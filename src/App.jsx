import { useState } from 'react'
import {Inputs} from './components/inputs.jsx'
import {Result} from './components/result.jsx'
import './styles/App.scss'

function App() {
  const initial_info = {
    "name":"",
    "thing": "",
    "jobs": "",
    "remember": "",
    "vibes":"",
    "color":"white"
  }
  const [info, setInfo] = useState(initial_info)
  return <div className='app'>
    <Inputs info = {info} change = {setInfo}/>
    <Result info = {info}/>
  </div >
}

//goal for the next day :
// work on the "back-end" part

//create a connection between inputs and Result





export default App
