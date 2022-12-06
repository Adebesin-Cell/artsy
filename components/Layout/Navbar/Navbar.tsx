import { Flex, Image, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex
      w="full"
      h="100px"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 5, md: 3, lg: 8 }}
    >
      <Link href="/" display="block">
        <Image src="./images/logo.svg" alt="Artsy" />
      </Link>
    </Flex>
  )
}

export default Navbar
