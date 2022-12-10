import React from 'react'
import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'

export type FeaturedCardProps = {
  id: number
  image: string
  title: string
  description: string
  creators: { id: number; image: string }[]
  totalCreators: number
  placeImageRight?: boolean
}

const FeaturedCard = (props: FeaturedCardProps) => {
  const {
    image,
    title,
    description,
    totalCreators,
    placeImageRight,
    creators,
  } = props

  return (
    <Flex borderTop="1px solid" borderColor="#333333" pt="14">
      {placeImageRight && (
        <SimpleGrid templateColumns="repeat(2, 1fr)" gap="10">
          <Box></Box>
          <Box>
            <Image src={image} alt={title} />
          </Box>
        </SimpleGrid>
      )}
      {!placeImageRight && (
        <SimpleGrid templateColumns="repeat(2, 1fr)" gap="10">
          <Box>
            <Image src={image} alt={title} />
          </Box>
          <Box></Box>
        </SimpleGrid>
      )}
    </Flex>
  )
}

export default FeaturedCard
