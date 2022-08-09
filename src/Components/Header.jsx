import React,{useState} from 'react'

const Header = () => {

  
  const data = localStorage.getItem("lists")
 var dataUpdated = JSON.parse(data)
 const toBePrinted = dataUpdated.splice(-1)
//console.log(toBePrinted)
const [value,setValue] = useState(toBePrinted)
//console.log(value[0].fname)

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <h3>{value[0].fname}  {value[0].lname}</h3>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header