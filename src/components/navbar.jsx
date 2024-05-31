export default function Navbar(){
    return (
        <>
<nav className="navbar navbar-expand-lg bg-warning-subtle text-warning-emphasis">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Mostrans</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <button className="nav-link active" aria-current="page" href="">Characters List</button>
          {/* <a className="nav-link active" aria-current="page" href="">Characters List</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}