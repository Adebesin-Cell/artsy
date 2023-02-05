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
import style from '../../../styles/Home.module.css'
import Link from 'next/link'
import ShoppingCartCard from './ShoppingCartCard'
import CartProductSummary from '../CartProductSummary'

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
          cartProd.map(cartItems => (
            <ShoppingCartCard
              key={cartItems.id}
              image={cartItems.image}
              id={cartItems.id}
              title={cartItems.title}
              description={cartItems.description}
              price={cartItems.price}
            />
          ))}
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
          <CartProductSummary wid="50%" hei="100" />
        </Flex>
      </SimpleGrid>
      <Button onClick={() => removeData()}>Clear data in Local Storage</Button>
    </Box>
  )
}

export default ShoppingCart
