import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transactions: [

    ]
}
// create context
export const GlobalConext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
}

return (
    <GlobalContext.Provider value={{transactions:state.transactions }}>
        {children}
    </GlobalContext.Provider>
)
export default GlobalState;