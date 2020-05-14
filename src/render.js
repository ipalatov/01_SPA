import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addPost, updatePostMessage } from './redux/state';


let rerenderTree = (state)=> {
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

export default rerenderTree;


