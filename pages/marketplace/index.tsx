import React from 'react'
import {
  SimpleGrid,
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Input,
} from '@chakra-ui/react'
import { FEATURED_PRODUCTS } from 'data/FeaturedProducts'
import Link from 'next/link'
import style from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import FeaturedProducts from 'components/Landing/Products'

// let M_Products = FEATURED_PRODUCTS
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

export type valueT = {
  value: string
}
function Marketplace() {
  const [mktProducts, setmktProducts] = useState<FeaturedProduct[] | null>(null)
  const [checkedItems, setcheckedItems] = useState([''])
  const filteredProduct: FeaturedProduct[] = []

  // This hook sets products on page load
  useEffect(() => {
    setmktProducts(FEATURED_PRODUCTS)
    setcheckedItems([])
    // setfilteredProduct([])
  }, [])

  //function to filter marketplace based on checked item
  const doFilter = function (value: string) {
    if (!checkedItems.includes(value)) {
      checkedItems.push(value)
    } else {
      const ind = checkedItems.indexOf(value)
      checkedItems.splice(ind, 1)
    }

    // console.log(checkedItems)
    // console.log(checkedItems.length)
    if (checkedItems.length < 1) {
      setmktProducts(FEATURED_PRODUCTS)
    } else {
      // setfilteredProduct([])
      checkedItems.forEach(item => {
        const M_Products = FEATURED_PRODUCTS.filter(el => el.category === item)

        filteredProduct.push(...M_Products)
        console.log(filteredProduct)
      })
      console.log(filteredProduct)
      setmktProducts(filteredProduct)
    }
  }

  return (
    <Box>
      <Flex
        margin="auto"
        // border="1px solid grey"
        width="75%"
        height="7rem"
        paddingTop="2rem"
        marginBottom="0"
      >
        <Box
          width="20%"
          h="90%"
          // border="1px solid grey"
          textAlign="center"
          paddingTop="0.5rem"
        >
          <Input
            border="0"
            focusBorderColor="none"
            placeholder="Search"
            size="lg"
            height="2.7rem"
            width="10rem"
            borderRadius="15px"
            color="white"
            backgroundColor="#F0F0F0"
          />
        </Box>
        <SimpleGrid
          width="80%"
          h="90%"
          // border="1px solid grey"
          spacing="5px"
          templateColumns="repeat(1, 1fr)"
          // marginLeft="2rem"
          // gap="10rem"
          paddingLeft="6rem"
          paddingRight="6rem"
        >
          <Flex
            className={style.shadow}
            width="100%"
            h="100%"
            // margin="auto"

            // paddingTop="9px"
            // marginLeft="2rem"
          >
            <Text
              fontWeight="Normal"
              fontSize="1.2rem"
              margin="auto"
              marginLeft="2rem"
            >
              See 1-6 of 15 results
            </Text>
            <Box
              w="9rem"
              h="80%"
              marginRight="0.6rem"
              padding="1"
              border="1px solid #A0A0A0"
              borderRadius="0.4rem"
            >
              <Accordion allowToggle height="100%">
                <AccordionItem height="100%" border="none">
                  <h2>
                    <AccordionButton
                      backgroundColor="inherit"
                      p="1"
                      paddingLeft="25%"
                      // marginTop="2rem"
                      height="100%"
                      // border="1px solid black"
                      // m="1.5"
                      borderRadius="0.5rem"
                      // alignItems="center"
                    >
                      <Text
                        as="span"
                        fontWeight="Bold"
                        fontSize="1.3rem"
                        fontFamily="Calibri"
                        // border="1px solid grey"
                        // margin="auto"
                      >
                        Sort by
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    p="0"
                    marginTop="2rem"
                  ></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Flex
        margin="auto"
        // height="100vh"
        // padding="20"
        // overflow="scroll"
        // border="1px solid grey"
        width="75%"
      >
        <Box w="20%" p={4} color="black">
          <Flex
            gap="3"
            w="100%"
            h="3.5rem"
            color="black"
            borderBottom="5px solid #7f993c"
          >
            <Image height="70%" src="./images/filter2.svg" alt="Artsy" />
            <Text fontSize="1.5rem" fontWeight="Bold" fontFamily="Calibri">
              Filter
            </Text>
          </Flex>

          <Box w="98%" h="59rem" color="black">
            <Box w="100%" h="32%">
              <Accordion allowToggle height="100%">
                <AccordionItem height="100%" border="none">
                  <h1>
                    <AccordionButton
                      backgroundColor="inherit"
                      p="0"
                      marginTop="2rem"
                      height="2rem"
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight="Bold"
                        fontSize="1.3rem"
                        fontFamily="Calibri"
                      >
                        By Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h1>
                  <AccordionPanel p="0" marginTop="1.5rem">
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <Checkbox
                          value="editorial"
                          onChange={e => doFilter(e.target.value)}
                          marginBottom="1rem"
                          iconColor="black"
                          colorScheme="none"
                        >
                          <Text fontWeight="Normal" fontSize="1.2rem">
                            Editorial
                          </Text>
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="optics"
                          onChange={e => doFilter(e.target.value)}
                          marginBottom="1rem"
                          iconColor="black"
                          colorScheme="none"
                        >
                          <Text fontWeight="Normal" fontSize="1.2rem">
                            Optics
                          </Text>
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="fashion"
                          onChange={e => doFilter(e.target.value)}
                          marginBottom="1rem"
                          iconColor="black"
                          colorScheme="none"
                        >
                          <Text fontWeight="Normal" fontSize="1.2rem">
                            Fashion
                          </Text>
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="art"
                          onChange={e => doFilter(e.target.value)}
                          marginBottom="1rem"
                          iconColor="black"
                          colorScheme="none"
                        >
                          <Text fontWeight="Normal" fontSize="1.2rem">
                            Art
                          </Text>
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="nature"
                          onChange={e => doFilter(e.target.value)}
                          marginBottom="1rem"
                          iconColor="black"
                          colorScheme="none"
                        >
                          <Text fontWeight="Normal" fontSize="1.2rem">
                            Nature
                          </Text>
                        </Checkbox>
                      </li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box w="100%" h="30%">
              <Accordion allowToggle height="100%">
                <AccordionItem height="100%" border="none">
                  <h2>
                    <AccordionButton
                      backgroundColor="inherit"
                      p="0"
                      marginTop="2rem"
                      height="2rem"
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight="Bold"
                        fontSize="1.3rem"
                        fontFamily="Calibri"
                      >
                        By Price
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} p="0" marginTop="2rem">
                    <Text fontWeight="Normal" fontSize="1.2rem">
                      $100.00-$150.00
                    </Text>
                    <Slider
                      aria-label="slider-ex-2"
                      colorScheme="pink"
                      defaultValue={30}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box w="100%" h="35%">
              By Artist
            </Box>
          </Box>
        </Box>
        <SimpleGrid
          templateColumns="repeat(3, 1fr)"
          // columns={[2, null, 3]}
          float="right"
          spacing="30px"
          w="80%"
          height="100%"
          // border="1px solid grey"
          // overflow="scroll"
          paddingLeft="6rem"
          paddingRight="6rem"
          // paddingTop="5rem"
          marginTop="2rem"
        >
          {mktProducts &&
            mktProducts.map(prod => {
              return (
                <Link key={prod.id} href={`/marketplace/${prod.id}`}>
                  <Box className={style.third}>
                    <Image
                      height="70%"
                      borderRadius="7px"
                      src={prod.image}
                      alt=""
                      margin="3"
                      width="90%"
                    />
                    <Box margin="5">
                      <Text>{prod.title}</Text>
                      <Text fontWeight="bold" fontSize="1.5rem">
                        {prod.price}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              )
            })}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Marketplace
