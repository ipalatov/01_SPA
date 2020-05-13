import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs'
import News from './components/news/news'
import Music from './components/music/music'
import Settings from './components/settings/settings'

import { Route, BrowserRouter } from 'react-router-dom';



const App = () => {
	return (
		<BrowserRouter>
			<div className="app_wrapper">
				<Header />
				<NavBar />
				<div className='app_wrapper__content'>
					<Route path='/profile' component={Profile} />
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />

				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;