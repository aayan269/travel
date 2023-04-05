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
    Select,
  } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'


export default function Home() {
const [formdata,setFormdata]=useState({})
const toast = useToast();


const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata({...formdata,[name]:value})
    }


    
    const handleSubmit=async(e)=>{
        e.preventDefault()
console.log(formdata)
  try{
let res=await axios.post("http://localhost:8080/travel/create",formdata)
console.log(res.data)
if(res.data=="Travel plan created"){
    toast({
        title: `Travel plan created`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
}
  }
  catch(e){
    console.log(e)
  }
    
    };


  return (
    <Box>
    <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'}>Create Travel Plan</Heading>
    </Stack>
    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" name='name' placeholder="Enter Name" onChange={handleChange}/>
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="text" name='email' placeholder="Enter Email" onChange={handleChange} />
        </FormControl>
        <FormControl id="destination">
          <FormLabel>Destination</FormLabel>
          <Select variant='filled' name="destination" placeholder='Choose Destination' onChange={handleChange}>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </Select> 
       </FormControl>
       <Flex gap={4}>
       <FormControl id="travellers">
          <FormLabel>Travellers</FormLabel>
          <Input type="number" name='travellers' placeholder="No. of Travellers" onChange={handleChange} />
        </FormControl>
        <FormControl id="budget">
          <FormLabel>Budget ($)</FormLabel>
          <Input type="number" name='budget' placeholder="Budget per Head ($)" onChange={handleChange} />
        </FormControl>
       </Flex>
        <Stack spacing={10}>
          <Button onClick={handleSubmit}  bg={'blue.400'}  color={'white'}  _hover={{bg: 'blue.500'}}>Create Plan</Button>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Flex>
</Box>
  )
}
