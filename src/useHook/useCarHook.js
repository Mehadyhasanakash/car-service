import { useEffect, useState } from "react"

const useCar = () =>{
    const [cars, setCars] =useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => setCars(data))
    } ,[])
    return [cars, setCars]
}

export default useCar;