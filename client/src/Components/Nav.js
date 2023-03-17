import {Navbar,Container,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"
import './Nav.css';

const Navv=()=>{
  const token = localStorage.getItem("token")

  const user = useSelector(state=> state.AuthReducer.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <Navbar>
        <Container>
          
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            
            
            
           
            {
              (token && user.role == "user") ?
              <>
                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                 <Nav.Link as={Link} to='/ListMyCommandes'>My Commandes</Nav.Link>
                 <Nav.Link as={Link} to='/ListProduct'>Products</Nav.Link>
                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                 
              </>
              :
              (token && user.role == "admin") ?
              <>
                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                 <Nav.Link as={Link} to='/ListCommande'>Commandes</Nav.Link>
                 <Nav.Link as={Link} to='/ListProduct'>Products</Nav.Link>
                 <Nav.Link as={Link} to='/AddProduct'>Add products</Nav.Link>
                 <Nav.Link as={Link} to='/ListUser'>List of Users</Nav.Link>
                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                 
              </>
              :
              <>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                <Nav.Link as={Link} to='/login' >Login</Nav.Link>
                
              </>
            }
            {/* <Nav.Link as={Link} to='/'>< img className="logo"   src={logo} title="logo"/></Nav.Link> */}
            {/* <Nav.Link as={Link} to='/ListUser'>List of Users</Nav.Link>
            <Nav.Link as={Link} to='/ListProduct'>products</Nav.Link>
            <Nav.Link as={Link} to='/AddProduct'>Add products</Nav.Link> */}
            



          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navv