import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import "./Update.css";

function Update() {
  return (
    <div className="update">
      <Helmet>
        <title>Memberstocks - Update</title>
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
                <Th>Service</Th>
                <Th>Date</Th>
                <Th>Update</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Telegram Members ( Non Drop ) ( 10 / Day ) ( Max - 20K ) |{" "}
                  <br />
                  Instant Start | Best Working - ₹ 125 Per 1000
                </Td>
                <Td>2022-10-14</Td>
                <Td>Service Coming Soon</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Update;
