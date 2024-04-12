import { auth } from './firebaseConfig'
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth'

export const loginUser = async (email, password, rememberMe) => {
  try {
    await setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    )

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const changeUserPassword = async (password) => {
  const user = auth.currentUser
  if (!user) {
    throw new Error('No authenticated user.')
  }
  try {
    await updatePassword(user, password) // Use Firebase's updatePassword
  } catch (error) {
    console.error('Password update failed:', error)
    throw new Error(error.message) // Or handle the error more gracefully
  }
}
export const updateEmail = async (email) => {
  try {
    await updateEmail(auth.currentUser, email)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const deleteUser = async () => {
  try {
    await deleteAccount(auth.currentUser)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const reauthenticate = async (password) => {
  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    password
  )
  try {
    await reauthenticateWithCredential(auth.currentUser, credential)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const updateProfile = async (name, photoUrl) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
  } catch (error) {
    throw new Error(error.message)
  }
}
export const updatePhoneNumber = async (phoneNumber) => {
  try {
    await updatePhoneNumber(auth.currentUser, phoneNumber)
  } catch (error) {
    throw new Error(error.message)
  }
}
export const verifyEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser)
  } catch (error) {
    throw new Error(error.message)
  }
}
// Social firebase sign in and sing up
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider()
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider()
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithTwitter = async () => {
  const provider = new TwitterAuthProvider()
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithMicrosoft = async () => {
  const provider = new OAuthProvider('microsoft.com')
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithYahoo = async () => {
  const provider = new OAuthProvider('yahoo.com')
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
export const signInWithApple = async () => {
  const provider = new OAuthProvider('apple.com')
  try {
    const userCredential = await signInWithPopup(auth, provider)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}
