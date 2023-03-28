import { Block } from "@/features/blocks";
import { useRouter } from "next/router";

export default function BlockSingle() {
  const router = useRouter();

  const { blockNumber } = router.query;

  return (
    <Block blockTag={typeof blockNumber === "string" ? blockNumber : ""} />
  );
}
