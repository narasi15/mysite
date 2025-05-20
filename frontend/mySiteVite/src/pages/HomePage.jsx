import { Container, VStack, Text, SimpleGrid, HStack, Select} from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { px } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useProductStore } from '../store/product.js'
import ProductCard from "../components/ProductCard.jsx";
import { ButtonGroup, IconButton, Pagination, Button } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"


const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(() => {fetchProducts();}, [fetchProducts]);
  //console.log("products", products);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6); // You can allow user to change this

  const totalPages = Math.ceil(products.length / recordsPerPage);

  // Paginated products
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentProducts = products.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


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
          gap={10}
          w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}

        </SimpleGrid>
        
        {products.length === 0 && (
        <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No products found 🙁{""}
          <Link to={"/create"}>
            <Text as={'span'} color={'blue.500'} _hover={{textDecoration: "underline"}}>
              Create a product

            </Text>
          </Link>

        </Text>)}




        <Pagination.Root count={20} pageSize={2} defaultPage={1}>
            <ButtonGroup variant="ghost" size="sm">
                <Pagination.PrevTrigger asChild>
                <IconButton>
                    <LuChevronLeft />
                </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                    {page.value}
                    </IconButton>
                )}
                />

                <Pagination.NextTrigger asChild>
                <IconButton>
                    <LuChevronRight />
                </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>


      </VStack>

    </Container>
  )
}

export default HomePage
