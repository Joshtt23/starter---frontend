import React from 'react'
import { Toast, ToastTitle, useToast } from '@gluestack-ui/themed'
import { logoutUser } from '../../../../packages/app/provider/firebaseAuthServices'
import { useRouter } from 'solito/router'

function dashboard() {
  const toast = useToast()
  const router = useRouter()

  const signOut = async () => {
    try {
      await logoutUser()
      console.log('successfully logout')
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Logout successful, redirecting.</ToastTitle>
            </Toast>
          )
        },
      })
      router.push('/')
    } catch (error) {
      console.error(error)
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="error">
              <ToastTitle>Logout failed, please try again.</ToastTitle>
            </Toast>
          )
        },
      })
    }
  }
  return (
    <>
      <div>dashboard</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  )
}

export default dashboard
