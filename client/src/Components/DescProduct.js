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
            <Card className="text-center">
            
            <Card.Header>{oneProduct.name}</Card.Header>
            <div className="profile">
            <Card.Img variant="top" src={oneProduct.pic} style={{width : "20%"}} />
            </div>
            <Card.Body>
                {/* <Card.Title>{user.email}</Card.Title> */}
                <Card.Text>
                   {oneProduct.description}
                </Card.Text>
                  {
                user.role == 'admin'?
                <>
                    <Button as={Link} to={`/Editproduct/${oneProduct._id}`}>Edit</Button>
                    <Button variant="danger" onClick={()=>dispatch(deleteProduct(oneProduct._id,navigate))}>Delete</Button>
                </>
                :                
                <>
                  <Button variant="light" onClick={()=>{qte>=1 &&setQte(qte-1)}}>-</Button>
         <span>{qte}</span>
            <Button variant="light" onClick={()=>setQte(qte+1)}>+</Button>
            <h2><i class="fa-sharp fa-solid fa-money-bill"></i> {totalPrice}</h2>
           <Button variant="success" onClick={()=> dispatch(createCommande({qte,totalPrice,idProduit : id,status :"In progress"},navigate))}>Commander</Button>
                </>
            }
                {/* <Button as={Link} to={`/editprofil/${user._id}`}>Edit</Button> */}
                {/* <Button variant="danger" onClick={()=>dispatch(deleteProfil(user._id,navigate))}>Delete</Button> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">{user.role}</Card.Footer> */}
            </Card>
         
            
        </div>
        // <div>
        //     <h1>{oneProduct.name}</h1>
        //     <img className="descpic" src={oneProduct.pic} alt="Not Found"></img>          
        //     {
        //         user.role == 'admin'&&
        //         <>
        //             <Card.Link as={Link} to={`/Editproduct/${oneProduct._id}`}>Edit</Card.Link>
        //             <Button variant="danger" onClick={()=>dispatch(deleteProduct(oneProduct._id,navigate))}>Delete</Button>
        //         </>
        //     }

        //     <button onClick={()=>{qte>=1 &&setQte(qte-1)}}>-</button>
        //     <span>{qte}</span>
        //     <button onClick={()=>setQte(qte+1)}>+</button>
        //     <h2>{totalPrice}</h2>
        //   <button onClick={()=> dispatch(createCommande({qte,totalPrice,idProduit : id,status :"In progress"},navigate))}>Commander</button>
        // </div>
    )
}

export default DescProduct