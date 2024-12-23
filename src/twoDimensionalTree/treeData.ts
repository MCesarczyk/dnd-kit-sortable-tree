import { MinimalTreeItemData, SortableListItems } from "./types";

export const getInitialViableMinimalData = (handleCollapse?: (clickedItem: MinimalTreeItemData) => void): SortableListItems => [
  {
    id: "1",
    value: "Todo",
    container: true,
    onItemCollapse: handleCollapse,
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
    onItemCollapse: handleCollapse,
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
    onItemCollapse: handleCollapse,
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
