import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export { useDraggableColumn, useDraggableCard } from "./useDraggable";

export function useAutofocus(elementId) {
  const inputRef = useRef(elementId);

  useEffect(() => {
    inputRef.current = document.getElementById(elementId);
  }, [elementId]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  return inputRef.current;
}

export function useFocus() {
  const { focusedElement } = useSelector(state => state.ui);
  return useAutofocus(focusedElement);
}
