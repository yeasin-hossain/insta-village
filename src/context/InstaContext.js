import { createContext, useState } from 'react';

export const InstaContext = createContext();

export const InstaProvider = (props) => {
	// Initial State
	const [LoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	// Sent to Clint
	const contextService = {
		LoggedIn,
		setLoggedIn,
		user,
		setUser,
	};

	return (
		<InstaContext.Provider value={contextService}>
			{props.children}
		</InstaContext.Provider>
	);
};
