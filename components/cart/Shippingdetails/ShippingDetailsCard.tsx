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

export type Shippingdetails = {
  id: number
  image: string
  title: string
  price: string
  description: string
}

function ShippingDetailsCard(props: Shippingdetails) {
  const { id, image, title, description, price } = props
  return (
    <Flex key={id} width="100%" height="15rem" borderBottom="1px solid #D0D0D0">
      <Box
        width="40%"
        paddingTop="1.5rem"
        // border="1px solid grey"
        paddingRight="1rem"
      >
        <Image
          height="12rem"
          borderRadius="7px"
          // src="../images/featured--1.png"
          src={'.' + image}
          alt=""
          // margin=""
          width="11rem"
          marginRight="1rem"
        />
      </Box>
      <Box
        width="30%"
        paddingTop="1.5rem"
        textAlign="left"
        // border="1px solid grey"
      >
        <Text mb={5}>{title}</Text>

        <Text>200 ft</Text>
        <Flex paddingTop="3.5rem">
          <Button bg="inherit">-</Button>
          <Text fontWeight="bold" fontSize="1.5rem">
            1
          </Text>
          <Button bg="inherit">+</Button>
        </Flex>
      </Box>
      <Box width="10%"></Box>
      <Box
        width="20%"
        // marginLeft="4rem"
        textAlign="center"
        paddingTop="2rem"
        // border="1px solid grey"
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
          // margin="auto"
          float="right"
          transform="scaleY(0.7)scaleX(0.7)"
        >
          <Icon as={BiX} w={12} h={12} />
        </IconButton>

        <Text
          marginTop="9rem"
          fontWeight="Normal"
          fontSize="1.5rem"
          // float="right"
          // bg="green"
          textAlign="right"
          fontFamily="Serif"
        >
          ${price}
        </Text>
      </Box>
    </Flex>
  )
}

export default ShippingDetailsCard
