import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { TodoCategory } from './TodoCategory.jsx';

export const TodoAdd = ({handleAddTodo}) => {

    const [{task}, handleInputChange, reset] = useForm({
        task:''
    })

    const [category, setCategory] = useState(undefined);
    // optional code to capitalize the item of the list
    const   capitalizeAllFirst = (string) => {
        let auxString = string.split(' ');
        auxString = auxString.map(a => {
            return a.charAt(0).toUpperCase() + a.slice(1);
        })
        let returnedString ='';
        auxString.forEach(a => {
            returnedString= returnedString+' '+a;
        });
        return returnedString;
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!(task.trim() === '')) {
            const  taskAux= capitalizeAllFirst(task);
            const newTodo = {
                id: new Date().getTime(),
                desc: taskAux,
                category,
                done: false
            }
            handleAddTodo(newTodo);
            reset(); 
        }
    }

    const handleCategoryChange = (e) =>{
        const placeholder = e.currentTarget.getAttribute('placeholder');
        if(e.currentTarget.value !== placeholder){
            setCategory(e.currentTarget.value);
        }else {
            setCategory(undefined);
        }
        
    }

    return (
        <section>
                <form onSubmit={handleSubmit}>
                   <TodoCategory handleCategoryChange={handleCategoryChange}  placeholder='Elige una categoría'/>
                    <div className='input-group  bg-light rounded'>
                        <input 
                                disabled={category === undefined}
                                className='form-control'
                                type='text'
                                name='task'
                                autoComplete='off'
                                placeholder='Nuevo articulo'
                                value={task}
                                onChange={handleInputChange}
                        />
                        <button 
                        disabled={category === undefined}
                        type='submit'
                        className={category ? 'btn btn-primary' : 'btn btn-disabled'}
                        >
                            Agregar
                        </button>
                    </div>
                </form>
           </section>
    )
}
