import React, { useContext } from 'react';
import { InstaContext } from '../../../context/InstaContext';
import Feed from './Feed';

const NewsFeed = () => {
	const { user } = useContext(InstaContext);
	const { name, email, image } = user;
	return (
		<div>
			{email}
			<h1>{name}</h1>
			<img src={image} alt="" />
			<Feed />
			<Feed />
			<Feed />
		</div>
	);
};

export default NewsFeed;
