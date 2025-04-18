import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'
import { useColorMode, useColorModeValue } from './components/ui/color-mode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "blue.900")}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />

        </Routes>

      </Box>
        
    </>
  )
}

export default App
