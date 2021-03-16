import { useContext } from 'react';
import { InstaContext } from './context/InstaContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import { Button } from 'react-bootstrap';
import SecureRoute from './components/Routes/SecureRoute';
import { LogOut } from './firebase/Auth';

function App() {
	const { LoggedIn, setLoggedIn, setUser } = useContext(InstaContext);

	const logOutBtn = () => {
		LogOut().then((e) => {
			if (e) {
				setLoggedIn(false);
				console.log(LoggedIn);
				setUser({});
			}
		});
	};
	return (
		<div className="App">
			<Router>
				<Link to="/">Home</Link>
				{LoggedIn && <Button onClick={logOutBtn}>Log Out</Button>}
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<SecureRoute>
						<Route exact path="/">
							<Home />
						</Route>
					</SecureRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
