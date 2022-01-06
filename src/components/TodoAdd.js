import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{task}, handleInputChange, reset] = useForm({
        task:''
    })

    // optional code to capitalize the item of the list
    const   capitalizeAllFirst = (string) => {
        let auxString = string.split(' ');
        auxString = auxString.map(a => {
            return a.charAt(0).toUpperCase() + a.slice(1);
        })
        let returnedString ='';
        auxString.map(a => {
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
                done: false
            }
            handleAddTodo(newTodo);
            reset(); 
        }
    }

    return (
        <section>
                <form onSubmit={handleSubmit}>
                    <div className='input-group  bg-light rounded'>
                        <input 
                                className='form-control'
                                type='text'
                                name='task'
                                autoComplete='off'
                                placeholder='Nuevo articulo'
                                value={task}
                                onChange={handleInputChange}
                        />
                        <button 
                        type='submit'
                        className='btn btn-primary'
                        >
                            Agregar
                        </button>
                    </div>
                </form>
           </section>
    )
}
