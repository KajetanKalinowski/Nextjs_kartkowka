'use client'
import { useState } from "react";
export default function zad(){
    const [input,setInput] = useState('')
    const [tlo,setTlo] = useState(true)
    const click = ()=>{
        if(input%2==0){
            setTlo(true)
            setInput('')
        }else{
            setTlo(false)
            setInput('')
        }
    }
    return(
        <div className={tlo ? "bg-green-500 flex flex-col justify-center items-center h-screen w-full gap-2" : "bg-red-500 flex flex-col justify-center items-center h-screen w-full gap-2"}>
            <input className="border" value={input} onChange={(e)=>setInput(e.target.value)}></input><button className="border" onClick={click}>zmień</button>
            
        </div>
    )
}