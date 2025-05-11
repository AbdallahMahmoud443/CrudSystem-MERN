import { Box, Button, Container, Heading, Input, StepDescription, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreateProductPage = () => {
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        image: ""
    });

    const productSubmitHandler = () => {
        console.log(productData);
    }
    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"}
                    size={"2xl"}
                    textAlign={"center"}
                    mb={8}>
                    Create New Product
                </Heading>
                <Box w={"full"}
                    bg={useColorModeValue('white', 'gray.800')}
                    p={8}
                    rounded={"md"}>
                    <VStack spacing={4}>
                        <Input placeholder="Product Name"
                            name="name"
                            value={productData.name}
                            onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
                        <Input placeholder="Product Price"
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                        <Input placeholder="Product Image URL"
                            name="image"
                            value={productData.image}
                            onChange={(e) => setProductData({ ...productData, image: e.target.value })} />
                        <Button colorScheme="blue" w={"full"} onClick={productSubmitHandler}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}

export default CreateProductPage;