import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from "react-icons-kit/feather/trash"
import {edit} from "react-icons-kit/feather/edit"
const View = ({lists, deleteList}) => {
  return lists.map(list=>(
    <tr key={list.age}>
        <td>{list.fname}</td>
        <td>{list.lname}</td>
        <td>{list.age}</td>
        <td></td>
        <td className='edit-btn'>
           
           <Icon icon={edit}/>
        </td>
        <td className='delete-btn' onClick={()=>deleteList(list.age)} >
           
           <Icon icon={trash}/>
        </td>
    </tr>
  ))
}

export default View