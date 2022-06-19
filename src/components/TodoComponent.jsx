import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { TodoSend } from './TodoSend'
import './style.css'


const init = () => {
    return  JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoComponent = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
        console.log(todos);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])

    const handleDelete = (todoID)=> {
        const action = {
            type: 'delete',
            payload:todoID
        }
        dispatch(action);
    }
    
    const handleToggle = (todoID) =>{
        dispatch(
            {
                type:'toggle',
                payload:todoID
            }
        );
    }

    const handleAddTodo = (newTodo) =>{
        dispatch(
            {
                type:'add',
                payload:newTodo
            }
        )
    }
    
    


    return (
        <main className='container pb-2'>
            <h2> Lista de compras ( {todos.length} )</h2>
            <hr/>

          <TodoAdd  handleAddTodo={handleAddTodo}/>  
          <TodoList todos={todos} fdelete={handleDelete} ftoggle={handleToggle} />

          { todos.length > 0 && ( <TodoSend todos={todos} />)}
         
        </main>
    )
}
