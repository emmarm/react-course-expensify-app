import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

// Sign Up
export const startCreateUserWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const createUserWithEmail = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email
  });

// Log In
export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginWithAuthProvider = (authProvider) => {
  return () => {
    if (authProvider === 'google') {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    } else if (authProvider === 'facebook') {
      return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
  }
};

export const startLoginWithEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// Log Out
export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
};

// Reset Password
export const startResetPassword = (email) => 
  firebase.auth().sendPasswordResetEmail(email);