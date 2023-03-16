import { useEffect, useState } from "react"
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"

const EditUser=()=>{
    const {id}=useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])
    const oneUser= useSelector(state=>state.AuthReducer.oneUser)

    const [name,setName] = useState(oneUser.name)
    const [email,setEmail] = useState(oneUser.email)
    const [picture,setPicture] = useState(oneUser.picture)
    const [adress,setAdress] = useState(oneUser.adress)
    const [phone,setPhone] = useState(oneUser.phone)



    // adress : String,
    // picture : String,
    // phone : Number,
    // password :{type:String, required : true},
    // role : String

    useEffect(()=>{
        setName(oneUser.name)
        setEmail(oneUser.email)
        setAdress(oneUser.adress)
        setPicture(oneUser.picture)
        setPhone(oneUser.phone)
    },[oneUser])
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateUser({name,email,adress,phone,picture},id,navigate))
    }
    return(<>
       { oneUser && 
       
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
        </Form.Group>

       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adress</Form.Label>
          <Form.Control value={adress} onChange={(e)=> setAdress(e.target.value)} type="text" placeholder="Enter adress" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Picture</Form.Label>
          <Form.Control value={picture} onChange={(e)=> setPicture(e.target.value)} type="text" placeholder="Enter adress" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="Enter adress" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>}</>
    )
}






     

   
export default EditUser