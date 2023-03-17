import { Card,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteCommande, editCommande } from "../Redux/Actions/CommandeAction"




const Cardcommande=({el})=>{
    const dispatch = useDispatch()
    const user = useSelector(state=> state.AuthReducer.user)

      return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> Name : {el.idCOwner.name} <i class="fa-solid fa-cart-shopping"></i></Card.Title>
          
          <Card.Text>Product : {el.idProduit.name}</Card.Text>
            <Card.Text>quantité : { el.qte }</Card.Text>
          <Card.Text>Price : {el.totalPrice}</Card.Text>
          <Card.Text className={el.status == "Rejected" ? "red" :el.status == "Accepted" ? "green" : null }>{el.status}</Card.Text>
          
        {  user.role =="admin" ?
        <div className="buttUser">
        <><Button variant="success" onClick={()=> dispatch(editCommande({status:"Accepted"},el._id))}>Accepted</Button>
          <Button variant="danger" onClick={()=> dispatch(editCommande({status:"Rejected"},el._id))}>Rejected</Button></>
          </div>
          :
          <Button variant="danger" onClick={()=> dispatch(deleteCommande(el._id))}>Delete</Button>
          }
          
        </Card.Body>
      </Card>
    

      
      )
  }
export default Cardcommande