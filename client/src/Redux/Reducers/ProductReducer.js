import { CREATEPRODUCT, GETONEPRODUCT, GETPRODUCTS } from "../ActionsTypes/ProdTypes"

const initialState={
    products : [],
    oneProduct : {}
}


const ProductReducer=(state = initialState,action)=>{
    switch (action.type) {
        case CREATEPRODUCT:localStorage.setItem(action.payload)
        return{...state,product:action.payload.newProduct,errors:null}
       
        case GETPRODUCTS: return{...state,products:action.payload}
        case GETONEPRODUCT: return{...state,oneProduct:action.payload}

         default: return state
        
    }
    
}

export default ProductReducer