import { Box } from '@chakra-ui/react'
import Hero from 'components/Landing/Hero'
import FeaturedProducts from 'components/Landing/Products'
import Slider from 'components/Landing/Slider'

export default function Home() {
  return (
    <Box>
      <Hero />
      <Slider />
      <FeaturedProducts />
    </Box>
  )
}
