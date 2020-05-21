import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UDATE-POST-MESSAGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    postData: [
        { id: 1, message: 'Hello, World! How are you?', liked: 15 },
        { id: 2, message: 'Its my first post!', liked: 20 },
        { id: 3, message: 'I learn React!', liked: 200 },
        { id: 4, message: 'This is works!', liked: 2000 }
    ],
    currentText: 'Type here',
    profile: null,
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
        default:
            return state;
    }


}


export const addPost = () => ({ type: ADD_POST })
export const updatePostMessage = (text) => ({ type: UPDATE_POST_MESSAGE, postMessage: text })
export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile })


// thunk

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileSuccess(response.data));
            })
    }
}






export default profileReducer;