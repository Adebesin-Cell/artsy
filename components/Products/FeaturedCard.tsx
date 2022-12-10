import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'

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
          <Box>
            <Heading
              fontFamily="'STIX Two Text', serif"
              fontWeight={700}
              color="#333333"
            >
              {title}
            </Heading>
            <Text fontFamily="Satoshi" mt="10" fontSize={{ base: '24px' }}>
              {description}
            </Text>
            <Flex alignItems="center" justifyContent="space-between" mt="6">
              <Flex alignItems="center">
                <AvatarGroup size="md" max={5} mr="4">
                  {creators.map(creator => (
                    <Avatar
                      key={creator.id}
                      name="Creator"
                      src={creator.image}
                    />
                  ))}
                </AvatarGroup>
                <Text>{totalCreators} major creators</Text>
              </Flex>
              <IconButton
                aria-label="Notifications"
                variant="unstyled"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="16"
                h="16"
                border="0.5px solid"
                borderColor="#333333"
                borderRadius="full"
              >
                <Icon as={RiArrowRightLine} w={10} h={6} />
              </IconButton>
            </Flex>
          </Box>
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
          <Box>
            <Heading
              fontFamily="'STIX Two Text', serif"
              fontWeight={700}
              color="#333333"
            >
              {title}
            </Heading>
            <Text fontFamily="Satoshi" mt="10" fontSize={{ base: '24px' }}>
              {description}
            </Text>
            <Flex alignItems="center" justifyContent="space-between" mt="6">
              <Flex alignItems="center">
                <AvatarGroup size="md" max={5} mr="4">
                  {creators.map(creator => (
                    <Avatar
                      key={creator.id}
                      name="Creator"
                      src={creator.image}
                    />
                  ))}
                </AvatarGroup>
                <Text>{totalCreators} major creators</Text>
              </Flex>
              <IconButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                aria-label="Notifications"
                variant="unstyled"
                w="16"
                h="16"
                border="0.5px solid"
                borderColor="#333333"
                borderRadius="full"
              >
                <Icon as={RiArrowRightLine} w={10} h={6} />
              </IconButton>
            </Flex>
          </Box>
        </SimpleGrid>
      )}
    </Flex>
  )
}

export default FeaturedCard
