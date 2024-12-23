import { forwardRef, SVGProps } from "react";
import styled, { css } from "styled-components";
import {
  SimpleTreeItemWrapper,
  TreeItemComponentProps,
} from "dnd-kit-sortable-tree";

import { CollapsibleItemData } from "./types";
import { CollapseButton } from "./CollapseButton";
import { DragIcon } from "./DragIcon";

export const Item = forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<CollapsibleItemData>
>((props, ref) => (
  <ItemWrapper
    $nested={!!props.item.parent}
    {...props}
    ref={ref}
    manualDrag={true}
    showDragHandle={false}
    disableCollapseOnItemClick={true}
    collapsed={props.item.collapsed}
  >
    <LabelWrapper>
      <div {...props.handleProps}>
        <DragIcon />
      </div>
      {props.item.canHaveChildren && <FolderIcon />}
      <Label>{props.item.value}</Label>
    </LabelWrapper>
    {props.item.canHaveChildren && (
      <CollapseButton
        {...props}
        onClick={() =>
          props.item.onItemCollapse && props.item.onItemCollapse(props.item)
        }
      />
    )}
  </ItemWrapper>
));

const ItemWrapper = styled(SimpleTreeItemWrapper)<{ $nested?: boolean }>`
  user-select: none;
  background-color: #2e2b2b;
  border: none;
  margin-top: 8px;

  > div {
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ $nested }) =>
    $nested &&
    css`
      margin: 0;
      background-color: #3d3b3b;
      border-bottom: 1px solid #ffffff1a;
    `}
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.div`
  color: #fff;
  font-weight: 600;
`;

const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="13"
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.25 0.998698L17.25 12.082M14.25 0.998698L7.125 0.998698C6.25055 0.998698 5.54167 1.70758 5.54167 2.58203V2.58203C5.54167 3.45648 4.83278 4.16537 3.95833 4.16537L2.89668 4.16537C1.49733 4.16537 0.530591 5.56554 1.02646 6.87408L3 12.082L17.25 12.082M14.25 0.998698L17.4933 0.998697C18.0944 0.998697 18.5597 1.52526 18.4857 2.12181L17.25 12.082"
      stroke={props.color || "#A09F9F"}
      stroke-width="1.5"
      stroke-linejoin="round"
    />
  </svg>
);
