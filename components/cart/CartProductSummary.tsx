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

export type dispProps = {
  wid: string
  hei: string
}

function CartProductSummary(prop: dispProps) {
  const { wid, hei } = prop
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
          {CART_PRODUCT.length} items
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
          {CART_PRODUCT.reduce((acc, mov) => {
            console.log(mov.price)
            return acc + Number(mov.price)
          }, 0).toFixed(2)}
        </Text>
      </Box>
    </Flex>
  )
}

export default CartProductSummary
