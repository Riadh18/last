import { Navigate } from "react-router-dom"

const PriveteRoute=({children})=>{
    const token =localStorage.getItem("token")
    return(
        <div>
            {
                token?children:<Navigate to='/'/>
            }

        </div>
    )
}
export default PriveteRoute