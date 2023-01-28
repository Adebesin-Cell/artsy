import React from 'react'
import { CART_PRODUCT } from 'data/cart'
import { useState, useEffect } from 'react'
import {
  Button,
  Box,
  SimpleGrid,
  Flex,
  Image,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react'
// import { MdOutlineCancel } from 'react-icons/ri'
import { BiX } from 'react-icons/bi'
// console.log(CART_PRODUCT)
// i use this to clear local storage

export type FeaturedProduct = {
  id: number
  image: string
  title: string
  price: string
  category: string
  description: string
  creators: { id: number; image: string }[]
  totalCreators: number
  placeImageRight?: boolean
}

function Addtocart() {
  const [cartProd, setcartProd] = useState<FeaturedProduct[] | null>(null)
  const [team, setteam] = useState()

  useEffect(() => {
    setcartProd(CART_PRODUCT)
  }, [])

  const removeData = () => {
    localStorage.removeItem('cartProducts')
  }

  return (
    <Box
      width="70%"
      //   height="100vh"
      //   border="1px solid grey"
      margin="auto"
      //   bg="tomato"
    >
      <Flex width="100%" h="1px">
        <Box width="37%" borderTop="1px solid grey"></Box>
        <Box width="50%"></Box>
      </Flex>
      <SimpleGrid
        // bg="green"
        width="100%"
        // h="10rem"
        // border="1px solid grey"
        spacing="5px"
        templateColumns="repeat(1, 1fr)"
        // marginLeft="2rem"
        gap="1rem"
      >
        {cartProd &&
          cartProd.map(cartItems => {
            return (
              <Flex key={cartItems.id} width="100%" height="15rem">
                <Box width="20%" padding="2rem">
                  <Image
                    height="10rem"
                    borderRadius="7px"
                    // src="../images/featured--1.png"
                    src={'.' + cartItems.image}
                    alt=""
                    margin=""
                    width="10rem"
                  />
                </Box>
                <Box width="30%" padding="2rem">
                  <Text mb={5}>{cartItems.title}</Text>

                  <Text>200 ft</Text>
                  <Flex paddingTop="2rem">
                    <Button bg="inherit">-</Button>
                    <Text fontWeight="bold" fontSize="1.5rem">
                      1
                    </Text>
                    <Button bg="inherit">+</Button>
                  </Flex>
                </Box>
                <Box
                  width="30%"
                  marginLeft="14rem"
                  textAlign="center"
                  paddingTop="3rem"
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
                    margin="auto"
                  >
                    <Icon as={BiX} w={12} h={12} />
                  </IconButton>

                  <Text marginTop="5rem" fontWeight="bold" fontSize="1.5rem">
                    {cartItems.price}
                  </Text>
                </Box>
              </Flex>
            )
          })}
      </SimpleGrid>
      <Button onClick={() => removeData()}>Clear data in Local Storage</Button>
    </Box>
  )
}

export default Addtocart
