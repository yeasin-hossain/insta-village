import { createContext, useState } from 'react';

export const InstaContext = createContext();

export const InstaProvider = (props) => {
	// Initial State
	const [LoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [name, setName] = useState('shanto');
	// Sent to Clint
	const contextService = {
		LoggedIn,
		setLoggedIn,
		user,
		setUser,
		name,
		setName,
	};

	return (
		<InstaContext.Provider value={contextService}>
			{props.children}
		</InstaContext.Provider>
	);
};
