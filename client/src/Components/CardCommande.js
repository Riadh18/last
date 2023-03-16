import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteCommande, editCommande } from "../Redux/Actions/CommandeAction"




const Cardcommande=({el})=>{
    const dispatch = useDispatch()
    const user = useSelector(state=> state.AuthReducer.user)

      return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{el.idCOwner.name}</Card.Title>
          
          <Card.Text>{el.idProduit.name}</Card.Text>
            <Card.Text>  { el.qte }</Card.Text>
          <Card.Text>{el.totalPrice}</Card.Text>
          <Card.Text>{el.status}</Card.Text>
          
        {  user.role =="admin" ?
        <><button onClick={()=> dispatch(editCommande({status:"Accepted"},el._id))}>Accepted</button>
          <button onClick={()=> dispatch(editCommande({status:"Rejected"},el._id))}>Rejected</button></>
          :
          <button onClick={()=> dispatch(deleteCommande(el._id))}>Delete</button>
          }
          
        </Card.Body>
      </Card>
    

      
      )
  }
export default Cardcommande