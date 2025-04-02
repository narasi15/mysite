import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { px } from 'framer-motion'
import React, { useEffect } from 'react'
import { useProductStore } from '@/store/product'

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(() => {fetchProducts();}, [fetchProducts]);
  console.log("products", products);


  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
  
        <Text fontSize="30px" fontWeight="bold" color="blue.500" textAlign="center"> 
        Current Products </Text>

        <SimpleGrid
          columns={{
            base:1, 
            md: 2, 
            lg: 3
          }}
          spacing={10}
          w={"full"}>

        </SimpleGrid>




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
