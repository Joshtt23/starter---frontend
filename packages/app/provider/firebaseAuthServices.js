import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const loginUser = async (email, password) => {
  try {
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
export const updatePassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password)
  } catch (error) {
    throw new Error(error.message)
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