import { useQuery } from "react-query";
import { alchemyClient } from "@/lib/alchemy-sdk";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getBlocks = async () => {
  const blocks = [];

  const blockNumber = await alchemyClient.core.getBlockNumber();

  for (let index = 0; index < 6; index++) {
    const block = await alchemyClient.core.getBlock(blockNumber - index);
    blocks.push(block);
  }

  return blocks;
};

type QueryFnType = typeof getBlocks;

type UseBlocksOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useBlocks = ({ config }: UseBlocksOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["blocks"],
    queryFn: () => getBlocks(),
    ...config,
  });
};
