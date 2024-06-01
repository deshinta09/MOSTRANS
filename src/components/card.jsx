import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Card({ data, url }){
    const navigate = useNavigate()
    const [dataUrl,setDataUrl] = useState({})
    // console.log(url,'<< urlnya di card');
    
    
    if(!data){
        async function getCharacter(){
            try {
                const { data } = await axios({
                    url,
                    method: 'get'
                })
                setDataUrl(data)
            } catch (error) {
                console.log(error,'<< error card');
            }
        }

        useEffect(()=>{
            getCharacter()
        },[])
    }

    return (
        <>
            <div className="card" style={{ width: "30%", border:0 }}>
                    <img src={ data ? data.image : dataUrl.image } className="card-img-top" alt="image_character"/>
                    <div className="card-body">
                        <p className="card-title fs-6"  style={{ height: '50%' }}>{ data ? data.name : dataUrl.name }</p>
                        <button className="btn" style={{ backgroundColor: '#CDE8E5' }} onClick={()=>navigate(`/${data ? data.id : dataUrl.id }`)}>Detail</button>
                    </div>
            </div>
        </>
    )
}