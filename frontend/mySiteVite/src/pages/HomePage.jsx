import { Container, VStack, Text } from '@chakra-ui/react'
import { px } from 'framer-motion'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
  
        <Text fontSize="30px" fontWeight="bold" color="blue.500" textAlign="center"> 
        Current Products </Text>


      </VStack>

    </Container>
  )
}

export default HomePage
