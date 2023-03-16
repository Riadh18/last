import { CLEARERROR, HANDELERROR } from "../ActionsTypes/ErrorTypes"

export const handleError=(msg)=>(dispatch)=>{
    const id =Math.random()
    dispatch(
        {
            type:HANDELERROR,
            payload:{msg,id}

        }
    )

    
    setTimeout(()=>{
        dispatch(
            {
                type:CLEARERROR,
                payload:id
            }
        )
    },3000);

}