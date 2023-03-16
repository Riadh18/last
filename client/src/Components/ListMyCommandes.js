// ListMyCommandes
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyCommandes } from "../Redux/Actions/CommandeAction"
import Cardcommande from "./CardCommande"

const ListMyCommandes=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMyCommandes())
    },[])
    const myCommandes = useSelector(state=>state.CommandeReducer.myCommandes) 


    return(
        <div>
        {
           myCommandes && myCommandes.map(el=> <Cardcommande el={el}/>)
        }
    </div>
    )
}
export default ListMyCommandes