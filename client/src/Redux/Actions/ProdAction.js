import { CREATEPRODUCT, GETPRODUCT, GETONEPRODUCT, GETPRODUCTS,} from "../ActionsTypes/ProdTypes"
import axios from "axios"


export const createproduct=(addproduct,navigate)=>async(dispatch)=>{
    try {
      const res= await axios.post('/api/product/createProduct',addproduct)

      dispatch(
        {
            type: CREATEPRODUCT,
    
            payload: res.data
        }
      ) 
      navigate('/Product')

    } catch (error) {
        
        console.log(error)
    }
 
}

export const getProduct=()=>async(dispatch)=>{
    try{
        const res = await axios.get('/api/product/getProduct')
        dispatch({
            type:GETPRODUCTS,
            payload: res.data.products
        })
    } catch(error){
        console.log(error)
    }
}


    

export const getOneProduct=(id)=>async(dispatch)=>{
    try{
        const res=await axios.get(`/api/product/getOneProduct/${id}`)
        dispatch({
            type:GETONEPRODUCT,
            payload: res.data.oneProduct
        })
    }catch(error){
        console.log(error)
    }
}


export const updateProduct=(upProduct,id,navigate)=>async(dispatch)=>{
    try{
        await axios.put(`/api/product/updateProduct/${id}`,upProduct)
        dispatch(getProduct())
        navigate(`/DescProduct/${id}`)
    }catch(error){
        console.log(error)
    }
}

export const deleteProduct=(id,navigate)=>async(dispatch)=>{
    try{
        await axios.delete(`/api/product/deleteProduct/${id}`)
        dispatch(getProduct())
        navigate('/ListProduct')
    }catch(error){
        console.log(error)
    }
}

  

export const addProduct=(newProduct,navigate)=>async(dispatch)=>{
    try{
        await axios.post('/api/product/createProduct',newProduct)
        dispatch(getProduct())
        navigate('/ListProduct')
    }catch(error){
        console.log(error)
    }
}






