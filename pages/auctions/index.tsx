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
} from '@chakra-ui/react'
import { BsHeart } from 'react-icons/bs'
import { RiHeart3Fill } from 'react-icons/ri'
import { AUCTION_ITEM } from 'data/AuctionProd'

typeof window !== 'undefined' && console.log(window.location)

function Auction() {
  const heartref = useRef<SVGSVGElement>(null)
  // useEffect(() => {
  // const heartref = React.LegacyRef<SVGSVGElement>

  const doLike = () => {
    // useEffect(() => {
    //   console.log('hello')
    //   heartref.current?.classList.toggle('addlike')
    //   console.log(heartref)
    // }, [])
  }

  return (
    <Box
      // border="1px solid grey"
      width="70rem"
      margin="auto"
      padding="4rem"
    >
      <Box
        height="5rem"
        width="100%"
        // border="1px solid grey"
        marginBottom="0.5rem"
        padding="0rem 2rem 2rem 0rem"
      >
        <Breadcrumb fontSize="1.1rem" fontWeight="Bold">
          <BreadcrumbItem>
            <BreadcrumbLink opacity="0.5" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/auctions">Auctions</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Text
        // marginLeft="1rem"
        fontSize="1.1rem"
        fontWeight="Bold"
        // marginTop="6rem"
      >
        Here&apos;s an overview of product actively on auction, explore!
      </Text>
      <Flex
        // mt="20"
        gap="3rem"
        // overflowX="hidden"
        // border="1px solid grey"
        // margin="4rem"
        w="57rem"
        paddingTop="3rem"
      >
        {AUCTION_ITEM.map(aucitem => (
          <Box
            _hover={{
              transform: 'scaleX(0.8)scaleY(0.8)',
              transition: '0.4s',
            }}
            key={aucitem.id}
            height="20rem"
            minWidth="20rem"
            // border="1px solid grey"
            borderRadius="0.6rem"
            bgImage={aucitem.image}
          >
            {/* BBBBBBBBBBBB */}
            {/* <Image height="80%" src="./images/featured--1.png" alt="" /> */}
          </Box>
        ))}
      </Flex>
      <Text
        // marginLeft="1rem"
        fontSize="1.5rem"
        fontWeight="bold"
        marginTop="6rem"
      >
        Top bids from popular creator
      </Text>
      <Flex
        gap="9rem"
        // margin="4rem 4rem 12rem 4rem"
        marginTop="3rem"
      >
        <Box
          height="42rem"
          width="30rem"
          // border="1px solid grey"
          position="relative"
        >
          <Box
            height="20rem"
            // border="1px solid grey"
            borderRadius="0.4rem"
            boxShadow="rgba(196, 186, 186, 0.35) 0.2px 2px 12px 2px"
          >
            <IconButton
              display="flex"
              alignItems="center"
              justifyContent="center"
              aria-label="Notifications"
              variant="unstyled"
              w="12"
              h="12"
              border="0.5px solid"
              borderColor="#333333"
              borderRadius="full"
              margin="0.3rem 1rem 0.3rem 0.3rem"
              // transform="scaleY(0.7)scaleX(0.7)"
              // margin="auto"
              float="right"
              onClick={() => doLike()}
            >
              <Icon
                color="red"
                as={RiHeart3Fill}
                w={8}
                h={8}
                ref={heartref}
                // className="addlike"
              />
            </IconButton>
            <Image
              height="60%"
              width="100%"
              src="./images/auction_img/out_box.PNG"
              alt=""
            />
            <Text marginLeft="1rem" fontSize="1.5rem" fontWeight="bold">
              Out of the box
            </Text>
          </Box>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Creator:
          </Text>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Date:
          </Text>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Highest bid:
          </Text>
          <Box
            height="8rem"
            width="100%"
            // border="1px solid grey"
            marginTop="1rem"
            position="absolute"
            bottom="0px"
            borderRadius="0.4rem"
            backgroundColor="#F5F5F5"
          >
            <Flex padding="1rem">
              <Box width="50%">
                <Text>current bid</Text>
                <Text>20 naira</Text>
              </Box>
              <Box width="50%">button</Box>
            </Flex>
          </Box>
        </Box>
        <Box
          height="42rem"
          width="30rem"
          // border="1px solid grey"
          position="relative"
        >
          <Box
            height="20rem"
            // border="1px solid grey"
            borderRadius="0.4rem"
            boxShadow="rgba(196, 186, 186, 0.35) 0.2px 2px 12px 2px"
          >
            <IconButton
              display="flex"
              alignItems="center"
              justifyContent="center"
              aria-label="Notifications"
              variant="unstyled"
              w="12"
              h="12"
              border="0.5px solid"
              borderColor="#333333"
              borderRadius="full"
              margin="0.3rem 1rem 0.3rem 0.3rem"
              // transform="scaleY(0.7)scaleX(0.7)"
              // margin="auto"
              float="right"
              onClick={() => doLike()}
            >
              <Icon
                color="red"
                as={RiHeart3Fill}
                w={8}
                h={8}
                ref={heartref}
                // className="addlike"
              />
            </IconButton>
            <Image
              height="60%"
              width="100%"
              src="./images/auction_img/fall_apart.PNG"
              alt=""
            />
            <Text marginLeft="1rem" fontSize="1.5rem" fontWeight="bold">
              Falling Appart
            </Text>
          </Box>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Creator:
          </Text>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Date:
          </Text>
          <Text
            marginTop="2rem"
            fontSize="1.4rem"
            fontWeight="Normal"
            color="grey"
          >
            Highest bid:
          </Text>
          <Box
            height="8rem"
            width="100%"
            // border="1px solid grey"
            marginTop="1rem"
            position="absolute"
            bottom="0px"
            backgroundColor="#F5F5F5"
            borderRadius="0.4rem"
          >
            <Flex padding="1rem">
              <Box width="50%">
                <Text>current bid</Text>
                <Text>20 naira</Text>
              </Box>
              <Box width="50%">button</Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Auction
