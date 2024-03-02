import {
  Modal,
  Spinner,
  Box,
  Flex,
  Image,
  ModalOverlay,
  ModalContent,
  Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Tooltip,
  Icon,
  IconButton,
} from '@chakra-ui/react'
import { RiArrowRightLine } from 'react-icons/ri'
// var Lorem = require('react-lorem-component')

function Livebid() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex onClick={onOpen}></Flex>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={8}></Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Livebid
