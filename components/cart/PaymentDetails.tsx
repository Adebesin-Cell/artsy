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
  Radio,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'
import style from '../../styles/Home.module.css'

function PaymentDetails() {
  return (
    <Box mt="3rem" height="100%">
      <Flex width="100%">
        <Box width="58%" marginRight="2%">
          <Box
            borderRadius="10px"
            width="100%"
            marginBottom="3rem"
            border="1px solid #989898"
          >
            <Box
              width="85%"
              // height="100%"
              //   border="1px solid grey"
              color="#989898"
              textAlign="left"
              fontWeight="Normal"
              fontSize="1.2rem"
              height="100%"
              marginTop="2rem"
            >
              <Radio
                size="lg"
                name="1"
                colorScheme="orange"
                defaultChecked
                marginBottom="1rem"
              >
                <Text fontWeight="Bold">Select your wallet</Text>
              </Radio>
              <Text marginLeft="2rem">
                Connect with one of our available wallet
              </Text>
              <Text marginLeft="2rem">
                Providers or add and connect new wallet
              </Text>
              <Text mb="1rem" marginTop="2.3rem">
                Wallet Type
              </Text>
              <Input
                placeholder="okoliemmanuel47@gmail.com"
                height="4rem"
                bg="#F0F0F0"
                border="1px solid #303030"
              />

              <Text marginTop="2.5rem" mb="1rem">
                Key
              </Text>
              <Input
                placeholder="Emmanuel"
                height="4rem"
                bg="#F0F0F0"
                border="1px solid #303030"
              />

              <Flex>
                <Box width="50%" marginRight="0.5rem">
                  <Text marginTop="2.5rem" mb="1rem">
                    Expiry Date
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
                <Box width="50%" marginBottom="4rem" marginLeft="0.5rem">
                  <Text marginTop="2.5rem" mb="1rem">
                    CVV
                  </Text>
                  <Input
                    placeholder="00989876"
                    height="4rem"
                    bg="#F0F0F0"
                    border="1px solid #303030"
                  />
                </Box>
              </Flex>
              <Checkbox defaultChecked marginBottom="2rem">
                See my wallet details & information for future transaction
              </Checkbox>
            </Box>
          </Box>
          <Button
            className={style.addTocartbtn}
            height="5rem"
            width="100%"
            backgroundColor="#3457D5"
            color="white"
            borderRadius="0px"

            //   onClick={() => addTocart(product.id)}
          >
            <Link href="/marketplace/addtocart/Tab2">Confirm</Link>
          </Button>
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
          <Box borderBottom="1px solid grey" height="40%">
            <Text>Payment Details</Text>
          </Box>
          <Box borderBottom="1px solid grey" height="40%">
            ttttttttttttt
          </Box>
          <Box borderBottom="1px solid grey" height="40%">
            ttttttttttttt
          </Box>
          <Box borderBottom="1px solid grey" height="40%">
            ttttttttttttt
          </Box>
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

export default PaymentDetails
