import { IoAddCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

export function AddTaskButton({ onClick, showAsArrow = false }: { onClick: () => void; showAsArrow?: boolean }) {
  if (showAsArrow) {
    return (
      <button
        onClick={onClick}
        className="hover:opacity-70 transition-opacity mt-2"
        aria-label="Add new task"
      >
        <IoArrowForwardCircleOutline size={46} className="text-black" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
    >
      <IoAddCircleOutline size={21} className="text-black" />
      <span className="font-inter font-light text-xs text-black">add new</span>
    </button>
  );
}
