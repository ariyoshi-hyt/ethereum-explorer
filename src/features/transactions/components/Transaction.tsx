import { TransactionReceipt, TransactionResponse } from "alchemy-sdk";
import { getCurrentUnixTimeStampInUtc } from "@/utils/getCurrentUnixTimeStampInUtc";

export const Transaction = ({
  from,
  to,
  hash,
  timestamp,
}: Pick<TransactionResponse, "timestamp" | "from" | "to" | "hash">) => {
  return (
    <>
      <div>
        <p className="text-sm">{hash.slice(0, 15)}...</p>
        <p className="text-xs">
          {timestamp
            ? `${getCurrentUnixTimeStampInUtc() - timestamp}s ago`
            : ""}
        </p>
      </div>
      <div>
        <p className="text-sm">
          From: {from.slice(0, 8)}...{from.slice(-8)}
        </p>
        <p className="text-xs">
          {to ? `To: ${to.slice(0, 8)}...${to.slice(-8)}` : ""}
        </p>
      </div>
    </>
  );
};
