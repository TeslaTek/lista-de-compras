import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos , fdelete, ftoggle}) => {

    return (
        <ul className='list-group list-group-flush mt-3'>
        {
            todos.map( todo => (
               <TodoListItem  key={todo.id} todo={todo} fdelete={fdelete}  ftoggle={ftoggle}/>
            ))
        }
    </ul>
    )
}
