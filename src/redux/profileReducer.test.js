import profileReducer, { addPost, deletePost } from "./profileReducer";

 // 1. Start data

 let action = addPost('TEST-POST!');
 let state = {
     postData: [
         { id: 1, message: 'Hello, World! How are you?', liked: 15 },
         { id: 2, message: 'Its my first post!', liked: 20 },
         { id: 3, message: 'I learn React!', liked: 200 },
         { id: 4, message: 'This is works!', liked: 2000 }
     ]
 };



test('length post should be incremented', () => {
   
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation

    expect(newState.postData.length).toBe(5)
     
});


test('new post message shoud be "TEST-POST!"', () => {
   
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation

    expect(newState.postData[4].message).toBe("TEST-POST!")
     
});

test('after deleting length of postData should be decremented"', () => {
    let action = deletePost(1);
    // 2. Action
    let newState = profileReducer(state, action)
    

    // 3. Expectation

    expect(newState.postData.length).toBe(3)
     
});


test(`after deleting length of postData should't be changed if id is incorrect `, () => {
    let action = deletePost(8);
    // 2. Action
    let newState = profileReducer(state, action)
    

    // 3. Expectation

    expect(newState.postData.length).toBe(4)
     
});