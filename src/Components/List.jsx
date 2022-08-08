import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css'
import View from './View'

const getDatafromLS=()=>{
    const data = localStorage.getItem('lists')
    if(data){
        return JSON.parse(data)
    }
    else{
        return [];
    }
}

const List = () => {

const [lists,setLists] = useState(getDatafromLS());

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [age,setAge] = useState("")
    const [status,setStatus] = useState('')

   const handleSubmit=(e)=>{
e.preventDefault()
let list = {
    fname,
    lname,
    age,
    status
}
setLists([...lists,list])
setFname("")
setLname("")
setAge("")
   }

   const deleteList=(age)=>{
   const filterdName = lists.filter((el,index)=>{
    return el.age !== age
   })
   setLists(filterdName)
   }

   useEffect(() => {
     localStorage.setItem("lists",JSON.stringify(lists));
   }, [lists])
   

  return (
    <div className='wrapper'>
        <div className="main">
            <div className="form-container">
 <form onSubmit={handleSubmit} className='form-group' autoComplete='off'>
<label>First Name</label>
<input type="text" className='form-control' onChange={(e)=>setFname(e.target.value)} required ></input>
<br />
<label>Last Name</label>
<input type="text" className='form-control' onChange={(e)=>setLname(e.target.value)} required ></input>
<br />
<label>Age</label>
<input type="number" className='form-control' onChange={(e)=>setAge(e.target.value)} required ></input>
<br />
<label>active</label>
<input class="form-check-input mt-0" type="checkbox" onChange={(e)=>setStatus(e.target.value)} value="active" aria-label="Checkbox for following text input"></input>
<label>Inactive</label>
<input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></input>

<br />
<button type='submit' className='btn btn-success btn-md'>Submit</button>


 </form>
            </div>
            <div className="view-container">
                {lists.length>0 && <>
                <div className="table-responsive">
<div className="table">
    <thead>
        <tr>
            <th>First_Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Status</th>
        </tr>
    </thead>

    <tbody>
        <View lists = {lists} deleteList={deleteList} />
    </tbody>
</div>

                </div>
                </>}
{lists.length < 1 && <div>No data are added yet</div> }
            </div>
        </div>

    </div>
  )
}

export default List