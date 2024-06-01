import { useNavigate } from "react-router-dom"

export default function Navbar(){
  const navigate = useNavigate()
    return (
        <>
<nav className="navbar navbar-expand-lg" style={{ backgroundColor:'#7E8EF1' }}>
  <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between' }}>
    
    <button className="navbar-brand" style={{ backgroundColor:'#7E8EF1', border:0 }} onClick={()=>navigate('/')}>Mostrans</button>

    <button className="nav-link active" aria-current="page" onClick={()=>navigate('/characters')}>Location</button>
    
  </div>
</nav>
        </>
    )
}