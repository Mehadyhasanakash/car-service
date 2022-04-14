import { useEffect, useState } from "react"

const useCarHook = () =>{
    const [cars, setCars] = useState([])
    useEffect( () =>{
        fetch('http://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
        .then(res => res.json())
        .then(data => setCars(data))
    } , [])
    return [cars, setCars]
}

export default useCarHook;