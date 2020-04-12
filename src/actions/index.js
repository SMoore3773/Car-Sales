export const ADD_OPTION = 'ADD_OPTION';
export const REMOVE_OPTION= 'REMOVE_OPTION';


export const addOption = () =>{
    return {type: ADD_OPTION};
};

export const removeOption = () => {
    return{type: REMOVE_OPTION};
};
