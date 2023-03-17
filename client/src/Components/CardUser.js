import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../Redux/Actions/AuthActions"


const CardUser=({el})=>{
    const dispatch = useDispatch()
      return(
      // <Card style={{ width: '18rem' }}>
      //   <Card.Body>
      //     <Card.Title>{el.name}</Card.Title>
          
      //     <Card.Text>
      //       {
      //         el.email
      //       }
      //     </Card.Text>
      //     <Card.Link as={Link} to={`/edituser/${el._id}`}>Edit</Card.Link>
      //     <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))} >Delete</Button>
      //   </Card.Body>
      // </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width:"286px", height:"214px"}} variant="top" src={el.picture} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.email}
        </Card.Text>
        <div className="buttUser"> 
          <Button as={Link} to={`/edituser/${el._id}`}>Edit</Button>
         <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))} >Delete</Button>
         </div>
      </Card.Body>
    </Card>
      )
  }
export default CardUser