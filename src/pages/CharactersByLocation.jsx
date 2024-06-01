import axios from "axios";
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import Card from "../components/card";


export default function CharactersByLocation(){
    const [id,setId] = useState("")
    const [location,setLocation] = useState([])
    const [character,setCharacter] = useState({})
    const [loading,setLoading] = useState(false)

    async function locations(){
        try {
            setLoading(true)
            const { data } = await axios({
                url:'https://rickandmortyapi.com/api/location',
                method:'get'
            })
            setLocation(data?.results)
        } catch (error) {
            console.log(error,'error data by location');
        } finally {
            setLoading(false)
        }
    }

    async function charactersById(){
        try {
            setLoading(true)
            const { data } = await axios({
                url: 'https://rickandmortyapi.com/api/location/'+id,
                method:'get'
            })
            setCharacter(data)
        } catch (error) {
            console.log(error,'<< error character by id in page location');
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        locations()
    },[])

    useEffect(()=>{
        charactersById()
    },[id])

    if (loading){
        return <div style={{ display:'flex', justifyContent: 'center', textAlign: 'center', padding: '3rem' }}>
            <img src="./loading.gif" alt="loading..." />
        </div>
    }

    return(
        <>
        <Navbar/>
        <select class="form-select" aria-label="Default select example" onChange={(e)=>setId(`${e.target.value}`)}>
            <option selected>Open this select location</option>
            {
                location.map(el=><option key={el.id} value={el.id}>{el.name}</option>)
            }
        </select>
            {
                id==="" ? <></> :
                <div className="row gap-1" style={{marginTop:'70px', justifyContent:'center'}}>
                    {
                        character?.residents?.map((el,i)=><Card key={i} data={false} url={el}/>)
                    }
                    
                </div>
            }
        </>
    )
}