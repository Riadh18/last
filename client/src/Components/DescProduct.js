import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { current } from "../Redux/Actions/AuthActions"
import { createCommande } from "../Redux/Actions/CommandeAction"

import { deleteProduct, getOneProduct } from "../Redux/Actions/ProdAction"

const DescProduct=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // "idProduit": "640efd6b235e36fed80e2aae",
    // "qte": 3,
    // "totalPrice" : 20
    const [qte,setQte]= useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    useEffect(()=>{
        dispatch(getOneProduct(id))
        dispatch(current())
    },[])
    

    const oneProduct= useSelector(state=>state.ProductReducer.oneProduct)
    const user = useSelector(state=> state.AuthReducer.user)
    useEffect(()=>{
     
        setTotalPrice(qte*oneProduct.price)
    },[qte,oneProduct])
    return(
        <div>
            <h1>{oneProduct.name}</h1>
            <img src={oneProduct.pic} alt="Not Found"></img>          
            {
                user.role == 'admin'&&
                <>
                    <Card.Link as={Link} to={`/Editproduct/${oneProduct._id}`}>Edit</Card.Link>
                    <Button variant="danger" onClick={()=>dispatch(deleteProduct(oneProduct._id,navigate))}>Delete</Button>
                </>
            }

            <button onClick={()=>{qte>=1 &&setQte(qte-1)}}>-</button>
            <span>{qte}</span>
            <button onClick={()=>setQte(qte+1)}>+</button>
            <h2>{totalPrice}</h2>
          <button onClick={()=> dispatch(createCommande({qte,totalPrice,idProduit : id,status :"In progress"},navigate))}>Commander</button>
        </div>
    )
}

export default DescProduct