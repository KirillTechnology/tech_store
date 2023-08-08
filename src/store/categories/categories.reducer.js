import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_CATEGORIES = {
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_CATEGORIES,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer