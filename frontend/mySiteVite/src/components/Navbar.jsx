import { Container, Flex, HStack, Text, Link, Button } from '@chakra-ui/react'
import { PlusSquareIcon } from "@chakra-ui/icons";


import React from 'react'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems = {"center"}
            justifyContent={"space-between"}
            flexDir = {{
                base:"column", 
                sm:"row"
            }}>
                <Text
                 fontSize={{base:"22", sm:"28"}}
                 fontWeight={"bold"}
                 textTransform={"uppercase"}
                 textAlign={"center"}
                 bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
                 bgClip={"text"}
                 >
                    <Link to={"/"}>Product Store 🛒</Link>

                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20}/>
                        </Button>
                    </Link>

                </HStack>

        </Flex>

    </Container>
  )
}

export default Navbar
