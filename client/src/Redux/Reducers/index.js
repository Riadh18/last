import AuthReducer from "./AuthReducer"
import {combineReducers} from "redux"
import ErrorReducer from "./ErrorReducer"
import ProductReducer from "./ProductReducer"
import CommandeReducer from "./CommandeReducer"
const rootReducer= combineReducers({AuthReducer,ErrorReducer,ProductReducer,CommandeReducer})

export default rootReducer