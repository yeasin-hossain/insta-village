import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { InstaContext } from '../../context/InstaContext';

function SecureRoute({ children, ...rest }) {
	const { LoggedIn } = useContext(InstaContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				LoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
export default SecureRoute;
