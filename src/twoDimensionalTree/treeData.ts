import { TreeItems } from "dnd-kit-sortable-tree";
import { MinimalTreeItemData } from "./types";

export const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
  {
    id: "1",
    value: "Todo",
    container: true,
    children: [
      {
        id: "4",
        value: "Task 1",
        canHaveChildren: false
      },
      {
        id: "5",
        value: "Task 2",
        canHaveChildren: false
      },
    ],
  },
  {
    id: "2",
    value: "In progress",
    container: true,
    children: [
      {
        id: "6",
        value: "Task 3",
        canHaveChildren: false
      }, {
        id: "7",
        value: "Task 4",
        canHaveChildren: false
      }]
  },
  {
    id: "3",
    value: "Done",
    container: true,
    children: [
      {
        id: "8",
        value: "Task 5",
        canHaveChildren: false
      }, {
        id: "9",
        value: "Task 6",
        canHaveChildren: false
      }]
  },
];
