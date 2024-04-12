import React from 'react'
import { Center, Spinner, Text } from '@gluestack-ui/themed'

const LoadingScreen = () => {
  return (
    <Center flex={1} justifyContent="center" alignItems="center">
      <Spinner size="sm" />
      <Text fontSize="$md" mt="$10">
        Loading...
      </Text>
    </Center>
  )
}

export default LoadingScreen
