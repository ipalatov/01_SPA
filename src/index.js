import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import state, { addPost, updatePostMessage, subscribe } from './redux/state';


let rerenderTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				updatePostMessage={updatePostMessage}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);

}

rerenderTree(state);

subscribe (rerenderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
