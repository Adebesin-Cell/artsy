import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

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
    <Flex borderTop="1px solid" borderColor="#333333">
      {placeImageRight && (
        <Flex>
          <Box></Box>
          <Box>
            <Image src={image} alt={title} />
          </Box>
        </Flex>
      )}
      {!placeImageRight && (
        <Flex>
          <Box>
            <Image src={image} alt={title} />
          </Box>
          <Box></Box>
        </Flex>
      )}
    </Flex>
  )
}

export default FeaturedCard
