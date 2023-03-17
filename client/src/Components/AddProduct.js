import { useState } from "react"
import{Form,Button}from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProduct } from "../Redux/Actions/ProdAction"



const AddProduct=()=>{
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[pic,setPic]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleAdd=()=>{
        dispatch(addProduct({name,description,price,pic},navigate))
        

    }
        return(
          <div className="formm">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>description</Form.Label>
          <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>price</Form.Label>
          <Form.Control onChange={(e)=> setPrice(e.target.value)} type="number" placeholder="Enter price" />        
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>pic</Form.Label>
          <Form.Control onChange={(e)=> setPic(e.target.value)} type="text" placeholder="Enter pic" />        
        </Form.Group>
  
       
        <Button onClick={(e)=> handleAdd(e)} variant="primary">
          Submit
        </Button>
      </Form>
      </div>
    )
}
export default AddProduct