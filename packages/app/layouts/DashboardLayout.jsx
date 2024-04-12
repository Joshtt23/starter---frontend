import React, { useState } from 'react'
import {
  Box,
  Pressable,
  Icon,
  VStack,
  Text,
} from '@gluestack-ui/themed'
import { MenuIcon, CloseIcon } from 'lucide-react-native' // Adjust icon imports as needed
import ProfileDropdown from '../components/ProfileDropdown'

const DashboardLayout = ({ setActiveTab, children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  return (
    <Box position="relative">
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bg="blue.500"
        zIndex="sticky"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="4"
      >
        <Box display="flex" alignItems="center">
          <Pressable onPress={toggleDrawer}>
            <Icon
              as={isDrawerOpen ? CloseIcon : MenuIcon}
              color="red"
              size="24px"
            />
          </Pressable>
          <Text fontSize="lg" fontWeight="bold" ml="4" color="white">
            My Dashboard
          </Text>
        </Box>
        <ProfileDropdown setActiveTab={setActiveTab} />
      </Box>
      {/* Custom Drawer */}
      <Box
        position="absolute"
        left={isDrawerOpen ? '0' : '-100%'}
        top="0"
        bottom="0"
        width="250px"
        transition="left 0.3s"
        bg="gray.100"
        zIndex="drawer"
      >
        <VStack p="4" space="md">
          <Pressable
            onPress={() => {
              setActiveTab('home')
              toggleDrawer()
            }}
          >
            <Text>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setActiveTab('profile')
              toggleDrawer()
            }}
          >
            <Text>Profile</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setActiveTab('settings')
              toggleDrawer()
            }}
          >
            <Text>Settings</Text>
          </Pressable>
        </VStack>
      </Box>
      <Box mt="60px">{children}</Box>
    </Box>
  )
}

export default DashboardLayout
