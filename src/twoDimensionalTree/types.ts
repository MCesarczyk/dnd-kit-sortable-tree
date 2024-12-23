import { TreeItems } from "dnd-kit-sortable-tree";

export type MinimalTreeItemData = {
  id: string;
  value: string;
  canHaveChildren?: boolean;
  parentId?: string;
  depth?: number;
  index?: number;
  isLast?: boolean;
  parent?: MinimalTreeItemData | null;
  children?: MinimalTreeItemData[];
  container?: boolean;
};

export type CollapsibleItemData = MinimalTreeItemData & { onItemCollapse?: (clickedItem: MinimalTreeItemData) => void };

export type SortableListItems = TreeItems<CollapsibleItemData>;
