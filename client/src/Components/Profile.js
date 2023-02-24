import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Card from 'react-bootstrap/Card';

const Profile=()=>{
    
    const dispatch = useDispatch()
    const user = useSelector(state=>state.AuthReducer.user)


    useEffect(()=>{
        dispatch(current())
    },[user])

   

    
    return(
        <>
      {[
        'Dark'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {
                user.email
              }
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
    

export default Profile