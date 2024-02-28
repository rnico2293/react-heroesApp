import {AuthContext} from './AuthContext';
import { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { types } from '../types/types';

const init =() =>{
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged:!!user, //doble negacion para preguntar si existe, si existe es true
        user, // si existe lo retorno tambien.
    }
}

export const AuthProvider = ({children}) => {

   const [authState, dispatch] = useReducer( AuthReducer, {}, init )
    
    const login = ( name = '' ) => {
        
        const user ={ ID:'idCualquie', name }
        const action = { type: types.login, payload: user }
        localStorage.setItem('user',JSON.stringify( user ) );
        
        dispatch(action);
    }

    const logout = () => { 
        localStorage.removeItem('user');
        
        const action = {type: types.logout}
        dispatch(action);
    }
    return (

        <AuthContext.Provider value = {{
            ...authState,

            //Methods
            login,
            logout

        }}> 
            {children}
        </AuthContext.Provider> 
    )
}
