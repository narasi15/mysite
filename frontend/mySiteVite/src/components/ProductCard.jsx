import React from 'react'
import { Box, HStack, Heading, Text, Button, Image } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from './ui/color-mode'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")

  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform: "translateY(-5px)", shadow: "xl"}}
    bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack spacing={5}>
                <Button>
                    <EditIcon boxSize={5} />
                </Button>

                <Button>
                    <DeleteIcon boxSize={5} />
                </Button>
                    

                
            </HStack>


        </Box>

    </Box>
    
  )
}

export default ProductCard
