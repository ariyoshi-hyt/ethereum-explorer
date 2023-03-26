import { Transactions } from "@/features/transactions";
import { Blocks } from "@/features/blocks";

export default function Home() {
  return (
    <div className="grid grid-cols-2 mx-auto gap-x-3">
      <Blocks />
      <Transactions />
    </div>
  );
}
