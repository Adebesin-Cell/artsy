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
  Radio,
} from '@chakra-ui/react'

function PaymentDetailsForm() {
  return (
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
      <Text marginLeft="2rem">Connect with one of our available wallet</Text>
      <Text marginLeft="2rem">Providers or add and connect new wallet</Text>
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
  )
}

export default PaymentDetailsForm
