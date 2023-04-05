import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Text
} from "@chakra-ui/react"
import jwt_decode from "jwt-decode";
import {  useDispatch, useSelector } from 'react-redux'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { logout } from '../redux/auth/auth.action';


export default function Navbar() {
const {token}=useSelector(store=>store.auth)
const dispatch=useDispatch()
const handleClick=()=>{
dispatch(logout())
}

    return (
        <Box w="100%" bg={"#3182CE"} color="white" h="80px">
      <Flex
        w={"90%"}
        m="auto"
        alignItems={"center"}
        h="100%"
        justifyContent={"space-between"}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            T
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"orange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            R
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"green"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            A
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"blue"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            V
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"black"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            E
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"teal"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            L
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"darkviolet"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            O
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            P
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"orange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            I
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"green"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            A
          </Flex>
        
        </Flex>

        <Flex gap={5}>
        <Link to="/"><Text fontSize={18}>Create_Travel_plan</Text></Link>
        <Link to="/table"><Text fontSize={18}>See_All_Travel_plan</Text></Link>
        </Flex>

        <Flex gap={5} alignItems="center">
          
          <Text fontSize={"20"} textTransform="capitalize">
          {token&&jwt_decode(token)?(<><span> Welcome To Our Application </span>
          <Menu> <MenuButton><b>{jwt_decode(token).name}</b> <ChevronDownIcon /></MenuButton>
                 <MenuList> <MenuItem bg={'blue.400'} color={'white'} onClick={handleClick}>Logout</MenuItem></MenuList>
          </Menu></> ):" Welcome To Our Application "}
          </Text>
         
        </Flex>
      </Flex>
    </Box>
    )
}