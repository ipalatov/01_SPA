import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/login';
import { connect } from 'react-redux';
import { initializeAPP } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';




class App extends React.Component {

	componentDidMount() {
		this.props.initializeAPP();
	}

	render() {
		if (!this.props.initialized) { return <Preloader /> }

		return (
			<BrowserRouter>
				<div className="app_wrapper">
					<HeaderContainer />
					<NavBar />
					<div className='app_wrapper__content'>
						<Route path='/login' render={() => <LoginPage />} />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/settings' render={() => <Settings />} />
					</div>
				</div>
			</BrowserRouter>
		)
	}




}

const mstp = (state) => ({
	initialized: state.app.initialized,
})


export default compose(connect(mstp, { initializeAPP }))
	(App);