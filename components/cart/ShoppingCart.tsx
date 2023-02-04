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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
// import { MdOutlineCancel } from 'react-icons/ri'
import { BiX } from 'react-icons/bi'
import style from '../../styles/Home.module.css'
import Link from 'next/link'

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

function ShoppingCart() {
  const [cartProd, setcartProd] = useState<FeaturedProduct[] | null>(null)
  const [team, setteam] = useState()

  useEffect(() => {
    setcartProd(CART_PRODUCT)
  }, [])

  const removeData = () => {
    localStorage.removeItem('cartProducts')
  }
  return (
    <Box mt="3rem">
      <Flex width="100%" h="1px" mb="2rem">
        <Box width="37%" borderTop="1px solid #D0D0D0"></Box>
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
                <Box width="30%" padding="2rem" textAlign="left">
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
                  //   border="1px solid grey"
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
        <Flex height="10rem" width="100%">
          <Box width="50%" margin="2rem">
            <Button
              className={style.addTocartbtn}
              height="5rem"
              width="90%"
              backgroundColor="#3457D5"
              color="white"
              borderRadius="0px"
              marginRight="2rem"

              //   onClick={() => addTocart(product.id)}
            >
              <Link href="/marketplace/addtocart/Tab2">
                Proceed to checkout
              </Link>
            </Button>
          </Box>
          <Flex height="100%" color="#989898" width="50%">
            <Box width="70%" height="100%">
              <Text
                textAlign="left"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                Product in cart:
              </Text>
              <Text
                textAlign="left"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                Shipping:
              </Text>
              <Text
                textAlign="left"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                Total:
              </Text>
            </Box>
            <Box width="30%" height="100%">
              <Text
                textAlign="right"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                {cartProd && cartProd.length} items
              </Text>
              <Text
                textAlign="right"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                $2.50
              </Text>
              <Text
                textAlign="right"
                marginTop="1rem"
                fontWeight="Normal"
                fontSize="1.2rem"
              >
                {cartProd &&
                  cartProd
                    .reduce((acc, mov) => {
                      console.log(mov.price)
                      return acc + Number(mov.price)
                    }, 0)
                    .toFixed(2)}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Button onClick={() => removeData()}>Clear data in Local Storage</Button>
    </Box>
  )
}

export default ShoppingCart
