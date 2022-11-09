import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Services.css";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="services">
      <Helmet>
        <title>Memberstock - Services</title>
      </Helmet>
      <div className="search">
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </div>

      <div className="tbl">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {" "}
                <Th>Id</Th>
                <Th className="service">Services</Th>
                <Th>Rate Per 1000 ( In INR )</Th>
                <Th>Min Order</Th>
                <Th>Max Order</Th>
                <Th>Average Time</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>
                  Telegram Members ( Non Drop ) ( 10 / Day ) ( Max - 20K ) |{" "}
                  <br />
                  Instant Start | Best Working - ₹ 125 Per 1000
                </Td>
                <Td>125</Td>
                <Td>100</Td>
                <Td>20000</Td>
                <Td>1 Hour</Td>
                <Td>
                  <>
                    <Button onClick={onOpen} size="sm">
                      View
                    </Button>

                    <Modal
                      blockScrollOnMount={false}
                      isOpen={isOpen}
                      onClose={onClose}
                      isCentered
                      motionPreset="slideInBottom"
                      size="sm"
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>
                          Telegram Members ( Non Drop ) ( 10 / Day ) ( Max - 20K
                          ) | Instant Start | Best Working - ₹ 125 Per 1000
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Non Drop Members <br />
                            Last Drop ( 1 % ) <br />
                            No Reffil & No Refund Gurantee <br />
                            Best Service For Telegram Channels
                          </p>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={onClose}
                            size="sm"
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Services;
