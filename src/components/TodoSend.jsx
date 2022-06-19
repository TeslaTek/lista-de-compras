import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoSend = ({todos}) => {

    const [{cellValue}, handleInputChange] = useForm({ cellValue:''});
    let url = 'https://wa.me/';

    const sendMessage = (e)=>{
        e.preventDefault();

       if (todos.length>0) {
            let urlMessage = (cellValue.trim() !== '' )? '598'+ cellValue + '/?text=*Lista%20Para%20El%20Super:*%0A' : '?text=*Lista%20Para%20El%20Super:*%0A';
            todos.forEach(todo => {
                urlMessage= urlMessage.concat(encodeURI(todo.desc)+'%0A') 
            });
            url =  url.concat(urlMessage);       
            window.open(url, '_blank').focus();
       }
    }

    return (
        <section className='border border-2 border-light rounded p-2 mt-3 mb-3'>

            <h3 className='text-center mb-3'>Envia tu lista a alguien</h3>
            <form onSubmit={sendMessage} >
            <div className="input-group mb-3">
                <span className="input-group-text" > +598 </span>
                <input 
                type="number"
                name="cellValue"
                pattern='[0-9]+'
                className="form-control phone-number"
                placeholder="Celular de destino (opcional)" 
                value={cellValue}
                onChange={handleInputChange}
                />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <button 
                    className='bg-transparent border-0'
                    onClick={sendMessage}
                >
                    <img alt='wspLogo' src='send_Whatsapp.png' width='75' height='75'/>
                </button>
            </div>
            </form>
        </section>
    )
}
 