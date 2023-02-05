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
      <Box width="30%" paddingTop="2.5rem">
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
          {price}
        </Text>
      </Box>
    </Flex>
  )
}

export default ShippingDetailsCard
