import { Task } from "@/lib/types";
import { TrashIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  return (
    <div
      className="flex items-center text-left min-h-[100px] rounded-xl p-2.5 bg-gray-700 text-white cursor-grab relative"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      {task.content}
      {mouseIsOver && (
        <button className="stroke-white absolute right-4 top-1/2 -translate-y-1/2 bg-mainBackgroundColor p-2 rounded opacity-60 hover:opacity-100">
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default TaskCard;
