import React from 'react'
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
import { BiX } from 'react-icons/bi'
import { CART_PRODUCT } from 'data/cart'

export type Shoppingcart = {
  id: number
  image: string
  title: string
  price: string
  description: string
}

function ShoppingCartCard(props: Shoppingcart) {
  const { id, image, title, description, price } = props

  const delCartItem = (id: number) => {
    console.log('id ' + id)
    const ind = CART_PRODUCT.findIndex(el => el.id === id)
    console.log('index ' + ind)
    CART_PRODUCT.splice(ind, 1)
    console.log(CART_PRODUCT)
    // console.log(new_CartProd)
    localStorage.setItem('cartProducts', JSON.stringify(CART_PRODUCT))
    window.location.href = '/marketplace/addtocart'
  }
  return (
    <Flex key={id} width="100%" height="15rem">
      <Box width="20%" padding="2rem">
        <Image
          height="10rem"
          borderRadius="7px"
          // src="../images/featured--1.png"
          src={'.' + image}
          alt=""
          margin=""
          width="10rem"
        />
      </Box>
      <Box width="30%" padding="2rem" textAlign="left">
        <Text mb={5}>{title}</Text>

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
        // paddingTop="3rem"
        // border="1px solid grey"
        // justifyContent="right"
        paddingTop="2rem"
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
          transform="scaleY(0.7)scaleX(0.7)"
          // margin="auto"
          float="right"
          onClick={() => delCartItem(id)}
        >
          <Icon as={BiX} w={12} h={12} />
        </IconButton>

        <Text
          marginTop="8rem"
          fontWeight="Normal"
          fontSize="1.5rem"
          fontFamily="Serif"
          // float="right"
          // bg="green"
          textAlign="right"
        >
          ${price}
        </Text>
      </Box>
    </Flex>
  )
}

export default ShoppingCartCard
