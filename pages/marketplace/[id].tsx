import React, { useEffect, useState } from 'react'
import { FEATURED_PRODUCTS } from 'data/FeaturedProducts'
import { useRouter } from 'next/router'
import {
  GridItem,
  Grid,
  Box,
  Image,
  Flex,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import style from '../../styles/Home.module.css'

// import Image from 'next/image'

export type ProductItemProps = {
  id: number
  image: string
  title: string
  description: string
  creators: { id: number; image: string }[]
  totalCreators: number
  placeImageRight?: boolean
}

export async function getStaticPaths() {
  const data = FEATURED_PRODUCTS.map(el => {
    return {
      params: { id: el.id.toString() },
    }
  })
  const paths = data
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

//this allows server side fetching
// check this https://nextjs.org/docs/basic-features/data-fetching/get-static-props for better explanation
export const getStaticProps: GetStaticProps = async context => {
  //gives the product id
  const productID = context?.params?.id
  // with that you can get make a fetch request
  const data = FEATURED_PRODUCTS.filter(el => el.id === Number(productID))
  const [res] = data
  // console.log(res)

  return {
    props: res,
    // props: { product: res },
  }
}

// export default Product
function checkout(product: ProductItemProps) {
  // console.log(product)
  //then use its value to render, but i cant use the value
  return (
    <Box m="12" justifyContent="center">
      <Flex
        height="680px"
        width="900px"
        border="1px solid grey"
        margin="auto"
        marginBottom="3rem"
      >
        <Box height="100%" width="50%" border="1px solid grey">
          <Box border="1px solid grey" height="95%" width="90%" margin="4">
            <Image
              height="100%"
              src={'../images/featured--' + product.id + '.png'}
              alt={product.title}
            />
          </Box>
        </Box>
        <Box height="100%" width="50%" border="1px solid grey">
          <Box height="15%" width="100%" border="1px solid grey"></Box>
          <Box height="45%" width="100%" border="1px solid grey"></Box>
          <Box
            height="40%"
            width="100%"
            border="1px solid grey"
            fontFamily="Satoshi"
          >
            <Accordion allowToggle height="100%">
              <AccordionItem height="33.3%" border="1px solid grey">
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Description:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{product.description}</AccordionPanel>
              </AccordionItem>

              <AccordionItem height="33.3%" border="1px solid grey">
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Listing:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel backgroundColor="white" pb={4}>
                  {product.description}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem height="33.3%" border="1px solid grey">
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Status:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{product.description}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Flex>

      <Box
        w="900px"
        h="90px"
        // marginTop="10"
        margin="auto"
        // border="1px solid grey"
        className={style.shadow}
      >
        Explore more from this collection
      </Box>

      <Flex
        mt="20"
        gap="7"
        // overflowX="hidden"
        // border="1px solid grey"
        margin="auto"
        w="900px"
        paddingTop="3rem"
      >
        {FEATURED_PRODUCTS.map(prod => {
          return (
            <Box height="15rem" minWidth="15rem" border="1px solid grey">
              {prod.title}

              <Image height="80%" src={'.' + prod.image} alt="" />
            </Box>
          )
        })}
      </Flex>
      <Box height="5rem" width="12rem" margin="auto" padding="4rem">
        <Button height="3.5rem" width="9rem" border="1px solid grey">
          Explore All
        </Button>
      </Box>
    </Box>
  )
}

export default checkout
