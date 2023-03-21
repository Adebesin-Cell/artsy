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
} from '@chakra-ui/react'
import { BsHeart } from 'react-icons/bs'
import { RiHeart3Fill } from 'react-icons/ri'
import { AUCTION_ITEM } from 'data/AuctionProd'
import { RiArrowRightLine } from 'react-icons/ri'

typeof window !== 'undefined' && console.log(window.location)

function Auction() {
  const heartref1 = useRef<HTMLButtonElement>(null)
  const heartref2 = useRef<HTMLButtonElement>(null)
  const auctext = useRef<(HTMLDivElement | null)[]>([])
  const aucref = useRef<(HTMLDivElement | null)[]>([])
  auctext.current = []
  aucref.current = []
  // useEffect(() => {
  // const heartref = React.LegacyRef<SVGSVGElement>

  const addShowdarktheme = (el: HTMLDivElement) => {
    if (el && !aucref.current.includes(el)) {
      aucref.current.push(el)
    }
  }
  const addauctext = (el: HTMLDivElement) => {
    if (el && !auctext.current.includes(el)) {
      auctext.current.push(el)
    }
  }
  const doLike = (val: number) => {
    // useEffect(() => {
    console.log('hello')
    if (val === 1) {
      heartref1.current?.classList.toggle('addlike')
    }
    if (val === 2) {
      heartref2.current?.classList.toggle('addlike')
    }

    // console.log(heartref)
    // }, [])
  }
  const Showdarktheme = (i: number) => {
    aucref.current[i]?.classList.toggle('overlaydark')
    auctext.current[i]?.classList.toggle('hidden')
    // console.log(aucref.current)
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
            <BreadcrumbLink opacity="0.5" href="/auctions">
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
        {AUCTION_ITEM.map((aucitem, i) => (
          <Link href={'/auctions/' + aucitem.id}>
            {' '}
            <Box
              background="rgba(0, 0, 0, 0.7)"
              _hover={{
                transform: 'scaleX(0.8)scaleY(0.8)',
                transition: '0.4s',

                // bgImage: 'inherit',
              }}
              key={aucitem.id}
              height="20rem"
              minWidth="20rem"
              // border="1px solid grey"
              borderRadius="0.6rem"
              bgImage={aucitem.image}
              position="relative"
              textAlign="center"
              onMouseEnter={() => Showdarktheme(i)}
              onMouseLeave={() => Showdarktheme(i)}
            >
              <Box
                height="100%"
                width="100%"
                borderRadius="0.6rem"
                // background="rgba(0, 0, 0, 0.7)"
                // className="overlaydark"

                ref={addShowdarktheme}
              >
                {/* BBBBBBBBBBBB */}
                {/* <Image height="80%" src="./images/featured--1.png" alt="" /> */}
                <Flex
                  position="absolute"
                  top="20"
                  color="white"
                  // border="1px solid white"
                  gap={3}
                  right="0"
                  left="0"
                  justifyContent="center"
                  className="hidden"
                  ref={addauctext}
                >
                  <Text fontSize="1.7rem" marginTop="0.5rem">
                    Join livestream
                  </Text>
                  <IconButton
                    aria-label="Notifications"
                    variant="unstyled"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="16"
                    h="16"
                    border="0.5px solid"
                    // borderColor="#333333"
                    borderRadius="full"
                  >
                    <Icon as={RiArrowRightLine} w={10} h={6} />
                  </IconButton>
                </Flex>
                <Box
                  width="85%"
                  height="20%"
                  bgColor="white"
                  position="absolute"
                  bottom="8"
                  margin="auto"
                  right="0"
                  left="0"
                  borderBottom="1px solid white"
                  borderLeft="1px solid white"
                  // opacity="0.4"
                  borderRadius="5px"
                  // background="rgba(255,255,255,.5)"
                  background="rgba(255, 255, 255, 0.299)"
                >
                  <Text color="white">6hr: 40mins: 15s</Text>
                </Box>
              </Box>
            </Box>
          </Link>
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
              // className="addlike"
              ref={heartref2}
              onClick={() => doLike(2)}
            >
              <Icon
                color="red"
                as={RiHeart3Fill}
                w={8}
                h={8}

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
              ref={heartref1}
              onClick={() => doLike(1)}
            >
              <Icon
                color="red"
                as={RiHeart3Fill}
                w={8}
                h={8}

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
