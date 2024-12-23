import { forwardRef, useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";
import { MinimalTreeItemData } from "./types";
import { initialViableMinimalData } from "./treeData";
import styled, { css } from "styled-components";

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
      indentationWidth={0.001}
      onItemsChanged={onItemsChanged}
      TreeItemComponent={MinimalTreeItemComponent}
    />
  );
};

const MinimalTreeItemComponent = forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<MinimalTreeItemData>
>((props, ref) => (
  <ItemWrapper container={props.item.container}>
    <SimpleTreeItemWrapper
      {...props}
      ref={ref}
      manualDrag={true}
      showDragHandle={false}
    >
      <div {...props.handleProps} style={{ marginRight: 12, cursor: "move" }}>
        #
      </div>
      <div>{props.item.value}</div>
    </SimpleTreeItemWrapper>
  </ItemWrapper>
));

const ItemWrapper = styled.div<{ container?: boolean }>`
  user-select: none;

  ${({ container }) =>
    container &&
    css`
      background-color: lightgray;
      padding: 8px;
    `}
`;
