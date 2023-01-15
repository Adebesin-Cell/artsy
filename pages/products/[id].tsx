import { GetStaticProps } from 'next'

export type ProductItemProps = {
  id: string
}

const Product = (product: ProductItemProps) => {
  console.log(product)
}

//this allows server side fetching
// check this https://nextjs.org/docs/basic-features/data-fetching/get-static-props for better explanation
export const getStaticProps: GetStaticProps = async context => {
  //gives the product id
  const productID = context?.params?.id
  // with that you can get make a fetch request

  return {
    props: {
      product: {},
    },
  }
}

export default Product
