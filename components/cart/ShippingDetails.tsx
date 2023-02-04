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
import style from '../../styles/Home.module.css'

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
        <Box width="60%">
          <Box
            width="85%"
            height="100%"
            // border="1px solid grey"
            color="#989898"
            textAlign="left"
            fontWeight="Normal"
            fontSize="1.2rem"
          >
            <Text mb="1rem">Your Email</Text>
            <Input
              placeholder="okoliemmanuel47@gmail.com"
              height="4rem"
              bg="#F0F0F0"
              border="1px solid #303030"
            />
            <Checkbox defaultChecked marginTop="0.5rem">
              Get updates about new drops and exclusive offers
            </Checkbox>
            <Text marginTop="2.5rem" mb="1rem">
              Your Full Name
            </Text>
            <Input
              placeholder="Emmanuel"
              height="4rem"
              bg="#F0F0F0"
              border="1px solid #303030"
            />
            <Text marginTop="2.5rem" mb="1rem">
              Choose a wallet
            </Text>
            <Select
              placeholder="Select option"
              width="100%"
              height="4rem"
              bg="#F0F0F0"
              border="1px solid #303030"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Text marginTop="2.5rem" mb="1rem">
              City
            </Text>
            <Select
              placeholder="Select option"
              width="100%"
              height="4rem"
              bg="#F0F0F0"
              border="1px solid #303030"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Flex>
              <Box width="50%" marginRight="0.5rem">
                <Text marginTop="2.5rem" mb="1rem">
                  Country
                </Text>
                <Select
                  placeholder="Select option"
                  width="100%"
                  height="4rem"
                  bg="#F0F0F0"
                  border="1px solid #303030"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box width="50%" marginLeft="0.5rem">
                <Text marginTop="2.5rem" mb="1rem">
                  Postal code
                </Text>
                <Input
                  placeholder="00989876"
                  height="4rem"
                  bg="#F0F0F0"
                  border="1px solid #303030"
                />
              </Box>
            </Flex>
            <Text marginTop="2.5rem" mb="1rem">
              Phone Number
            </Text>
            <Input
              placeholder="07045677654"
              height="4rem"
              bg="#F0F0F0"
              border="1px solid #303030"
            />
            <Button
              className={style.addTocartbtn}
              height="5rem"
              width="100%"
              backgroundColor="#3457D5"
              color="white"
              borderRadius="0px"
              marginTop="3rem"

              //   onClick={() => addTocart(product.id)}
            >
              <Link href="/marketplace/addtocart/Tab2">Proceed to payment</Link>
            </Button>
          </Box>
        </Box>
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
            cartProd.map(cartItems => {
              return (
                <Flex
                  key={cartItems.id}
                  width="100%"
                  height="15rem"
                  borderBottom="1px solid #D0D0D0"
                >
                  <Box width="30%" paddingTop="2.5rem">
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
                    // marginLeft="14rem"
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
          <Box height="10rem" width="100%">
            <Flex height="100%" color="#989898">
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
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default ShippingDetails
