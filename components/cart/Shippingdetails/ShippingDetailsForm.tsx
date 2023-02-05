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
  Select,
  Input,
  Link,
  Checkbox,
} from '@chakra-ui/react'
import style from '../../../styles/Home.module.css'

function ShippingDetailsForm() {
  return (
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
  )
}

export default ShippingDetailsForm
