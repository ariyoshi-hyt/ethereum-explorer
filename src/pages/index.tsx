import { Transactions } from "@/features/transactions";
import { Blocks } from "@/features/blocks";

export default function Home() {
  return (
    <>
      <Blocks />
      <Transactions />
    </>
  );
}
