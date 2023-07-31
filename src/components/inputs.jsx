import { useState } from "react";


export function Inputs({info,change}){
  
  function handleInputChange(event){

    let id = event.target.placeholder;
    let value = event.target.value;
    console.log(id,info[id],event);
    const new_info = {...info};
    new_info[id] = value;
    change(new_info);
    
    console.log(info);
  }
    return (
    <div className='inputs'>
        <h1>Cv creator</h1>
        <input placeholder='name' value={info["name"]} onChange={(event)=>{handleInputChange(event)}}/>
        <input placeholder='thing' value={info["thing"]} onChange={(event)=>{handleInputChange(event)}}/>
        <input placeholder='jobs' value={info["jobs"]} onChange={(event)=>{handleInputChange(event)}}/>
        <input placeholder='remember' value={info["remember"]} onChange={(event)=>{handleInputChange(event)}}/>
        <input placeholder='vibes' value={info["vibes"]} onChange={(event)=>{handleInputChange(event)}}/>
        <Colors info={info} changeInfo={change}/>
  </div>
  )
}

function Colors({info,changeInfo}){
  function changeColor(event){
    const color = event.target.style.backgroundColor;
    
    const new_info = {...info};
    new_info["color"]=color;
    changeInfo(new_info);
  }
  return( <div style={{
    display:"flex",
    gap:"1em",
    width:"1em",
    
  }}>
    <button style={{backgroundColor:"grey",borderRadius:"100em"}} className="color" onClick={changeColor}></button>
    <button style={{backgroundColor:"red",borderRadius:"100em"}} className="color" onClick={changeColor}></button>
    <button style={{backgroundColor:"white",borderRadius:"100em"}} className="color" onClick={changeColor}></button>
  </div>)
}