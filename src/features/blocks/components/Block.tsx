import { getCurrentUnixTimeStampInUtc } from "@/utils/getCurrentUnixTimeStampInUtc";
import { Block as BlockType } from "alchemy-sdk";

export const Block = ({
  number,
  timestamp,
  miner,
  transactions,
}: BlockType) => {
  return (
    <>
      <div>
        <p className="text-sm">{number}</p>
        <p className="text-xs">
          {getCurrentUnixTimeStampInUtc() - timestamp}s ago
        </p>
      </div>
      <div>
        <p className="text-sm">miner: {miner.slice(0, 10)}...</p>
        <p className="text-xs">{transactions.length} txns</p>
      </div>
    </>
  );
};
