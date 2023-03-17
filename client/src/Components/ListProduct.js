import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../Redux/Actions/ProdAction"

import CardProduct from "./CardProduct"

const ListProduct=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
    },[])
    const products = useSelector(state=>state.ProductReducer.products) 


    return(
        <div className="product">
        {
            products && products.map(el=> <CardProduct el={el}/>)
        }
    </div>
    )
}
export default ListProduct