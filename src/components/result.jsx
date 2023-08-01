import { useState } from "react";

export function Result({info,input_info}){
  const p_info_list = input_info.map((i_info)=>{return i_info!="name"? <p key={i_info} >{info[i_info]} </p>: <h1 key={i_info} style={{backgroundColor:info["color"]}}>{info["name"]}</h1>})
    return (
    <div className='result'>
        {p_info_list}
    </div>
  )
}