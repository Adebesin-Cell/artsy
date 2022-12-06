import { Box, Link } from '@chakra-ui/react'
import { NavItemType } from 'data/NavItemData'

const NavItem = ({ target, label, href }: NavItemType) => {
  return (
    <Box as="li">
      <Link fontFamily="Satoshi" href={href} target={target}>
        {label}
      </Link>
    </Box>
  )
}

export default NavItem
