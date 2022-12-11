import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

const Events = () => {
  return (
    <Box
      mt="32"
      as="section"
      minH="300px"
      bgGradient="linear(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)"
      py="7"
    >
      <Box
        mx="auto"
        px={{ base: 3, lg: 10 }}
        maxW={{ base: 'full', xl: '1280px' }}
      >
        <Heading fontFamily="Satoshi" color="white" fontWeight={500}>
          See Upcoming Auctions and Exhibitions
        </Heading>
      </Box>
    </Box>
  )
}

export default Events
