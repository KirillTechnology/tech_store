import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    if (cartItems.find(item => item.id === productToAdd.id)) {
        return cartItems.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    let newCartItems = cartItems.map(item => {
        if (item.id === cartItemToRemove.id) {
            item.quantity--
            return item
        }
        return item
    })

    newCartItems = newCartItems.filter(x => x.quantity > 0)

    return newCartItems
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(item => item.id !== cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
})

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((acc, x) => (acc + x.quantity), 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((acc, x) => (acc + x.quantity * x.price), 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}