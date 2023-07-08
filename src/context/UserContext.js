import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})


// userReducer 

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    console.log('[Dispatched] action:', action)
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled userReducer type: ${type}`)
    }
}


export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const { currentUser } = state
    console.log(currentUser)

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    // const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
                // await createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}