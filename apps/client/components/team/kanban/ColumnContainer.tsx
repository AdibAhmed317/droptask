import React, { useState } from "react";
import { Column, Id } from "@/lib/types";
import { TrashIcon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

// const updateColumn = () => {};

const ColumnContainer = ({
  column,
  deleteColumn,
  updateColumn,
}: ColumnContainerProps) => {
  const [editMode, setEditMode] = useState(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        className="bg-gray-300 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-60"
        ref={setNodeRef}
        style={style}
      ></div>
    );
  }

  return (
    <div
      className="bg-gray-300 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ref={setNodeRef}
      style={style}
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        className="bg-gray-700 text-sm text-white h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold border-columnBackgroundColor border-1 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-gray-800 px-2 py-1 text-sm rounded-sm">
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-gray-600 px-2 border rounded outline-none"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button onClick={() => deleteColumn(column.id)}>
          <TrashIcon className="max-h-4 w-full" />
        </button>
      </div>
      <div className="flex flex-grow">Content</div>
      <div>footer</div>
    </div>
  );
};

export default ColumnContainer;
