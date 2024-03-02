export type cartProducts = {
  id: number
  image: string
  title: string
  category: string
  price: string
  description: string
  creators: { id: number; image: string }[]
  totalCreators: number
  placeImageRight?: boolean
}
// export const prod = () => {
//     const value = JSON.parse(localStorage.getItem('cartProducts'))
//     console.log(value)
//   }
// export const CART_PRODUCT: cartProducts[] = JSON.parse(
//   localStorage.getItem('cartProducts'),
// )

export const CART_PRODUCT: cartProducts[] =
  typeof window !== 'undefined' &&
  JSON.parse(`${localStorage.getItem('cartProducts')}`)
