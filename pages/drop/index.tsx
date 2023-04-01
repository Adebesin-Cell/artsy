import React, { useRef, useEffect } from 'react'
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
import { BsHeart } from 'react-icons/bs'
import { RiHeart3Fill } from 'react-icons/ri'
import { AUCTION_ITEM } from 'data/AuctionProd'
import { RiArrowRightLine } from 'react-icons/ri'
import Livebid from 'components/Auction/Livebid'
import { DROP_DATA } from 'data/DropItem'
import DropCard from 'components/Drop/DropCard'

typeof window !== 'undefined' && console.log(window.location)

function Drop() {
  return (
    <Box width="70rem" margin="auto" padding="4rem">
      <Box
        height="5rem"
        width="100%"
        // border="1px solid grey"
        marginBottom="0.5rem"
        padding="0rem 2rem 2rem 0rem"
      >
        <Breadcrumb fontSize="1.1rem" fontWeight="Bold">
          <BreadcrumbItem>
            <BreadcrumbLink opacity="0.5" href="/home">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink opacity="0.5" href="/auctions">
              Auction
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink opacity="0.5" href="/auctions">
              Livebid
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/drop">Drop</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box
        // border="1px solid grey"
        height="16rem"
        textAlign="center"
      >
        <Text fontSize="2.5rem" fontWeight="semibold" mb="2rem">
          Upcoming drops
        </Text>
        <Text fontSize="1.5rem" mb="1.9rem">
          Turn on notification so that no drop will miss you
        </Text>
        <Button border="1px solid black" width="15rem" height="3rem">
          Notify Me
        </Button>
      </Box>
      <Box mt="1rem" gap="10">
        {DROP_DATA.map(dropitem => (
          <DropCard
            key={dropitem.id}
            id={dropitem.id}
            image={dropitem.image}
            badgetext={dropitem.badgetext}
            dropdate={dropitem.dropdate}
            title={dropitem.title}
            description={dropitem.description}
            creatorname={dropitem.creatorname}
            lastlinktext={dropitem.lastlinktext}
          />
        ))}
      </Box>
      <Button
        border="1px solid black"
        width="15rem"
        height="3rem"
        alignItems="center"
      >
        See more
      </Button>
    </Box>
  )
}

export default Drop
