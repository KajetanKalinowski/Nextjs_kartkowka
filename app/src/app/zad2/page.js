'use client'
import { useState } from "react";
export default function zad(){
    const [input,setInput] = useState('')
    const [list,setList] = useState([])
    const click = ()=>{
        setList([...list,input])
        setInput('')
        console.log(list)
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-screen w-full gap-2">
            <input className="border" value={input} onChange={(e)=>setInput(e.target.value)}></input><button className="border" onClick={click}>dodaj</button>
            <ul>
                {list && list.map((item,idx)=>(
                    <li key={idx} >{item}<button className="border">usuń</button></li>
                ))}
            </ul>
        </div>
    )
}