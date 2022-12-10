import { Box, Flex, Icon, IconButton, Image, Link } from '@chakra-ui/react'
import { NAV_ITEMS } from 'data/NavItemData'
import NavItem from './NavItem'
import {
  RiNotification2Line,
  RiSearchLine,
  RiShoppingCartLine,
} from 'react-icons/ri'

const Navbar = () => {
  return (
    <Flex
      w="full"
      h="90px"
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
      <Flex gap="2">
        <IconButton aria-label="Search" variant="unstyled">
          <Icon w={5} h={5} as={RiSearchLine} />
        </IconButton>
        <IconButton aria-label="Cart" variant="unstyled">
          <Icon w={5} h={5} as={RiShoppingCartLine} />
        </IconButton>
        <IconButton aria-label="Notifications" variant="unstyled">
          <Icon w={5} h={5} as={RiNotification2Line} />
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default Navbar
