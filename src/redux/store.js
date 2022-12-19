import {createStore,applyMiddleware} from "redux";
import {RootReducer} from "./reducer/root-reducer";
export const store = createStore(
    RootReducer
)