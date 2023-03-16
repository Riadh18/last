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
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <Card.Link as={Link} to={`/editprofil/${user._id}`}>Edit</Card.Link>
          <Button variant="danger" onClick={()=>dispatch(deleteProfil(user._id,navigate))}>Delete</Button>
        </div>
    )
}
export default DescProfile