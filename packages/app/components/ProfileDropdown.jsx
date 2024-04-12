import Link from 'next/link'
import React, { useState } from 'react'
import { useFirebase } from '../provider/firebase'
import { Box, VStack, Pressable, Text, Icon } from '@gluestack-ui/themed'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native'
import { logoutUser } from '../provider/firebaseAuthServices'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useFirebase()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const logout = async () => {
    await logoutUser()
  }

  return (
    <Box position="relative" alignItems="center" cursor="pointer">
      <Pressable onPress={toggleDropdown}>
        <VStack alignItems="center" space="xs">
          <Box
            borderRadius="full"
            overflow="hidden"
            bg="gray.300"
            w="40px"
            h="40px"
          >
            <Text fontSize="xs" textAlign="center">
              {user?.email[0].toUpperCase()}
            </Text>
          </Box>
          <Text fontSize="sm">
            {user ? user.displayName || user.email : 'Guest'}
          </Text>
          <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} />
        </VStack>
      </Pressable>

      {isOpen && (
        <Box
          position="absolute"
          top="full"
          mt="2"
          p="2"
          bg="white"
          boxShadow="md"
          borderRadius="md"
          zIndex="dropdown"
        >
          <VStack space="md">
            <Link
              href="/dashboard?tab=dashboard"
              passHref
              onClick={() => setIsOpen(false)}
            >
              <Text as="a" fontSize="sm">
                Dashboard
              </Text>
            </Link>
            <Link
              href="/dashboard?tab=profile"
              passHref
              onClick={() => setIsOpen(false)}
            >
              <Text as="a" fontSize="sm">
                Profile
              </Text>
            </Link>
            <Link
              href="/dashboard?tab=subscription"
              passHref
              onClick={() => setIsOpen(false)}
            >
              <Text as="a" fontSize="sm">
                Subscription
              </Text>
            </Link>
            <Link
              href="/dashboard?tab=settings"
              passHref
              onClick={() => setIsOpen(false)}
            >
              <Text as="a" fontSize="sm">
                Settings
              </Text>
            </Link>
            <Link href="/" passHref onClick={() => logout(false)}>
              <Text as="a" fontSize="sm">
                Logout
              </Text>
            </Link>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default ProfileDropdown
