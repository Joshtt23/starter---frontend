import React, { useState } from 'react'
import {
  Center,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
  Toast,
  Box,
  CheckIcon,
  Checkbox,
  Icon,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  ButtonText,
  ButtonIcon,
  Image,
  Divider,
  ArrowLeftIcon,
  Heading,
  LinkText,
  InputSlot,
  Pressable,
} from '@gluestack-ui/themed'

import { Link } from 'solito/link'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Keyboard } from 'react-native'

import {
  AlertTriangle,
  AppleIcon,
  EyeIcon,
  EyeOffIcon,
  GithubIcon,
  TwitterIcon,
  GoogleIcon,
  FacebookIcon,
} from 'lucide-react-native'

import GuestLayout from '../../layouts/GuestLayout'

import { useRouter } from 'solito/router'

import {
  loginUser,
  signInWithApple,
  signInWithFacebook,
  signInWithGithub,
  signInWithGoogle,
  signInWithMicrosoft,
  signInWithTwitter,
  signInWithYahoo,
} from '../../provider/firebaseAuthServices'

const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  rememberme: z.boolean().optional(),
})

const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(signInSchema),
  })
  const [isEmailFocused, setIsEmailFocused] = useState(false)

  const router = useRouter()
  const toast = useToast()

  const onSubmit = async (_data) => {
    try {
      const user = await loginUser(
        _data.email,
        _data.password,
        _data.rememberme
      )
      console.log('User logged in successfully:', user)
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Signed in successfully</ToastTitle>
            </Toast>
          )
        },
      })
      reset()
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error.message)
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="error">
              <ToastTitle>Signed in Failed, please try again.</ToastTitle>
            </Toast>
          )
        },
      })
      reset()
    }
  }

  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  return (
    <>
      <VStack justifyContent="space-between">
        <FormControl
          isInvalid={(!!errors.email || isEmailFocused) && !!errors.email}
          isRequired={true}
        >
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signInSchema.parseAsync({ email: value })
                  return true
                } catch (error) {
                  return error.message
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Email"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} size="md" />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl my="$6" isInvalid={!!errors.password} isRequired={true}>
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signInSchema.parseAsync({
                    password: value,
                  })
                  return true
                } catch (error) {
                  return error.message
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                  type={showPassword ? 'text' : 'password'}
                />
                <InputSlot onPress={handleState} pr="$3">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} size="sm" />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>

          <FormControlHelper></FormControlHelper>
        </FormControl>
      </VStack>
      <Link href="/forgot-password">
        <LinkText fontSize="$xs" ml="auto">
          Forgot password?
        </LinkText>
      </Link>
      <Controller
        name="rememberme"
        defaultValue={false}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            my="$5"
            size="sm"
            value="Remember me"
            isChecked={value}
            onChange={onChange}
            alignSelf="flex-start"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me and keep me logged in</CheckboxLabel>
          </Checkbox>
        )}
      />
      <Button
        variant="solid"
        size="lg"
        mt="$5"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText fontSize="$sm"> SIGN IN</ButtonText>
      </Button>
    </>
  )
}

function SideContainerWeb() {
  return (
    <Center
      flex={1}
      bg="$primary500"
      sx={{
        _dark: { bg: '$primary500' },
      }}
    >
      <Link href="/">
        {/* TODO: Add your logo here */}
        <Image
          w="$80"
          h="$10"
          resizeMode="contain"
          source={require('./assets/images/logo.png')}
          alt="gluestack ui pro logo"
        />
      </Link>
    </Center>
  )
}

function MobileHeader() {
  return (
    <VStack px="$3" mt="$4.5" space="md">
      <HStack space="md" alignItems="center">
        <Pressable onPress={() => {}}>
          <Icon
            as={ArrowLeftIcon}
            color="$textLight50"
            sx={{ _dark: { color: '$textDark50' } }}
          />
        </Pressable>
        <Text
          color="$textLight50"
          sx={{ _dark: { color: '$textDark50' } }}
          fontSize="$lg"
        >
          Sign In
        </Text>
      </HStack>
      <VStack space="xs" ml="$1" my="$4">
        <Heading color="$textLight50" sx={{ _dark: { color: '$textDark50' } }}>
          Welcome back
        </Heading>
        <Text
          fontSize="$md"
          fontWeight="normal"
          color="$primary300"
          sx={{
            _dark: { color: '$textDark400' },
          }}
        >
          Sign in to continue
        </Text>
      </VStack>
    </VStack>
  )
}

