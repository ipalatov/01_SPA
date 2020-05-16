const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UDATE-POST-MESSAGE';


let initialState = {
    postData: [
        { id: 1, message: 'Hello, World! How are you?', liked: 15 },
        { id: 2, message: 'Its my first post!', liked: 20 },
        { id: 3, message: 'I learn React!', liked: 200 },
        { id: 4, message: 'This is works!', liked: 2000 }
    ],
    currentText: 'Type here',
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case UPDATE_POST_MESSAGE:
            stateCopy = { ...state, currentText: action.postMessage };
            return stateCopy;
        case ADD_POST:
            let newMessage = {
                id: 5,
                message: state.currentText,
                liked: 0,
            };
            stateCopy = {
                ...state,
                postData:[...state.postData, newMessage],
                currentText: ''
            };
            return stateCopy;


        default:
            return state;
    }


}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostMessageActionCreator = (text) => ({
    type: UPDATE_POST_MESSAGE,
    postMessage: text
}
)

export default profileReducer;