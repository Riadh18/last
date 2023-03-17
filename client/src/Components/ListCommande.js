import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommandes } from "../Redux/Actions/CommandeAction"
import Cardcommande from "./CardCommande"

const Listcommande=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCommandes())
    },[])
    const commandes = useSelector(state=>state.CommandeReducer.commandes) 


    return(
        <div className="product">
        {
            commandes && commandes.map(el=> <Cardcommande el={el}/>)
        }
    </div>
    )
}
export default Listcommande