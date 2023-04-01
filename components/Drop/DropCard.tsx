import React from 'react'
import {
  Image,
  Box,
  Flex,
  IconButton,
  Icon,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Link,
  Button,
  Heading,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react'

import { dropItem } from 'data/DropItem'

function DropCard(props: dropItem) {
  const {
    id,
    image,
    badgetext,
    dropdate,
    title,
    description,
    creatorname,
    lastlinktext,
  } = props
  return (
    <SimpleGrid
      templateColumns="repeat(2, 1fr)"
      gap="10"
      height="20.5rem"
      mb="5rem"
    >
      <Box>
        <Image height="100%" borderRadius="10px" src={image} alt={'title'} />
      </Box>
      <Box>
        {badgetext === 'UPCOMING' && (
          <Badge
            variant="solid"
            colorScheme="blue"
            height="1.8rem"
            width="9rem"
            textAlign="center"
            borderRadius="5px"
          >
            <Text mt="0.2rem" fontSize="1rem" fontWeight="normal">
              {badgetext}
            </Text>
          </Badge>
        )}
        {badgetext === 'LIVE NoW' && (
          <Badge
            variant="solid"
            colorScheme="green"
            height="1.8rem"
            width="9rem"
            textAlign="center"
            borderRadius="5px"
          >
            <Text mt="0.2rem" fontSize="1rem" fontWeight="normal">
              {badgetext}
            </Text>
          </Badge>
        )}
        {badgetext === 'ENDED' && (
          <Badge
            variant="solid"
            colorScheme="gray"
            height="1.8rem"
            width="9rem"
            textAlign="center"
            borderRadius="5px"
          >
            <Text mt="0.2rem" fontSize="1rem" fontWeight="normal">
              {badgetext}
            </Text>
          </Badge>
        )}

        <Text mt="1.3rem">{dropdate}</Text>
        <Text mt="1.3rem" fontSize="2rem" fontWeight="semibold">
          {title}
        </Text>
        <Text mt="1.3rem" fontSize="1rem" fontWeight="thin">
          {description}
        </Text>
        <Text mt="1.3rem" fontSize="1.2rem" fontWeight="semibold">
          Creator:{creatorname}
        </Text>
        <Text mt="1.3rem" fontSize="1rem" fontWeight="normal">
          <Link color="blue">{lastlinktext}</Link>
        </Text>
      </Box>
    </SimpleGrid>
  )
}

export default DropCard
