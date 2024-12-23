import { forwardRef } from 'react';
import styles from './TreeItem.module.css';
import clsx from 'clsx';
import { TreeItemComponentProps } from './types';
import { SimpleTreeItemWrapper } from './SimpleTreeItemWrapper';
import { TreeItemData } from './TreeItemData';

export const TreeItem = forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<TreeItemData>
>((props, ref) => {
  const { childCount, clone, onRemove, item, isOver, isOverParent } = props;

  const enableCustomStyleWhenOver =
    document.location.href.includes('vs-code-like');

  return (
    <SimpleTreeItemWrapper
      {...props}
      contentClassName={clsx(
        enableCustomStyleWhenOver && isOver && styles.over,
        enableCustomStyleWhenOver && isOverParent && styles.overParent
      )}
      ref={ref}
    >
      <span className={styles.Text}>{item.text}</span>
      <span className={styles.Text}>{item.date.getDate()}</span>
      {!clone && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          X
        </button>
      )}
      {clone && childCount && childCount > 1 ? (
        <span className={styles.Count}>{childCount}</span>
      ) : null}
    </SimpleTreeItemWrapper>
  );
});
