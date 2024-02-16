import { FETCHPRODUCT } from "./ActionPr";

const initialValues = {
    id:'',
    img:'',
    name:'',
    category:''
};

export const ProductReducer = (state=initialValues, action) => {
    switch(action.type){
    case FETCHPRODUCT : 
    return {...state, 
                  id:action.payload.id,
                  img:action.payload.img,
                  name:action.payload.name,
                  category:action.payload.category
    };

    default:
        return state;
    
    }
}

