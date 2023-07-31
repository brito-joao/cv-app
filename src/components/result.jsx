import { useState } from "react";

export function Result({info}){
    return (
    <div className='result'>
        <h1 style={{backgroundColor:info["color"]}}>{info["name"]}</h1>
        <p>{info["thing"]}</p>
        <p>{info["jobs"]}</p>
        <p>{info["remember"]}</p>
        <p>{info["vibes"]}</p>
    </div>
  )
}