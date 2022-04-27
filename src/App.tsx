import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MainPage from './pages/mainPage';
import ComingSoon from './pages/comingSoon';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface Props {}
interface State {
	user: User | null,
	loading: boolean
}
class App extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: null,
			loading: true
		}

	}
	componentDidMount() {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if(user) {
				this.setState({
					user: user,
					loading: false
				})
			} else (
				this.setState({
					user: null,
					loading: false
				})
			)
		});
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar user={this.state.user} />
					<Routes>
						<Route path='/' element={<MainPage user={this.state.user} />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='*' element={<ComingSoon />} />
					</Routes>
				</div>
			</Router>
		)
	}
}

export default App;
