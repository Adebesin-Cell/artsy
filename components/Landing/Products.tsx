import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import FeaturedCard from 'components/Products/FeaturedCard'
import { FEATURED_PRODUCTS } from 'data/FeaturedProducts'

const FeaturedProducts = () => {
  return (
    <Box
      w="full"
      mt="32"
      mb="20"
      mx="auto"
      px={{ base: 3, lg: 10 }}
      maxW={{ base: 'full', xl: '1280px' }}
    >
      <Heading fontFamily="Satoshi" fontWeight={500}>
        Featured products
      </Heading>
      <SimpleGrid rowGap="20" mt="10">
        {FEATURED_PRODUCTS.map(product => (
          <FeaturedCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            totalCreators={product.totalCreators}
            creators={product.creators}
            placeImageRight={product.placeImageRight}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default FeaturedProducts
