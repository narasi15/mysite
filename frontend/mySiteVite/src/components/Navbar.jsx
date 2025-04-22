import { Container, Flex, HStack, Text, Button } from '@chakra-ui/react'
import { PlusSquareIcon } from "@chakra-ui/icons";
import {Link} from 'react-router-dom'
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { Tooltip } from "../components/ui/tooltip"


import React from 'react'
import { useColorMode } from './ui/color-mode';

const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode();

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
                 fontSize={{base:"50px", sm:"28px"}}
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
                    <Tooltip content="Create product">
                        <Button>
                            <PlusSquareIcon fontSize={20}/>
                        </Button>
                    </Tooltip>
                    </Link>

                    <Tooltip content="Theme">
                    <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                        
                    </Button>
                    </Tooltip>

                </HStack>

        </Flex>

    </Container>
  )
}

export default Navbar
