const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UDATE-POST-MESSAGE';


const profileReducer = (state, action) => {


    switch (action.type) {
        case ADD_POST:
            let newMessage = {
                id: 5,
                message: state.currentText,
                liked: 0,
            };
            state.postData.push(newMessage);
            state.currentText = '';
            return state;
        case UPDATE_POST_MESSAGE:
            state.currentText = action.postMessage;
            return state;
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