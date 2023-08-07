// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./root-reducer";

// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

import logger from "redux-logger";

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

// // Chrome Redux DevTools support
// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const store = configureStore({
    reducer: rootReducer,
    // middleware: middleWares, // Overwrites default (Thunk, ... , ...) 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleWares)
})

// export const persistor = persistStore(store)