import { Flex, Image } from '@chakra-ui/react'

const Slider = () => {
  return (
    <Flex
      mt="20"
      gap="5"
      overflowX="hidden"
      maxW={{ '2xl': '1350px' }}
      mx="auto"
      justifyContent={{ '2xl': 'center' }}
    >
      <Image
        mt="28"
        src="./images/slide--1.png"
        alt="Slide 1"
        h="330px"
        objectFit="cover"
      />
      <Image
        mt="8"
        src="./images/slide--2.png"
        alt="Slide 2"
        h="428px"
        objectFit="cover"
      />
      <Image
        src="./images/slide--3.png"
        alt="Slide 3"
        h="444px"
        objectFit="cover"
      />
      <Image
        mt="8"
        src="./images/slide--4.png"
        alt="Slide 4"
        h="428px"
        objectFit="cover"
      />
      <Image
        mt="8"
        src="./images/slide--4.png"
        alt="Slide 4"
        h="428px"
        objectFit="cover"
      />
    </Flex>
  )
}

export default Slider
