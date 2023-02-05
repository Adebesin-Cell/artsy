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
import Link from 'next/link'
import style from '../../styles/Home.module.css'

export type marketPlace = {
  id: number
  image: string
  title: string
  price: string
  description: string
}

function MarketplaceIndexCard(props: marketPlace) {
  const { id, image, title, price, description } = props

  return (
    <Link key={id} href={`/marketplace/${id}`}>
      <Box className={style.third}>
        <Image
          height="70%"
          borderRadius="7px"
          src={image}
          alt=""
          margin="3"
          width="90%"
        />
        <Box margin="5">
          <Text>{title}</Text>
          <Text fontWeight="Normal" fontSize="1.5rem" fontFamily="Serif">
            ${price}
          </Text>
        </Box>
      </Box>
    </Link>
  )
}

export default MarketplaceIndexCard
