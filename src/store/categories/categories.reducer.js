import { CATEGORIES_ACTION_TYPES } from "./categories.types"

export const INITIAL_CATEGORIES = {
    categories: [],
}

export const categoriesReducer = (state = INITIAL_CATEGORIES, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return { ...state, categories: payload }
        default:
            return state
    }
}