import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase.config';
import dummyProfile from '../Images/dummyProfile.jpg';

export const initializeFirebase = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

const userInfo = (info) => {
	const { displayName, email, photoURL, uid, emailVerified } = info?.user;
	const UserInfo = {
		isLoggedIn: true,
		name: displayName,
		email: email,
		image: photoURL || dummyProfile,
		uuid: uid,
		emailVerified: emailVerified,
	};
	return UserInfo;
};

export const googleSignIn = () => {
	return firebase
		.auth()
		.signInWithPopup(googleProvider)
		.then((result) => userInfo(result));
};

export const signUpForm = (email, password, displayName) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			updateUserName(displayName);
			return true;
		})
		.catch((err) => err.message);
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
		.then((res) => userInfo(res));
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
