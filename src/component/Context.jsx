import React from "react";
import { createContext, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [following, setFollowing] = useState([])
    const addFollowed = (obj) => {
        setFollowing([...following, obj])
    }
    const remove = (id) => {
        const result = following.filter((item) => item.id !== id )
        setFollowing(result)
    }

    return(
        <Context.Provider value={{addFollowed, following, setFollowing, remove}}>
            {children}
        </Context.Provider>
    )
}