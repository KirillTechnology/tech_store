import { createSlice } from '@reduxjs/toolkit'


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


const INITIAL_CART = {
    isCartOpen: false,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_CART,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
        addItemToCart(state, action) {
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        }
    }
})


export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer