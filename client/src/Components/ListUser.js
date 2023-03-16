import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser"

const ListUser=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const users = useSelector(state=>state.AuthReducer.users) 


    return(
        <div>
        {
            users && users.map(el=> <CardUser el={el}/>)
        }
    </div>
    )
}
export default ListUser