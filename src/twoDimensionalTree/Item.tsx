import { forwardRef } from "react";
import styled, { css } from "styled-components";

import {
  SimpleTreeItemWrapper,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";
import { CollapsibleItemData } from "./types";

export const Item = forwardRef<
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
