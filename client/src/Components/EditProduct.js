import { useEffect, useState } from "react"
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct, getProduct, updateProduct } from "../Redux/Actions/ProdAction"


const Editproduct=()=>{
    const {id}=useParams()
 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[])
    const oneProduct= useSelector(state=>state.ProductReducer.oneProduct)

    const [name,setName] = useState(oneProduct.name)
    const [price,setPrice] = useState(oneProduct.Price)
    const [description,setDescription] = useState(oneProduct.Price)
    const [pic,setPic]= useState(oneProduct.pic)

    useEffect(()=>{
        setName(oneProduct.name)
        setPrice(oneProduct.price)
        setDescription(oneProduct.description)
        setPic(oneProduct.pic)
    },[oneProduct])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateProduct({name,price,description,pic},id,navigate))
    }
    return(<>
       { oneProduct && 
       
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
        </Form.Group>

       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>description</Form.Label>
          <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />       
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control value={price} onChange={(e)=> setPrice(e.target.value)} type="Number" placeholder="Enter price" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>sett pic</Form.Label>
          <Form.Control value={pic} onChange={(e)=> setPic(e.target.value)}  placeholder="Enter pic" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>}</>
    )
}
export default Editproduct