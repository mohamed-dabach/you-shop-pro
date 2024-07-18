
export const SET_PRODUCT = 'SET_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const SETPRODUCT = (data) => {
   return {
    type: SET_PRODUCT,
    payload:data
   }
}

export const DELETEPRODUCT = (id) => {
    return {
     type: DELETE_PRODUCT,
     payload:id
    }
 }

