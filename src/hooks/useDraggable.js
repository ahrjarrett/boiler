import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const types = {
  COLUMN: "column",
  CARD: "card"
};

export function useDraggableColumn({ index, id, moveColumn, column }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: types.COLUMN,
    hover: item => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: types.COLUMN, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end(item) {
      moveColumn(item.index, index);
    }
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return { ref, opacity, index };
}

export function useDraggableCard({ index, id, moveCard, card }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: types.CARD,
    hover: item => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: types.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end(item) {
      moveCard(item.index, index);
    }
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return { ref, opacity, index };
}
