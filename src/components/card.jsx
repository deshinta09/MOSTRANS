import { useNavigate } from "react-router-dom"

export default function Card({ data }){
    const navigate = useNavigate()
    return (
        <>
            <div className="card" style={{ width: "18rem", border:0 }}>
                <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{ data.name }</h5>
                    <p className="card-text">Episode: { data.episode.length }</p>
                    <button className="btn btn-primary" onClick={()=>navigate(`/${data.id}`)}>Detail</button>
                </div>
            </div>
        </>
    )
}