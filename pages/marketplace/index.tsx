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
import { useState } from 'react'

// let M_Products = FEATURED_PRODUCTS
export type FeaturedProduct = {
  id: number
  image: string
  title: string
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
  //trying to do filter here and return filteres array after a category is
  //Usestate seem no to be working for type script
  let M_Products = FEATURED_PRODUCTS
  const doFilter = function (value: valueT) {
    console.log(value)
    M_Products = FEATURED_PRODUCTS.filter(el => el.category)
    console.log(M_Products)
  }

  return (
    <Box>
      <Flex
        margin="auto"
        // border="1px solid grey"
        width="80%"
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
          <Input placeholder="large size" size="lg" width="10rem" />
        </Box>
        <Box width="80%" h="90%">
          <Box
            className={style.shadow}
            width="88%"
            h="100%"
            // border="1px solid grey"
            marginLeft="2rem"
          ></Box>
        </Box>
      </Flex>
      <Flex
        margin="auto"
        // height="100vh"
        // padding="20"
        // overflow="scroll"
        // border="1px solid grey"
        width="80%"
      >
        <Box w="20%" p={4} color="black">
          <Flex
            gap="3"
            w="100%"
            h="3.5rem"
            color="black"
            borderBottom="4px solid grey"
          >
            <Image height="70%" src="./images/filter.svg" alt="Artsy" />
            <Text fontSize="1.5rem">Filter</Text>
          </Flex>

          <Box w="98%" h="59rem" p={2} color="black">
            <Box w="100%" h="32%">
              <Accordion allowToggle height="100%">
                <AccordionItem height="100%">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        By Category
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <Checkbox
                          value="fashion"
                          onChange={e => doFilter(e.target)}
                        >
                          Fashion
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="art"
                          onChange={e => doFilter(e.target)}
                        >
                          Art
                        </Checkbox>
                      </li>
                      <li>
                        <Checkbox
                          value="nature"
                          onChange={e => doFilter(e.target)}
                        >
                          Nature
                        </Checkbox>
                      </li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box w="100%" h="30%">
              <Accordion allowToggle height="100%">
                <AccordionItem height="100%">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        By Price
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>$100.00-$150.00</Text>
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
          columns={[2, null, 3]}
          float="right"
          spacing="30px"
          w="80%"
          height="100%"
          // border="1px solid grey"
          // overflow="scroll"
          padding="10"
        >
          {M_Products.map(prod => {
            return (
              <Box className={style.third}>
                <Image
                  height="70%"
                  borderRadius="7px"
                  src={prod.image}
                  alt=""
                />
                {prod.title}
              </Box>
            )
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Marketplace
