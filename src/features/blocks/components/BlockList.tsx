import { useBlocks } from "../api/getBlocks";
import { Block } from "./Block";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Td,
} from "@chakra-ui/react";

export const BlockList = () => {
  const { isLoading, data } = useBlocks({});

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!data?.length) {
    return <div>block does not exist</div>;
  }

  return (
    <TableContainer>
      <Table variant="striped" size={"md"}>
        <Thead>
          <Tr>
            <Th>Latest Blocks</Th>
          </Tr>
          <Tr>
            <Th>Block Number</Th>
            <Th>Miner Address</Th>
            <Th>Tx Counts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.slice(0, 6).map((block, index) => {
            return <Block {...block} />;
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>View More</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
