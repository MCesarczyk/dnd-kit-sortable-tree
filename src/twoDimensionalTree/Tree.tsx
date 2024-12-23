import { useCallback, useEffect, useState } from "react";
import { SortableTree } from "dnd-kit-sortable-tree";

import { MinimalTreeItemData, SortableListItems } from "./types";
import { getInitialViableMinimalData } from "./treeData";
import { Item } from "./Item";

export const Tree = () => {
  const [items, setItems] = useState<SortableListItems>([]);

  const flattenItems = useCallback((items: SortableListItems): SortableListItems => {
    return items.flatMap((item) =>
      item.children ? [item, ...flattenItems(item.children)] : item
    );
  }, []);

  useEffect(() => {
      console.log('items', flattenItems(items));
  }, [flattenItems, items]);

  const onItemsChanged = (newItems: typeof items) => {
    const itemsFlatten = flattenItems(newItems);

    if (
      itemsFlatten.filter((item) => item.container && item.parentId).length > 0
    ) {
      return;
    }

    setItems(newItems);
  };

  const handleItemCollapse = (clickedItem: MinimalTreeItemData) => {
    setItems((items) =>
      items.map((item) => {
        if (!item.container) {
          return item;
        }

        if (item.id === clickedItem.id) {
          return { ...item, collapsed: !item.collapsed };
        }

        return item;
      })
    );
  };

  useEffect(() => {
    setItems(getInitialViableMinimalData(handleItemCollapse));
  }, []);

  return (
    <SortableTree
      items={items}
      indentationWidth={0.001}
      onItemsChanged={onItemsChanged}
      TreeItemComponent={Item}
    />
  );
};
