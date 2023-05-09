import { configureStore } from "@reduxjs/toolkit"

import _reducer from "./rootReducer"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"

import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "weatherApp",
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, _reducer)

// function for creating store in case we have tests we can reuse it
export const createStore = (reducer = persistedReducer) => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  return store
}

// creating store for redux Provider
const store = createStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export { store }
