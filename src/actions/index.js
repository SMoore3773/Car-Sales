export const ADD_OPTION = 'ADD_OPTION';
export const REMOVE_OPTION= 'REMOVE_OPTION';


export const addOption = (option) =>{
    return {
        type: ADD_OPTION,
        payload: option
    };
};

export const removeOption = (option) => {
    return{
        type: REMOVE_OPTION,
        payload: option
    };
};
