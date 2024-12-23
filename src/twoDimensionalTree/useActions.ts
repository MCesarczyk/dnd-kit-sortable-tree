import { useState } from "react";
import { Arguments } from "@dnd-kit/core/dist/components/Accessibility/types";

export const useActions = () => {
  const [isDragging, setIsDragging] = useState(false);

  const announcements = {
    onDragStart({ active }: Arguments) {
      const onDragStart = `Picked up draggable item ${active.id}.`
      console.log(active, onDragStart);
      setIsDragging(true);
      return onDragStart;
    },

    onDragOver({ active, over }: Arguments) {
      if (over) {
        const onDragMessage = `Draggable item ${active.id} was moved over droppable area ${over.id}.`
        console.log(onDragMessage);
        return onDragMessage;
      }

      console.log(`Draggable item ${active.id} is no longer over a droppable area.`);
    },

    onDragEnd({ active, over }: Arguments) {
      if (over) {
        const onDragEndMessage = `Draggable item ${active.id} was dropped over droppable area ${over.id}`
        console.log(onDragEndMessage);
        setIsDragging(false);
        return onDragEndMessage;
      }

      console.log(`Draggable item ${active.id} was dropped.`);
    },

    onDragCancel({ active }: Arguments) {
      const onDragCancelMessage = `Dragging was cancelled. Draggable item ${active.id} was dropped.`
      console.log(onDragCancelMessage);
      setIsDragging(false);
      return onDragCancelMessage;
    }
  };

  return {
    announcements,
    isDragging,
  };
};
