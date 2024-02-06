import { useDispatch } from "react-redux"
const dispatch=useDispatch()
export const deleteorder=(val)=>{
    dispatch({
        type: "DELETE_ORDER",
        payload: val
      })
}