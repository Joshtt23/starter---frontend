import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './gluestack-ui.config'

export function GluestackUI({ children }) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
}
