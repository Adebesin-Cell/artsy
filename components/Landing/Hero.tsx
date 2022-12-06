import { Box, Heading } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box pt="12">
      <Heading
        maxW="1070px"
        mx="auto"
        fontSize="80px"
        textAlign="center"
        fontFamily="Clash Display"
      >
        <Box>Photography is poetry &</Box>
        <Box>beautiful untold stories</Box>
      </Heading>
    </Box>
  )
}

export default Hero
