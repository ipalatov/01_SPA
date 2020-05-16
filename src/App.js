import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Profile from './components/profile/profile';
import News from './components/news/news'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';




const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app_wrapper">
				<Header />
				<NavBar state={props.state.friendsBar} />
				<div className='app_wrapper__content'>
					<Route path='/profile' render={() => <Profile store={props.store} />} />
					<Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />

				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;