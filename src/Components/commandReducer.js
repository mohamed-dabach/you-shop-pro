const initialValue = {
    command:1
}

export const reducer = (state = initialValue , action) =>{

    switch(action.type){
        case "ADD":
          return {...state, command: state.command + 1};
        case "MINUSE":
            return {...state, command : state.command - 1};
        case "RESET":
            return {...state, command : 0};
        default:
            return state;
    }
}

export const handleAdd = () => {
    return {
        type:"ADD"
    }
}

export const handleMinus = () => {
    return {
        type:"MINUSE"
    }
}

export const handleRemove = () => {
    return {
        type:"RESET"
    }
}