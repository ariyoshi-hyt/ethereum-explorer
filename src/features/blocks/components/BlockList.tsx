import { useBlocks } from "../api/getBlocks";
import { Block } from "./Block";

export const BlockList = () => {
  const blocksQuery = useBlocks({});

  if (blocksQuery.isLoading) {
    return <div>...error</div>;
  }

  if (!blocksQuery.data?.length) {
    return <div>block does not exist</div>;
  }

  return (
    <ul>
      <li>
        <h1 className="text-lg">Latest Blocks</h1>
      </li>
      {blocksQuery.data.map((block, index) => (
        <li key={index} className="grid grid-cols-2">
          <Block {...block} />
        </li>
      ))}
    </ul>
  );
};
