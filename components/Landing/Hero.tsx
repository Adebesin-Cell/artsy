import { Box, Heading, Text } from '@chakra-ui/react'

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
      <Text
        maxW="1070px"
        fontFamily="Satoshi"
        mx="auto"
        fontSize="28px"
        textAlign="center"
        mt="12"
      >
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </Text>
    </Box>
  )
}

export default Hero
