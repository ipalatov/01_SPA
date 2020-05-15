
const ADD_POST = 'ADD-POST';
const UPDATE_POST_MESSAGE = 'UDATE-POST-MESSAGE';


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hello, World! How are you?', liked: 15 },
                { id: 2, message: 'Its my first post!', liked: 20 },
                { id: 3, message: 'I learn React!', liked: 200 },
                { id: 4, message: 'This is works!', liked: 2000 }
            ],
            currentText: 'Type here',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Ivan', img: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg' },
                { id: 2, name: 'Sergey', img: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
                { id: 3, name: 'Tatyana', img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' },
                { id: 4, name: 'Nastyusha', img: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' },
                { id: 5, name: 'Artem', img: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg' },
                { id: 6, name: 'Vadim', img: 'https://shapka-youtube.ru/wp-content/uploads/2018/10/spartan.png' }
            ],
            messagesData: [
                { id: 1, message: 'Ivan message' },
                { id: 2, message: 'Sergey message' },
                { id: 3, message: 'Tatyana message' },
                { id: 4, message: 'Nastyusha message' },
                { id: 5, message: 'Artem message' },
                { id: 6, message: 'Vadim message' }
            ],

        },
        friendsBar: {
            friends: [
                { id: 1, name: 'Ivan', img: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg' },
                { id: 2, name: 'Sergey', img: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' },
                { id: 3, name: 'Tatyana', img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' },
            ]
        }
    },

    _callSubscriber() { console.log('state changed') },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    // addPost() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.profilePage.currentText,
    //         liked: 0,
    //     }
    //     this._state.profilePage.postData.push(newMessage);
    //     this._state.profilePage.currentText = null;
    //     this._callSubscriber(this._state);
    // },
    // updatePostMessage(postMessage) {
    //     this._state.profilePage.currentText = postMessage;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) { // type: 'ADD-POST'
        if (action.type === ADD_POST) {
            let newMessage = {
                id: 5,
                message: this._state.profilePage.currentText,
                liked: 0,
            }
            this._state.profilePage.postData.push(newMessage);
            this._state.profilePage.currentText = null;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_MESSAGE) {
            this._state.profilePage.currentText = action.postMessage;
            this._callSubscriber(this._state);
        }

    }

}



let addPostActionCreator = () => ({ type: ADD_POST })


let updatePostMessageActionCreator = (text) => ({
    type: UPDATE_POST_MESSAGE,
    postMessage: text
}
)

export { addPostActionCreator, updatePostMessageActionCreator };


export default store;

// window.store = store;