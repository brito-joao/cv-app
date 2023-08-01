import { useState } from 'react'
import {Inputs} from './components/inputs.jsx'
import {Result} from './components/result.jsx'
import './styles/App.scss'

function App() {
  const input_info=["name","phone","experience","school","email","your story"];
  const initial_info = {}
  input_info.forEach((i_info)=>{
    initial_info[i_info]="";
  })
  initial_info["color"]="white";
  const [info, setInfo] = useState(initial_info)
  return <div className='app'>
    <Inputs info = {info} change = {setInfo} input_info={input_info}/>
    <Result info = {info} input_info={input_info}/>
  </div >
}

export default App
