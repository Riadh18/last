import {Button,Card} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {deleteProduct} from "../Redux/Actions/ProdAction"

const CardProduct=({el})=>{
    const dispatch =useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.pic} />
      <Card.Body>
        <Card.Title><Link to={`/DescProduct/${el._id}`}>{el.name}</Link></Card.Title>
        <Card.Text>
         {el.description}
        </Card.Text>
        <Card.Title>{el.price}</Card.Title>
        <Card.Title>{el.status}</Card.Title>
        {/* <Card.Link as={Link} to={`/Editproduct/${el._id}`}>Edit</Card.Link>
          <Button variant="danger" onClick={()=>dispatch(deleteProduct(el._id))}>Delete</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardProduct