const FETCH_PTODUCTS = 'FETCH_PTODUCTS'
const FETCH_CATEGORIES = 'FETCH_CATEGORIES'


export const FETCHPRODUCT = () => {
   return {
    type: FETCH_PTODUCTS,
    payload:{id,img,name,price,category,disc,feachers:{text,items}}
   }
}

export const FETCHCATEGORIES = () => {
    return {
     type: FETCH_CATEGORIES,
     payload:{category,count}
    }
 }