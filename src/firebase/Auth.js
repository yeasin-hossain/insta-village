import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = () => {
	return firebase
		.auth()
		.signInWithPopup(googleProvider)
		.then(function (result) {
			const { displayName, email } = result.user;
			const loggedInUser = {
				isLoggedIn: true,
				name: displayName,
				email: email,
			};
			return loggedInUser;
		});
};

export const signUpForm = (email, password, displayName) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			updateUserName(displayName);
			return res;
		});
};

const updateUserName = (name) => {
	firebase.auth().currentUser.updateProfile({
		displayName: name,
	});
};

// Sign In Form
export const SignInPassAndMail = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			const { displayName, email } = res.user;
			const loggedInUser = {
				isLoggedIn: true,
				name: displayName,
				email: email,
			};
			return loggedInUser;
		});
};

// Logout function
export const LogOut = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => {
			return true;
		});
};
