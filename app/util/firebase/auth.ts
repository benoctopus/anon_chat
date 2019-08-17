import * as firebase from "firebase/app";

import "firebase/auth";

let gProvider = new firebase.auth.GoogleAuthProvider();

export const googlePopupSignIn = async (): Promise<firebase.auth.UserCredential | null> => {
  if (process.browser) return firebase.auth().signInWithPopup(gProvider);
  return null;
};
