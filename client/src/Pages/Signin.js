import React, { useEffect, useState } from 'react'
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
import { login } from '../redux/auth/auth.action';


export const SignIn = () => {
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
const {isAuth,message}=useSelector(store=>store.auth)
    const dispatch = useDispatch()
    const toast = useToast();

  

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
        }

    const handleSubmit=(e)=>{
        e.preventDefault()
//console.log(loginData)
      dispatch(login(loginData))
    
    };
    if(isAuth){
        navigate("/")
    }
  
    useEffect(()=>{
      if(message!=="user created"){
        if(message=="Invalid email or password"){
        toast({
          title: `Invalid email or password and you have 4 more attempts`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }else{
        if(message){
          toast({
            title: `${message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
      
    }

    },[message])
   
    


  return (
    <Box>
        <Flex
      
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
        
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
                Login
              </Button>
            </Stack>
            <Box d="flex" ><span>Don't have account ? </span><Link to="/signup">Signup</Link></Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Box>
  )
}