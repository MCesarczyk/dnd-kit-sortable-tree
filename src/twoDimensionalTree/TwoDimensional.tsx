import { forwardRef, useEffect, useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";
import {
  CollapsibleItemData,
  MinimalTreeItemData,
  SortableListItems,
} from "./types";
import { getInitialViableMinimalData } from "./treeData";
import styled, { css } from "styled-components";

export const TwoDimensionalTree = () => {
  const [items, setItems] = useState<SortableListItems>([]);

  const onItemsChanged = (newItems: typeof items) => {
    const itemsFlatten = newItems.flatMap((item) =>
      item.children ? [item, ...item.children] : item
    );
    console.log("items", itemsFlatten);

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
      TreeItemComponent={MinimalTreeItemComponent}
    />
  );
};

const MinimalTreeItemComponent = forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<CollapsibleItemData>
>((props, ref) => (
  <ItemWrapper $container={props.item.container}>
    <SimpleTreeItemWrapper
      {...props}
      ref={ref}
      manualDrag={true}
      showDragHandle={false}
      disableCollapseOnItemClick={true}
      collapsed={props.item.collapsed}
    >
      <div {...props.handleProps} style={{ marginRight: 12, cursor: "move" }}>
        #
      </div>
      <div
        onClick={() =>
          props.item.onItemCollapse && props.item.onItemCollapse(props.item)
        }
        style={{ marginRight: 12, cursor: "pointer" }}
      >
        O
      </div>
      <div>{props.item.value}</div>
    </SimpleTreeItemWrapper>
  </ItemWrapper>
));

const ItemWrapper = styled.div<{ $container?: boolean }>`
  user-select: none;

  ${({ $container: container }) =>
    container &&
    css`
      background-color: lightgray;
      padding: 8px;
    `}
`;
