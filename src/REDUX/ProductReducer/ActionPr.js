
export const FETCH_PTODUCTS = 'FETCH_PTODUCTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

export const FETCHPRODUCT = (data) => {
   return {
    type: FETCH_PTODUCTS,
    payload:{data}
   }
}

export const FETCHCATEGORIES = () => {
    return {
     type: FETCH_CATEGORIES,
     payload:{category,count}
    }
 }