const Main = () => {
  const socialSignIn = async (provider) => {
    switch (provider) {
      case 'facebook':
        console.log('Sign in with facebook')
        await signInWithFacebook()
        break
      case 'google':
        console.log('Sign in with google')
        await signInWithGoogle()
        break
      case 'github':
        console.log('Sign in with github')
        await signInWithGithub()
        break
      case 'twitter':
        console.log('Sign in with twitter')
        await signInWithTwitter()
        break
      case 'microsoft':
        console.log('Sign in with microsoft')
        await signInWithMicrosoft()
        break
      case 'yahoo':
        console.log('Sign in with yahoo')
        await signInWithYahoo()
        break
      case 'apple':
        console.log('Sign in with apple')
        await signInWithApple()
        break
      default:
        console.log('No provider selected')
    }
  }

  return (
    <>
      <Box sx={{ '@md': { display: 'none' } }}>
        <MobileHeader />
      </Box>
      <Box
        px="$4"
        sx={{
          '@md': {
            px: '$8',
            borderTopLeftRadius: '$none',
            borderTopRightRadius: '$none',
            borderBottomRightRadius: '$none',
          },
          _dark: { bg: '$backgroundDark800' },
        }}
        py="$8"
        flex={1}
        bg="$backgroundLight0"
        justifyContent="space-between"
        borderTopLeftRadius="$2xl"
        borderTopRightRadius="$2xl"
        borderBottomRightRadius="$none"
      >
        <Heading
          display="none"
          mb="$8"
          sx={{
            '@md': { display: 'flex', fontSize: '$2xl' },
          }}
        >
          Sign in to continue
        </Heading>
        <SignInForm />
        <HStack my="$4" space="md" alignItems="center" justifyContent="center">
          <Divider
            w="$2/6"
            bg="$backgroundLight200"
            sx={{ _dark: { bg: '$backgroundDark700' } }}
          />
          <Text
            fontWeight="$medium"
            color="$textLight400"
            sx={{ _dark: { color: '$textDark300' } }}
          >
            or
          </Text>
          <Divider
            w="$2/6"
            bg="$backgroundLight200"
            sx={{ _dark: { bg: '$backgroundDark700' } }}
          />
        </HStack>
        <HStack
          mt="$6"
          sx={{
            '@md': {
              mt: '$4',
            },
          }}
          mb="$9"
          justifyContent="center"
          alignItems="center"
          space="lg"
        >
          <Link href="#">
            <Button
              action="secondary"
              variant="link"
              onPress={() => {
                socialSignIn('facebook')
              }}
            >
              <ButtonIcon as={FacebookIcon} size="md" />
            </Button>
          </Link>
          <Link href="#">
            <Button
              action="secondary"
              variant="link"
              onPress={() => {
                socialSignIn('google')
              }}
            >
              <ButtonIcon as={GoogleIcon} size="md" />
            </Button>
          </Link>
          <Link href="#">
            <Button
              action="secondary"
              variant="link"
              onPress={() => {
                socialSignIn('github')
              }}
            >
              <ButtonIcon as={GithubIcon} size="md" />
            </Button>
          </Link>
          <Link href="#">
            <Button
              action="secondary"
              variant="link"
              onPress={() => {
                socialSignIn('twitter')
              }}
            >
              <ButtonIcon as={TwitterIcon} size="md" />
            </Button>
          </Link>
          {/* <Link href="#">
            <Button action="secondary" variant="link" onPress={() => {socialSignIn("microsoft")}}>
              <ButtonIcon as={MicrosoftIcon} size="md" />
            </Button>
          </Link>
          <Link href="#">
            <Button action="secondary" variant="link" onPress={() => {socialSignIn("yahoo")}}>
              <ButtonIcon as={YahooIcon} size="md" />
            </Button>
          </Link> */}
          <Link href="#">
            <Button
              action="secondary"
              variant="link"
              onPress={() => {
                socialSignIn('apple')
              }}
            >
              <ButtonIcon as={AppleIcon} size="md" />
            </Button>
          </Link>
        </HStack>
        <HStack
          space="xs"
          alignItems="center"
          justifyContent="center"
          mt="auto"
        >
          <Text
            color="$textLight500"
            fontSize="$sm"
            sx={{ _dark: { color: '$textDark400' } }}
          >
            Don't have an account?
          </Text>
          <Link href="/register">
            <LinkText fontSize="$sm">Sign up</LinkText>
          </Link>
        </HStack>
      </Box>
    </>
  )
}

export default function SignIn() {
  return (
    <GuestLayout>
      <Box display="none" sx={{ '@md': { display: 'flex' } }} flex={1}>
        <SideContainerWeb />
      </Box>

      <Box flex={1}>
        <Main />
      </Box>
    </GuestLayout>
  )
}
