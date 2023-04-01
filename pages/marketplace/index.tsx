import React from 'react'
import { CHECK_ITEMS } from 'data/CheckItem'
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
import { MARKET_ITEM } from 'data/MarketItem'
import Link from 'next/link'
import style from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import FeaturedProducts from 'components/Landing/Products'
import MarketplaceIndexCard from 'components/marketplaces/MarketplaceIndexCard'
import TopFilter from 'components/marketplaces/TopFilter'
import { MarketItem } from 'data/MarketItem'

// let M_Products = MARKET_ITEM
// export type FeaturedProduct = {
//   id: number
//   image: string
//   title: string
//   price: string
//   category: string
//   description: string

// }

export type valueT = {
  value: string
}
function Marketplace() {
  const [mktProducts, setmktProducts] = useState<MarketItem[] | null>(null)
  const [checkedItems, setcheckedItems] = useState([''])
  const filteredProduct: MarketItem[] = []

  // This hook sets products on page load
  useEffect(() => {
    setmktProducts(MARKET_ITEM)
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
      setmktProducts(MARKET_ITEM)
    } else {
      // setfilteredProduct([])
      checkedItems.forEach(item => {
        const M_Products = MARKET_ITEM.filter(el => el.category === item)

        filteredProduct.push(...M_Products)
        console.log(filteredProduct)
      })
      console.log(filteredProduct)
      setmktProducts(filteredProduct)
    }
  }

  return (
    <Box>
      <TopFilter />

      <Flex
        margin="auto"
        // height="100vh"
        // padding="20"
        // overflow="scroll"
        // border="1px solid grey"
        width="75%"
      >
        <Box className={style.sfilter} p={4}>
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
                      {CHECK_ITEMS.map(item => (
                        <li key={item.id}>
                          <Checkbox
                            value={item.value}
                            onChange={e => doFilter(e.target.value)}
                            marginBottom="1rem"
                            iconColor="black"
                            colorScheme="none"
                          >
                            <Text fontWeight="Normal" fontSize="1.2rem">
                              {item.value[0].toUpperCase() +
                                item.value.slice(1)}
                            </Text>
                          </Checkbox>
                        </li>
                      ))}
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
        <SimpleGrid className={style.sgrid}>
          {mktProducts &&
            mktProducts.map(prod => (
              <MarketplaceIndexCard
                key={prod.id}
                image={prod.image}
                id={prod.id}
                title={prod.title}
                description={prod.description}
                price={prod.price}
              />
            ))}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Marketplace
