import React from 'react';
import './Task.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default (props)=> {
    const {task, editTask, deleteTask} = props;
    const {id,name} = task
    return ( 
        <li > 
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className='bt-container'>
                <button class="btn btn-warning" onClick={ ()=> deleteTask(id)} >Delete</button>
                <button class="btn btn-danger" onClick={ ()=> editTask(id)} >Edit</button>
            </div>
        </li>
      )
}