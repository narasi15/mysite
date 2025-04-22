import React, { useState } from 'react'
import { Box, HStack, Heading, Text, Button, Image, VStack, Input, useDisclosure, Container} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "../components/ui/toaster"
import { Dialog, Portal, CloseButton} from "@chakra-ui/react"

  

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [setIsOpen] = useState(false);

    const [updatedProduct, setUpdatedProduct] = useState(product);


    const {deleteProduct, updateProduct} = useProductStore()
    
     const handleDeleteProduct = async (pid) => {
        console.log("pid:", pid)
        const {success,message} = await deleteProduct(pid)
        toaster.create({
            title: success,
            description: message,
          })
     }

     const handleUpdateProduct = async (pid, updatedProduct) => {
        await updateProduct(pid, updatedProduct)
        setIsOpen(false);
     }



  return (
<>
<Container maxW={"container.sm"}>
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform: "translateY(-5px)", shadow: "xl"}}
    bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='contain' />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack spacing={5}>


            <Dialog.Root>
                <Dialog.Trigger asChild>
                <Button colorScheme="blue">
                    <EditIcon boxSize={5} onClick={onOpen}/>
                </Button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                        <Dialog.Title>Update Product</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                        <p>
                        Edit the product details—name, image, or price—below.
                        </p>
                        <br/>
                        <Input placeholder='Product Name' name='name' value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}></Input>

                        <Input placeholder='Price' name='price' type='number' value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}></Input>

                        <Input placeholder='Image URL' name='image' value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}></Input>

                        </Dialog.Body>
                        <Dialog.Footer>
                        <Dialog.ActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </Dialog.ActionTrigger>
                        <Dialog.ActionTrigger asChild>
                            <Button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                        </Dialog.ActionTrigger>
                            
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                        <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>












            
            

                <Button>
                    <DeleteIcon colorScheme="red" onClick={() => handleDeleteProduct(product._id)} />
                </Button>

                
            </HStack>


        </Box>
        

        </Box>
        <Toaster toastOptions={{ position: "bottom-center" }} />
        </Container>
 </>
        
    
  )
}

export default ProductCard