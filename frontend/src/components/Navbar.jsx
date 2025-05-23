import { Container, Flex, HStack, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container
            maxW={'1140px'}
            px={4}
        >
            <Flex h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={
                    {
                        base: 'column',
                        sm: 'row'
                    }
                }>
                <Text
                    bgGradient='linear(to-r, cyan.400, blue.500)'
                    fontWeight={"bold"}
                    bgClip='text'
                    fontSize={{ base: "22", sm: "28" }}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                >
                    <Link to={'/'}> Product Store 🛒</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={'/create'}>
                        <Button>
                            <PlusSquareIcon />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <IoMoon /> : <LuSun />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar