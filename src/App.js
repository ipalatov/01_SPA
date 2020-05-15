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



const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app_wrapper">
				<Header />
				<NavBar state={props.state.friendsBar} />
				<div className='app_wrapper__content'>
					<Route path='/profile' render={() => <Profile
						profilePage={props.state.profilePage}
						dispatch={props.dispatch} />}
					/>
					<Route path='/dialogs' render={() => <Dialogs
						dialogsPage={props.state.dialogsPage}
						dispatch={props.dispatch} />}
					/>
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />

				</div>
			</div>
		</BrowserRouter>
	)
}


export default App;