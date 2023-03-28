import { useBlock } from "../api/getBlock";
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

export type BlockDetailProps = {
  blockTag: string;
};

export const BlockDetail = ({ blockTag }: BlockDetailProps) => {
  const { data, isLoading } = useBlock({
    blockTag,
    config: {
      enabled: !!blockTag,
    },
  });

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!data) {
    return <div>block does not exist</div>;
  }

  const {
    hash,
    parentHash,
    number,
    timestamp,
    nonce,
    difficulty,
    gasLimit,
    gasUsed,
    miner,
  } = data;

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Block #{number}</Th>
          </Tr>
          <Tr>
            <Th>Parameter</Th>
            <Th>value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Hash</Td>
            <Td>{hash}</Td>
          </Tr>
          <Tr>
            <Td>Parent Hash</Td>
            <Td>{parentHash}</Td>
          </Tr>
          <Tr>
            <Td>Timestamp</Td>
            <Td>{timestamp}</Td>
          </Tr>
          <Tr>
            <Td>Nonce</Td>
            <Td>{nonce}</Td>
          </Tr>
          <Tr>
            <Td>Difficulty</Td>
            <Td>{difficulty}</Td>
          </Tr>
          <Tr>
            <Td>Gas Limit</Td>
            <Td>{gasLimit.toString()}</Td>
          </Tr>
          <Tr>
            <Td>Gas Used</Td>
            <Td>{gasUsed.toString()}</Td>
          </Tr>
          <Tr>
            <Td>Miner</Td>
            <Td>{miner}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
