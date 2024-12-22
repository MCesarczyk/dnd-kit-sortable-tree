import { forwardRef, useEffect, useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";
import { MinimalTreeItemData } from "./types";
import { initialViableMinimalData } from "./treeData";

export const TwoDimensionalTree = () => {
  const [items, setItems] = useState(initialViableMinimalData);

  useEffect(() => {
    console.table(items);
  }, [items]);

  return (
    <SortableTree
      items={items}
      onItemsChanged={setItems}
      TreeItemComponent={MinimalTreeItemComponent}
    />
  );
};

const MinimalTreeItemComponent = forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<MinimalTreeItemData>
>((props, ref) => (
  <SimpleTreeItemWrapper {...props} ref={ref}>
    <div>{props.item.value}</div>
  </SimpleTreeItemWrapper>
));
