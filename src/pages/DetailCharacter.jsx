import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from "../components/navbar"

export default function DetailCharacter(){
    const { id } = useParams()
    const [getData,setData] = useState({})

    async function getDetail(){
        try {
            let { data } = await axios({
                method: 'get',
                url: `https://rickandmortyapi.com/api/character/${id}`
            })
            setData(data)
        } catch (error) {
            console.log(error, 'error detail');
        }
    }

    useEffect(()=>{
        getDetail()
    },[])
    
    return(
        <>
        <Navbar/>
        <h1>page detail data {id}</h1>
        </>
    )
}