import { createSelector } from "reselect";


const selectCartReducer = (state) => state.cart

export const selectIsOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((acc, x) => (acc + x.quantity), 0)
)

export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((acc, x) => (acc + x.quantity * x.price), 0)
)