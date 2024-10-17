'use client'
import { useState } from "react";
export default function zad(){
    const [licznik,setLicznik] = useState(0)
    const minus = ()=>{
        setLicznik(licznik-1)
    }
    const plus = ()=>{
        setLicznik(licznik+1)
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen w-full gap-2">
            <h1>{licznik}</h1>
            <button disabled={licznik==0 ? true : false} className="border" onClick={minus}>-1</button>
            <button disabled={licznik==5 ? true : false} className="border" onClick={plus}>+1</button>
        </div>
    )
}