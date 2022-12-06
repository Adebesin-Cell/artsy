import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { NAV_ITEMS } from 'data/NavItemData'
import NavItem from './NavItem'

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
      <Flex gap="12" as="ul" listStyleType="none">
        {NAV_ITEMS.map(navItem => (
          <NavItem
            key={navItem.id}
            id={navItem.id}
            target={navItem.target}
            label={navItem.label}
            href={navItem.href}
          />
        ))}
      </Flex>
      <Flex>&nbsp;</Flex>
    </Flex>
  )
}

export default Navbar
