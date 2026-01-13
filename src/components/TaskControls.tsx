import {
  IoRemoveCircleOutline,
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

export function TaskControls({
  onMoveLeft,
  onRemove,
  onMoveRight,
  isDesktop = false,
}: {
  onMoveLeft: () => void;
  onRemove: () => void;
  onMoveRight: () => void;
  isDesktop?: boolean;
}) {
  if (isDesktop) {
    return (
      <nav className="flex items-center gap-3 h-[27px]" aria-label="Task controls">
        <button
          onClick={onMoveLeft}
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="Move left"
        >
          <IoArrowBackCircleOutline size={19} />
        </button>
        <button
          onClick={onRemove}
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="Remove task"
        >
          <IoRemoveCircleOutline size={15} />
        </button>
        <button
          onClick={onMoveRight}
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="Move right"
        >
          <IoArrowForwardCircleOutline size={19} />
        </button>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-2" aria-label="Task controls">
      <button
        onClick={onMoveLeft}
        className="text-black hover:opacity-70 transition-opacity"
        aria-label="Move left"
      >
        <IoArrowBackCircleOutline size={19} />
      </button>
      <button
        onClick={onRemove}
        className="text-black hover:opacity-70 transition-opacity"
        aria-label="Remove task"
      >
        <IoRemoveCircleOutline size={15} />
      </button>
      <button
        onClick={onMoveRight}
        className="text-black hover:opacity-70 transition-opacity"
        aria-label="Move right"
      >
        <IoArrowForwardCircleOutline size={19} />
      </button>
    </nav>
  );
}
