import { FETCH_PTODUCTS } from "./ActionPr";

const initialValues = {
    products:[]
};

export const ProductReducer = (state = initialValues , action) => {

 switch(action.type){
        case FETCH_PTODUCTS: 
        return {...state, 
                 products:action.payload.data
              };

        default:
            return state;
    
    }
}

