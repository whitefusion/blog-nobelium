import { createContext, useContext } from "react";

const BlockMapContext = createContext({});
type Block = { value: { type?: string; parent_id?: string; id?: string } };

export function BlockMapProvider({ blockMap, children }) {
  const collectionId = Object.keys(blockMap.collection)[0];
  const targetPage = Object.values(blockMap.block).find(
    (block: Block) =>
      block.value.type === "page" && block.value.parent_id === collectionId
  );

  if (targetPage) {
    const pageId = (targetPage as Block).value.id;

    const blockMapAltered = {
      ...blockMap,
      pageId,
    };

    return (
      <BlockMapContext.Provider value={blockMapAltered}>
        {children}
      </BlockMapContext.Provider>
    );
  }
  return null;
}

export default function useBlockMap() {
  return useContext(BlockMapContext);
}
