import React, { useState } from "react";
import { Column, Id, Task } from "@/lib/types";
import { PlusCircleIcon, TrashIcon } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  tasks: Task[];
}

const ColumnContainer = ({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
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
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        {tasks?.map((task) => (
          <div key={task.id}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
      <button
        className="flex gap-2 items-center rounded-b-md p-2 bg-gray-500 text-white hover:text-gray-700"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusCircleIcon className="max-h-5" />
        Add Task
      </button>
    </div>
  );
};

export default ColumnContainer;
