import React from 'react';

function Test() {
	const btnTest = () => {
		console.log('test');
	};
	return (
		<div>
			<button className="btn ntn-primary" onClick={btnTest}>
				Google
			</button>
		</div>
	);
}

export default Test;
