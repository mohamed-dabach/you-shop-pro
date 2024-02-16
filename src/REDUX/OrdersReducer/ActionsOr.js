export const ADDTOCART = "ADDTOCART";
export const INCREMENT = "INCREMENT";
export const DECRIMENT = "DECRIMENT";
export const REMOVE_ORDER = "REMOVE_ORDER";


export const ADDTOCARTACTION = (id,img,name,price,category,count) => {
    return {
       type: ADDTOCART,
       payload:{id,img,name,price,category,count}
    }
}

export const INCREMENTACTION = (id) => {
    return {
        type: INCREMENT,
        payload:{id}
    }
}

export const DECRIMENTACTION = (id) => {
    return {
       type: DECRIMENT,
       payload:{id}
    }
}

export const REMOVEORDER = (id) => {
    return {
       type: REMOVE_ORDER,
       payload:{id}
    }
}