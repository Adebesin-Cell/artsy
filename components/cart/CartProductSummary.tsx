import React, { useEffect, useState } from 'react'
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

export type dispProps = {
  wid: string
  hei: string
}
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

function CartProductSummary(prop: dispProps) {
  const [cartProd, setcartProd] = useState<FeaturedProduct[] | null>(null)
  const { wid, hei } = prop
  useEffect(() => {
    setcartProd(CART_PRODUCT)
  }, [])

  return (
    <Flex height={hei} color="#989898" width={wid}>
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
          $
          {cartProd
            ? cartProd
                .reduce((acc, mov) => {
                  // console.log(mov.price)
                  return acc + Number(mov.price) * 0.15
                }, 0)
                .toFixed(2)
            : 0}
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
                // console.log(mov.price)
                return acc + Number(mov.price)
              }, 0)
              .toFixed(2)}
        </Text>
      </Box>
    </Flex>
  )
}

export default CartProductSummary
