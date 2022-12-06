export type NavItemType = {
  id: number
  label: string
  href: string
  target?: string
}

export const NAV_ITEMS: NavItemType[] = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Marketplace',
    href: '/marketplace',
  },
  {
    id: 3,
    label: 'Auctions',
    href: '/auctions',
  },
  {
    id: 4,
    label: 'Drop',
    href: '/drop',
  },
]
