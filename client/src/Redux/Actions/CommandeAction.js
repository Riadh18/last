import { CREATECOMMANDE, GETCOMMANDES, GETMYCOMMANDES } from "../ActionsTypes/CommandeTypes"
import axios from 'axios'

export const getCommandes=()=>async(dispatch)=>{
    try{
        const res = await axios.get('/api/commande/getCommandes')
dispatch({
            type:GETCOMMANDES,
            payload: res.data.commandes
        })
    } catch(error){
        console.log(error)
    }
}

export const getMyCommandes=()=>async(dispatch)=>{
    const config={
        headers : {
            Authorized : localStorage.getItem("token")
        } 
    }
    try{
        const res = await axios.get('/api/commande/getMyCommandes',config)
dispatch({
            type:GETMYCOMMANDES,
            payload: res.data.commandes
        })
    } catch(error){
        console.log(error)
    }
}

export const createCommande=(addcommande,navigate)=>async(dispatch)=>{
    const config={
        headers : {
            Authorized : localStorage.getItem("token")
        } 
    }
    try {
      const res= await axios.post('/api/commande/createCommande',addcommande,config)

      dispatch(getCommandes()) 
      navigate('/ListCommande')
     

    } catch (error) {
        
        console.log(error)
    }
 
}

export const editCommande=(upCom,id)=>  async (dispatch)=>{
   
    try {
        const res= await axios.put(`/api/commande/updateCommande/${id}`,upCom)
        dispatch(getCommandes())
        
    } catch (error) {
        console.log(error)
    }
       }

       export const deleteCommande=(id)=> async (dispatch)=>{
     
        try {
            const res = await axios.delete(`/api/commande/deleteCommande/${id}`)
            dispatch(getMyCommandes())
        } catch (error) {
            console.log(error)
        }
    }