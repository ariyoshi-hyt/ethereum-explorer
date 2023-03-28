import { getCurrentUnixTimeStampInUtc } from "@/utils/getCurrentUnixTimeStampInUtc";
import { Block as BlockType } from "alchemy-sdk";
import { Tr, Td } from "@chakra-ui/react";
import Link from "next/link";

export const Block = ({
  number,
  timestamp,
  miner,
  transactions,
}: BlockType) => {
  return (
    <Tr>
      <Td>
        <Link className="text-sm" href={`block/${encodeURIComponent(number)}`}>
          {number}
        </Link>
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
