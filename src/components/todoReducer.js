

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add': return [ action.payload, ...state];
        
        case 'delete': return state.filter( todo => todo.id !== action.payload);
        
        case 'toggle':  let unOrdered =  state.map(todo => 
            (todo.id === action.payload) ? {...todo, done: !todo.done} : todo );
            unOrdered.sort((a,b) =>{
                if (a.done > b.done) {
                    return 1;
                }else if (a.done < b.done) {
                        return -1;
                }
                return 0;
            })
            return unOrdered;
            
        default: return state
            
    }
}
