import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Profile=()=>{
    
    const dispatch = useDispatch()
    const user = useSelector(state=>state.AuthReducer.user)


    useEffect(()=>{
        dispatch(current())
    },[user])

   

    
    return(
        <>
     
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.picture} />
        <Card.Body>
          <Card.Title><Link to={`/DescProfile/${user._id}`}>{user.name}</Link></Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
  
    </>
  );
}
    

export default Profile