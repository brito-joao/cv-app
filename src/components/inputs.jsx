import { useState } from "react";


export function Inputs({info,change,input_info}){
  
  function handleInputChange(event){

    let id = event.target.placeholder;
    let value = event.target.value;
    
    const new_info = {...info};
    new_info[id] = value;
    change(new_info);
    
    ;
  }
  
  const input_list = input_info.map((option)=>{return <input key={option}  placeholder={option} value={info[option]} onChange={(event)=>{handleInputChange(event)}}/>})
    return (
    <div className='inputs'>
        <h1>Cv creator</h1>
        {input_list}
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
  const colors=["grey","green","blue","white","yellow","purple"];
  const button_list = colors.map((color)=>{return <button key={color} style={{backgroundColor:color,borderRadius:"100em"}} className="color" onClick={changeColor} ></button>})
  return( <div style={{
    display:"flex",
    gap:"1em",
    width:"1em",
    
  }}>
    {button_list}
  </div>)
}