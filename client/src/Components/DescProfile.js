import { useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteProfil, deleteUser, getOneUser } from "../Redux/Actions/AuthActions"


const DescProfile=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])
    const user= useSelector(state=>state.AuthReducer.user)

    return(
        <div>
            <Card className="text-center">
            
            <Card.Header>{user.name}</Card.Header>
            <div className="profile">
            <Card.Img variant="top" src={user.picture} style={{width : "20%"}} />
            </div>
            <Card.Body>
                <Card.Title>{user.email}</Card.Title>
                <Card.Text>
                    <h5>Phone : {user.phone}</h5>
                
                    <h5>Adress : {user. adress}</h5>
                </Card.Text>
                <Button as={Link} to={`/editprofil/${user._id}`}>Edit</Button>
                <Button variant="danger" onClick={()=>dispatch(deleteProfil(user._id,navigate))}>Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{user.role}</Card.Footer>
            </Card>
         
            
        </div>
    )
}
export default DescProfile