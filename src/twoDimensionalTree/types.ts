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
