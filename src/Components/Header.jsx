import React,{useState,useEffect,useReducer} from 'react'

const Header = () => {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


  

  const getDatafromLS=()=>{
    const data = localStorage.getItem('lists')
   
    if(data){
      //console.log("data",data)
        return JSON.parse(data)
    }
   
}
const [lists,setLists] = useState([]);
const [mylist,setMyList] = useState([]);
//console.log(lists)

//   const data = localStorage.getItem("lists")
//  var dataUpdated = JSON.parse(data)

//console.log(toBePrinted)
const [value,setValue] = useState([])

useEffect(() => {
  (async () => {
    const mydata = await getDatafromLS()
    console.log("mydata",mydata)
    setLists([...mydata])
    setMyList(mydata)
    const toBePrinted = mydata.splice(-1)
    console.log("toBePrinted",toBePrinted)
    setValue(toBePrinted)
    forceUpdate()

  })();
}, [ignored]);


useEffect(() => {
  // const mydata =  getDatafromLS()
  // setLists(mydata)
  console.log("myList",mylist)
 
 }, [mylist])


//console.log(value[0])

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
       
        {
          lists.length>0?<h3>{value[0].fname} {value[0].lname}</h3>:<h3>no data</h3>

        }
      
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header