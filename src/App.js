import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initializeAPP } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';




class App extends React.Component {

	componentDidMount() {
		this.props.initializeAPP();
	}

	render() {
		if (!this.props.initialized) { return <Preloader /> }

		return (
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
		)
	}




}

const mstp = (state) => ({
	initialized: state.app.initialized,
})

const AppContainer = compose(
	withRouter,
	connect(mstp, { initializeAPP }))
	(App);



const MainApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>

}



export default MainApp;