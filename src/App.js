import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';




const App = () => {
	return (
		<BrowserRouter>
			<div className="app_wrapper">
				<Header />
				<NavBar />
				<div className='app_wrapper__content'>
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/users' render={() => <UsersContainer /> } />
					<Route path='/settings' render={() => <Settings />} />

				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;