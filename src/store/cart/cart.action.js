import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


// Helper functions

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


//

const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, x) => (acc + x.quantity), 0)
    const newCartTotal = newCartItems.reduce((acc, x) => (acc + x.quantity * x.price), 0)

    dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        })
    )
}

const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
}



const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}