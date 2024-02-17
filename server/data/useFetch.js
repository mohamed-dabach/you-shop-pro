import { useState } from "react"
import { useEffect } from "react"

export default function Fetch(){

    const [items, setItems] = useState[""]

    const FetchData = () => {
        fetch('http://127.0.0.2:8000/API')
        .then(Response => Response.json())
        .then(Response => setItems(Response))
    }

    useEffect(()=>{
        FetchData()
    },[])

    console.log(items)

}