import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Signup } from '../redux/auth/auth.action';


export const Register = () => {
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
const {message}=useSelector(store=>store.auth)
    const dispatch = useDispatch()
    const toast = useToast();
 

  

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
        }

    const handleSubmit=(e)=>{
        e.preventDefault()
      dispatch(Signup(loginData))
    };
    if(message&&message=="user created"){
        navigate("/login")
    }else if(message&&message=="This email is already registered with us"){
      toast({
        title: `${message}`,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }


  return (
    <Box>
           
        <Flex
      
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Signup</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="username">
              <FormLabel>Name</FormLabel>
              <Input type="text" name='name'  onChange={handleChange}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email'  onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>

              </Stack>
              <Button
               onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                 
                }}>
                Signup
              </Button>
            </Stack>
            <Box d="flex" ><span>Already have account ? </span><Link to="/login">Login</Link></Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  )
}