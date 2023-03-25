import { useBlocks } from "../api/getBlocks";
import { Block } from "./Block";

export const BlockList = () => {
  const { isLoading, data } = useBlocks({});

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!data?.length) {
    return <div>block does not exist</div>;
  }

  return (
    <ul>
      <li>
        <h1 className="text-lg">Latest Blocks</h1>
      </li>
      {data?.map((block, index) => (
        <li key={index} className="grid grid-cols-2">
          <Block {...block} />
        </li>
      ))}
    </ul>
  );
};
