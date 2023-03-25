import { useQuery } from "react-query";
import { alchemyClient } from "@/lib/alchemy-sdk";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getTransactions = async () => {
  const blockNumber = await alchemyClient.core.getBlockNumber();

  const { transactions } = await alchemyClient.core.getBlockWithTransactions(
    blockNumber
  );

  const response = transactions.map(async (transaction) => {
    const { hash, from, to, timestamp } = transaction;
    return {
      hash,
      from,
      to,
      timestamp,
    };
  });

  return response;
};

type QueryFnType = typeof getTransactions;

type UseTransactionsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTransactions = ({ config }: UseTransactionsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(),
    ...config,
  });
};
