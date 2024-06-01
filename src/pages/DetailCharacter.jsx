import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from "../components/navbar"

export default function DetailCharacter(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [getData,setData] = useState({})
    const [loading,setLoading] = useState(false)

    async function getDetail(){
        try {
            setLoading(true)
            let { data } = await axios({
                method: 'get',
                url: `https://rickandmortyapi.com/api/character/${id}`
            })
            setData(data)
        } catch (error) {
            console.log(error, 'error detail');
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getDetail()
    },[])
    
    return(
        <>
        <Navbar/>
        {
            loading? 
            <div style={{ display:'flex', justifyContent: 'center', textAlign: 'center', padding: '3rem' }}>
                <img src="./loading.gif" alt="loading..." />
            </div> 
            :
            <>
                <div style={{ display:'flow', justifyContent: 'center', textAlign: 'center', padding: '3rem' }}>
                    {/* gambar */}
                    <div className="" style={{ display:'flex', justifyContent: 'center',  }} >
                        <img src={getData.image} style={{ borderRadius:60, width: '45%' }} alt="image_character" />
                    </div>
                    {/* end gambar */}

                    {/* name character */}
                    <div style={{ padding:'30px' }}>
                        <h3>{getData.name}</h3>
                    </div>
                    {/* end name character */}
                </div>
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                    <div style={{ backgroundColor: '#EEEEEE', borderRadius: 30, padding: '10px'}}>
                        <p>Status : <span className="fw-bold">{getData.status}</span></p>
                    </div>

                    <div style={{ backgroundColor: '#EEEEEE', borderRadius: 30, padding: '10px'}}>
                    <p>Species : <span className="fw-bold">{getData.species}</span></p>
                    </div>
                    
                    <div style={{ backgroundColor: '#EEEEEE', borderRadius: 30, padding: '10px'}}>
                    <p>Gender : <span className="fw-bold">{getData.gender}</span></p>
                    </div>
                </div>
                <div style={{ padding: '2rem' }}>
                    <button className="btn" style={{ backgroundColor: '#D1D8C5' }} onClick={()=>navigate('/')}>Back</button>
                </div>
            </>
        }

        </>
    )
}