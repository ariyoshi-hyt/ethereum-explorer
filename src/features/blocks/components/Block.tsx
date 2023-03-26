import { getCurrentUnixTimeStampInUtc } from "@/utils/getCurrentUnixTimeStampInUtc";
import { Block as BlockType } from "alchemy-sdk";
import { Tr, Td } from "@chakra-ui/react";

export const Block = ({
  number,
  timestamp,
  miner,
  transactions,
}: BlockType) => {
  return (
    <Tr>
      <Td>
        <p className="text-sm">{number}</p>
        <p className="text-xs">
          {getCurrentUnixTimeStampInUtc() - timestamp}s ago
        </p>
      </Td>
      <Td>
        <p className="text-sm">miner: {miner.slice(0, 10)}...</p>
      </Td>
      <Td>
        <p className="text-sm">{transactions.length} txns</p>
      </Td>
    </Tr>
  );
};
