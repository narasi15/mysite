import { Container, VStack, Text } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { px } from 'framer-motion'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
  
        <Text fontSize="30px" fontWeight="bold" color="blue.500" textAlign="center"> 
        Current Products </Text>

        <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No products found 🙁{""}
          <Link to={"/create"}>
            <Text as={'span'} color={'blue.500'} _hover={{textDecoration: "underline"}}>
              Create a product

            </Text>
          </Link>

        </Text>


      </VStack>

    </Container>
  )
}

export default HomePage
