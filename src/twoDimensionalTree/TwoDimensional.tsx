import { forwardRef, useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";
import { MinimalTreeItemData } from "./types";
import { initialViableMinimalData } from "./treeData";

export const TwoDimensionalTree = () => {
  const [items, setItems] = useState(initialViableMinimalData);

  const onItemsChanged = (newItems: typeof items) => {
    const itemsFlatten = newItems.flatMap((item) =>
      item.children ? [item, ...item.children] : item
    );
    console.log("items", itemsFlatten);
    console.log(
      "containers",
      itemsFlatten.filter((item) => item.container)
    );
    if (
      itemsFlatten.filter((item) => item.container && item.parentId).length > 0
    ) {
      // console.error('Containers cannot have parent');
      return;
    }

    setItems(newItems);
  };

  return (
    <SortableTree
      items={items}
      onItemsChanged={onItemsChanged}
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
