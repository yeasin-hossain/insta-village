import React, { useContext, useState } from 'react';
import {
	signUpForm,
	initializeFirebase,
	googleSignIn,
	SignInPassAndMail,
} from '../../firebase/Auth';
import { FcGoogle } from 'react-icons/fc';
import './Auth.scss';
import { InstaContext } from '../../context/InstaContext';
import SignUp from './SignUp';
import { useHistory } from 'react-router';

function Login() {
	initializeFirebase();
	const { setLoggedIn, setUser } = useContext(InstaContext);
	const [oldUser, setOldUser] = useState(false);

	const history = useHistory();

	const googleLogin = () => {
		googleSignIn().then((res) => {
			setLoggedIn(true);
			console.log(res);
			setUser(res);
			history.push('/');
		});
	};

	const signUpWithForm = (email, password, displayName) => {
		signUpForm(email, password, displayName).then((res) => {
			res === 'true' ? setOldUser(true) : console.log(res);
		});
	};

	const SignInWithForm = (email, password) => {
		SignInPassAndMail(email, password).then((res) => {
			setUser(res);
			setLoggedIn(true);
			history.push('/');
		});
	};

	return (
		<div className="mt-5  authForm">
			<SignUp
				singUp={signUpWithForm}
				SignIn={SignInWithForm}
				userCheck={oldUser}
			/>
			<button
				className="btn btn-info d-block m-auto my-2"
				onClick={() => setOldUser(!oldUser)}
			>
				{!oldUser ? 'Login' : 'Sing Up'}
			</button>

			<h6 className="text-center my-1">Or</h6>

			<button className="btn d-block m-auto" onClick={googleLogin}>
				<FcGoogle />
			</button>
		</div>
	);
}

export default Login;
