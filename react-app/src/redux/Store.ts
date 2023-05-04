import {applyMiddleware, createStore} from "redux";
import {messagesReducer} from "./Reducer";
import {messagesMiddlewares} from "./Middleware";
import {composeWithDevTools} from "redux-devtools-extension";

const middlewareEnhancer = applyMiddleware(...messagesMiddlewares)
export const rootStoreEnhancer = composeWithDevTools(middlewareEnhancer);
export const store = createStore(messagesReducer, rootStoreEnhancer);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const selectMessages = (state: RootState) => state.messages;
