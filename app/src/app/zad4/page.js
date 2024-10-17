'use client'
import { useState,useEffect } from "react";
import Image from "next/image";
export default function zad(){
    const [kraj,setKraj] = useState([])
    const [load,setLoad] = useState(true)
    useEffect(()=>{
        const getData = async () =>{
            try{
            const data = await fetch(`https://restcountries.com/v3.1/all`)
            const json = await data.json()
            setKraj(json)
            console.log(json)
            }catch(err){
                console.log(err)
            }finally{
                setLoad(false)
            }
        }
        getData()
    },[])
        
    
    
    return(
        <div className="flex flex-col justify-center items-center w-full gap-4">
            {load ? <h1>Pobieranie danych</h1>:<div>{
                kraj && kraj.map((item,idx)=>(
                    <div key={idx} className="border-black border-2">
                    <Image 
                    src={item.flags.png}
                    width={500}
                    height={500}
                    alt={item.name.common}>
                    </Image>
                    </div>
                ))
            }</div>}
        </div>
    )
}