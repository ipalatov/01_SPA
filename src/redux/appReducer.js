import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {

    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

// thunks


export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // dispatch(somethingelse()); диспатчим что-то еще
    // dispatch(somethingelse()); диспатчим что-то еще

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    }); // только потом начинаем диспатчить initializedSuccess 
    // через массив  промисов от предыдущ диспатчей
}




export default appReducer;