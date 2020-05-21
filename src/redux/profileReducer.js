import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UDATE-POST-MESSAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    postData: [
        { id: 1, message: 'Hello, World! How are you?', liked: 15 },
        { id: 2, message: 'Its my first post!', liked: 20 },
        { id: 3, message: 'I learn React!', liked: 200 },
        { id: 4, message: 'This is works!', liked: 2000 }
    ],
    currentText: 'Type here',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_POST_MESSAGE:
            return { ...state, currentText: action.postMessage };

        case ADD_POST:
            let newMessage = {
                id: 5,
                message: state.currentText,
                liked: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newMessage],
                currentText: ''
            };
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }


        default:
            return state;
    }


}


export const addPost = () => ({ type: ADD_POST })
export const updatePostMessage = (text) => ({ type: UPDATE_POST_MESSAGE, postMessage: text })
export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatusSuccess = (status) => ({ type: SET_USER_STATUS, status })


// thunk

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileSuccess(response.data));
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatusSuccess(response.data));
            })
    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusSuccess(status));
                }
            })
    }
}





export default profileReducer;