import { ComponentProps, SVGProps } from "react";
import styled from "styled-components";

import { CollapsibleItemData } from "./types";
import { TreeItemComponentProps } from "../customizableTree/types";

export const CollapseButton = (
  props: ComponentProps<"button"> & TreeItemComponentProps<CollapsibleItemData>
) => {
  return (
    <Button
      onClick={() =>
        props.item.onItemCollapse && props.item.onItemCollapse(props.item)
      }
      style={{ marginRight: 12, cursor: "pointer" }}
    >
      <Chevron
        color="#f9f9f9"
        transform={props.item.collapsed ? "rotate(-90)" : ""}
      />
    </Button>
  );
};

const Button = styled.button`
  background-color: #504e4d;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Chevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.59766L5.94975 6.5474L10.8995 1.59766"
      stroke={props.color || "#A09F9F"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
