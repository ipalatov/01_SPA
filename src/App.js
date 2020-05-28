import React, { Suspense } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import UsersContainer from './components/users/usersContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/login';
import { connect, Provider } from 'react-redux';
import { initializeAPP } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';

// import DialogsContainer from './components/dialogs/dialogsContainer';
// import ProfileContainer from './components/profile/profileContainer';

const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));






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
					<Switch>
						<Route path='/login' render={() => <LoginPage />} />
						<Suspense fallback={<div>Loading...</div>}>
							<Redirect from="/" to="/profile" />
							<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
							<Route path='/dialogs' render={() => <DialogsContainer />} />
							<Route path='/news' render={() => <News />} />
							<Route path='/music' render={() => <Music />} />
							<Route path='/users' render={() => <UsersContainer />} />
							<Route path='/settings' render={() => <Settings />} />
							{/* <Route path='*' render={() => <div> 404 NOT FOUND </div>} /> */}
						</Suspense>
					</Switch>
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
	return <BrowserRouter basename={process.env.PUBLIC_URL} >
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>

}



export default MainApp;