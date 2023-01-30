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
import ShoppingCart from 'components/cart/ShoppingCart'
import ShippingDetails from 'components/cart/ShippingDetails'
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
  return (
    <Box
      width="70%"
      //   height="100vh"
      //   border="1px solid grey"
      margin="auto"
      //   bg="tomato"
    >
      <Tabs isFitted align="center" mt="3rem" isLazy>
        <TabList width="40rem">
          <Tab>Shopping Cart</Tab>
          <Tab>Shipping Details</Tab>
          <Tab>Payment Details</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <ShoppingCart />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <ShippingDetails />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Addtocart
