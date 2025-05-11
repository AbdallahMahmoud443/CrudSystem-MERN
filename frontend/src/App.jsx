import { Button } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CreateProductPage from "./pages/CreateProductPage"
import Navbar from './components/Navbar'
import { useColorModeValue } from '@chakra-ui/react'
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateProductPage />} />
      </Routes>
    </Box>
  )
}

export default App
