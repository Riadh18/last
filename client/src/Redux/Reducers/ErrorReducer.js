import { CLEARERROR, HANDELERROR } from "../ActionsTypes/ErrorTypes"

const initialState=[]

const ErrorReducer=(state= initialState,action)=>{
    switch (action.type) {
        case HANDELERROR : return [...state,action.payload]
        case CLEARERROR : return state.filter(el=> el.id !== action.payload)
        default: return state
    }
}
export default ErrorReducer