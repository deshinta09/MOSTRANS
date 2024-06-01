import { useNavigate } from "react-router-dom"

export default function Navbar(){
  const navigate = useNavigate()
    return (
        <>
<nav className="navbar navbar-expand-lg" style={{ backgroundColor:'#7E8EF1' }}>
  <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <a className="navbar-brand" onClick={()=>navigate('/')}>Mostrans</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <button className="nav-link active" aria-current="page" onClick={()=>navigate('/')}>Location</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Features</a>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div> */}
    <button className="nav-link active" aria-current="page" onClick={()=>navigate('/characters')}>Location</button>
  </div>
</nav>
        </>
    )
}