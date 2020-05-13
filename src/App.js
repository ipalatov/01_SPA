import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Profile from './components/profile/profile';



const App = () => {
	return (
		<div className="app_wrapper">
			<Header />
			<NavBar />
			<Profile />
		</div>
	)
}






export default App;
