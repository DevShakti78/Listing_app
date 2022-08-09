import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from "react-icons-kit/feather/trash"
import {edit} from "react-icons-kit/feather/edit"
const View = ({lists, deleteList, editlist}) => {
  return lists.map(list=>(
    <tr key={list.age}>
        <td>{list.fname}</td>
        <td>{list.lname}</td>
        <td>{list.age}</td>
        <td>{list.status?<h6>active</h6>: <h6>inactive</h6>}</td>
        <td className='edit-btn' onClick={()=>editlist(list.age)}>
           
           <Icon icon={edit}/>
        </td>
        <td className='delete-btn' onClick={()=>deleteList(list.age)} >
           
           <Icon icon={trash}/>
        </td>
    </tr>
  ))
}

export default View