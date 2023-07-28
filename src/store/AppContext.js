import React, { useEffect } from "react";
import { createContext, useContext, useReducer } from "react"
import { reducer } from "./reducer";
import { fetchCartItemsAction } from "./actions";

export const Context = createContext({})

export const useAppContext = () => useContext(Context)

export const AppContext = ({ children, initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetchCartItemsAction(dispatch);
    }, [dispatch]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )

}