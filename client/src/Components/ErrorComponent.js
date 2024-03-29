import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"
const ErrorComponent=()=>{

    const errors = useSelector(state=>state.ErrorReducer)



    return(
        <div>
            {   errors &&
                errors.map((el,i)=>
                <Alert key={i}  variant="danger">
                    {
                        el.msg
                    }
                </Alert>)
            }
        </div>
    )
}

export default ErrorComponent