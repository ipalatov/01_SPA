import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


let postData = [
	{ id: 1, message: 'Hello, World! How are you?', liked: 15 },
	{ id: 2, message: 'Its my first post!', liked: 20 },
	{ id: 3, message: 'I learn React!', liked: 200 },
	{ id: 4, message: 'This is works!', liked: 2000 }
];


let dialogsData = [
	{ id: 1, name: 'Ivan' },
	{ id: 2, name: 'Sergey' },
	{ id: 3, name: 'Tatyana' },
	{ id: 4, name: 'Nastyusha' },
	{ id: 5, name: 'Artem' },
	{ id: 6, name: 'Vadim' }
];

let messagesData = [
	{ id: 1, message: 'Ivan message' },
	{ id: 2, message: 'Sergey message' },
	{ id: 3, message: 'Tatyana message' },
	{ id: 4, message: 'Nastyusha message' },
	{ id: 5, message: 'Artem message' },
	{ id: 6, message: 'Vadim message' }
];



ReactDOM.render(
	<React.StrictMode>
		<App
			postData={postData}
			dialogsData={dialogsData}
			messagesData={messagesData}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
