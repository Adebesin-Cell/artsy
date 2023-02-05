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
import style from '../../../styles/Home.module.css'
import PaymentDetailsForm from './PaymentDetailsForm'
import CartProductSummary from '../CartProductSummary'

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
            <PaymentDetailsForm />
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
            <CartProductSummary hei="100%" wid={''} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default PaymentDetails
