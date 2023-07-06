import { createContext, useState, useEffect } from "react";


export const NotificationContext = createContext({
    message: '',
    count: 0
})

export function NotificationProvider({ children }) {
    const [message, setMessage] = useState('')
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (message.length) { setShow(true) }
        const id = setTimeout(() => setShow(false), 3000)

        return () => {clearTimeout(id); setShow(false)}
    }, [count])

    const notify = (x) => {
        setMessage(x)
        setCount(n => n + 1)
    }

    const value = { message, notify, show, setShow }

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    )
}