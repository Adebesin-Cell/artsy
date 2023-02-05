import React from 'react'
import {
  SimpleGrid,
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Input,
} from '@chakra-ui/react'
import style from '../../styles/Home.module.css'

function TopFilter() {
  return (
    <Flex className={style.tfilter}>
      <Box
        width="20%"
        h="90%"
        // border="1px solid grey"
        textAlign="center"
        paddingTop="0.5rem"
      >
        <Input
          border="0"
          focusBorderColor="none"
          placeholder="Search"
          size="lg"
          height="2.7rem"
          width="10rem"
          borderRadius="15px"
          color="white"
          backgroundColor="#F0F0F0"
        />
      </Box>
      <SimpleGrid
        width="80%"
        h="90%"
        // border="1px solid grey"
        spacing="5px"
        templateColumns="repeat(1, 1fr)"
        // marginLeft="2rem"
        // gap="10rem"
        paddingLeft="6rem"
        paddingRight="6rem"
      >
        <Flex
          className={style.shadow}
          width="100%"
          h="100%"
          // margin="auto"

          // paddingTop="9px"
          // marginLeft="2rem"
        >
          <Text
            fontWeight="Normal"
            fontSize="1.2rem"
            margin="auto"
            marginLeft="2rem"
          >
            See 1-6 of 15 results
          </Text>
          <Box
            w="9rem"
            h="80%"
            marginRight="0.6rem"
            padding="1"
            border="1px solid #A0A0A0"
            borderRadius="0.4rem"
          >
            <Accordion allowToggle height="100%">
              <AccordionItem height="100%" border="none">
                <h2>
                  <AccordionButton
                    backgroundColor="inherit"
                    p="1"
                    paddingLeft="25%"
                    // marginTop="2rem"
                    height="100%"
                    // border="1px solid black"
                    // m="1.5"
                    borderRadius="0.5rem"
                    // alignItems="center"
                  >
                    <Text
                      as="span"
                      fontWeight="Bold"
                      fontSize="1.3rem"
                      fontFamily="Calibri"
                      // border="1px solid grey"
                      // margin="auto"
                    >
                      Sort by
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} p="0" marginTop="2rem"></AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default TopFilter
