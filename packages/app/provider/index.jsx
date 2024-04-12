import { GluestackUI } from './gluestack-ui'
import { FirebaseProvider } from './firebase'; // adjust path as needed

export function Provider({ children }) {
  return (
    <>
      <FirebaseProvider>
        <GluestackUI>{children}</GluestackUI>
      </FirebaseProvider>
    </>
  )
}
