import React from 'react'
import { CART_PRODUCT } from 'data/cart'
import {
  Button,
  Box,
  SimpleGrid,
  Flex,
  Image,
  Text,
  Icon,
  IconButton,
  Select,
  Input,
  Link,
  Checkbox,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'

import ShippingDetailsCard from './ShippingDetailsCard'
import ShippingDetailsForm from './ShippingDetailsForm'
import CartProductSummary from '../CartProductSummary'

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

function ShippingDetails() {
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
        <Box width="61%"></Box>
        <Box width="34%" borderTop="1px solid #D0D0D0"></Box>
      </Flex>

      <Flex width="100%">
        <ShippingDetailsForm />

        <SimpleGrid
          // bg="green"
          width="40%"
          // h="10rem"
          //   border="1px solid grey"
          spacing="5px"
          templateColumns="repeat(1, 1fr)"
          // marginLeft="2rem"
          gap="1rem"
        >
          {cartProd &&
            cartProd.map(cartItems => (
              <ShippingDetailsCard
                key={cartItems.id}
                image={cartItems.image}
                id={cartItems.id}
                title={cartItems.title}
                description={cartItems.description}
                price={cartItems.price}
              />
            ))}
          <Box height="10rem" width="100%">
            <CartProductSummary hei="100%" wid={''} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default ShippingDetails
