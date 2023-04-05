import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
  } from '@chakra-ui/react'
import axios from 'axios'
export default function Travelbook() {
    const [data,setData]=useState([])

    const get=async()=>{
        let res=await axios.get("http://localhost:8080/travel/get")
        console.log(res.data)
        setData(res.data)
    }

    useEffect(()=>{
             get()
    },[])
  return (
    <Stack spacing={8} mx={'auto'}  py={20} px={40}>

<TableContainer>
  <Table variant='simple'>
    <TableCaption>List of All Travel Plans</TableCaption>
    <Thead>
      <Tr>
        <Th>Sr No.</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Destination</Th>
        <Th>No. of Travellers</Th>
        <Th>Budget per Head</Th>
        <Th>Total Cost</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data&& data.map((el,index)=>(
        <Tr>
            <Td>{index+1}</Td>
        <Td>{el.name}</Td>
        <Td>{el.email}</Td>
        <Td>{el.destination}</Td>
        <Td>{el.travellers}</Td>
        <Td>$ {el.budget}</Td>
        <Td>$ {el.travellers*el.budget}</Td>
      </Tr>
    ))}
      
    </Tbody>
  
  </Table>
</TableContainer>  

</Stack>
  )
}
