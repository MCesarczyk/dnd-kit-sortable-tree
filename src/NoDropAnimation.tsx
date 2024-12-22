import { TreeRoot } from "./customizableTree/TreeRoot";

export const NoDropAnimation = () => {
  return (
    <TreeRoot
      sortableProps={{ animateLayoutChanges: () => false }}
      dropAnimation={null}
    />
  );
};
