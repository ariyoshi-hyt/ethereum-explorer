import { alchemyClient } from "@/lib/alchemy-sdk";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export const getBlock = async (blockTag: string) => {
  const block = await alchemyClient.core.getBlock(Number(blockTag));

  return block;
};

type QueryFnType = typeof getBlock;

type UseBlockOptions = {
  blockTag: string;
  config?: QueryConfig<QueryFnType>;
};

export const useBlock = ({ config, blockTag }: UseBlockOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["block"],
    queryFn: () => getBlock(blockTag),
    ...config,
  });
};
