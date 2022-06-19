import React from 'react'


export const TodoListItem = ({todo, fdelete, ftoggle}) => {
    
    return (
        <li 
        key={todo.id}
        className={`list-group-item d-flex justify-content-between align-items-center ${todo.done && 'bg-success '}` }
        onClick={()=> {ftoggle(todo.id)}}
        >
            <span role='button' className={`${todo.done && 'text-decoration-line-through fs-small text-uppercase w-75 text-white'}`}>{ todo.desc}</span>
            <button 
            className={`btn ${todo.done ? 'btn-light' : 'btn-danger'}`}
             onClick={()=> { fdelete(todo.id) }}
            >
                Eliminar
            </button>
        </li>
    )
}
