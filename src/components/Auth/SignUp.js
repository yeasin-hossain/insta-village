import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.scss';

function SignUp(props) {
	const { singUp, userCheck, SignIn } = props;
	const createUser = {
		email: '',
		password: '',
		fullName: '',
	};

	const fromInput = (e) => {
		e.target.name === 'email'
			? (createUser.email = e.target.value)
			: e.target.name === 'password'
			? (createUser.password = e.target.value)
			: (createUser.fullName = e.target.value);
	};

	const submitFormToAuth = (e) => {
		const restForm = () => {
			// Rest Form
			e.target.email.value = '';
			e.target.password.value = '';
			e.target.fullName.value = '';
		};

		if (userCheck) {
			if (createUser.email && createUser.password) {
				SignIn(createUser.email, createUser.password);
				e.target.email.value = '';
				e.target.password.value = '';
			}
		} else {
			if (createUser.email && createUser.password && createUser.fullName) {
				singUp(createUser.email, createUser.password, createUser.fullName);
				restForm();
			}
		}

		e.preventDefault();
	};

	return (
		<div className="form">
			<Form onSubmit={submitFormToAuth}>
				{!userCheck && (
					<Form.Group controlId="formBasicName">
						<Form.Control
							onChange={fromInput}
							type="text"
							placeholder="Enter Full Name"
							name="fullName"
						/>
					</Form.Group>
				)}

				<Form.Group controlId="formBasicEmail">
					<Form.Control
						onChange={fromInput}
						type="email"
						placeholder="Enter email"
						name="email"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						onChange={fromInput}
					/>
				</Form.Group>
				<Button variant="primary" className="w-100 my-3" type="submit">
					{userCheck ? 'Login' : 'Sign Up'}
				</Button>
			</Form>
		</div>
	);
}

export default SignUp;
