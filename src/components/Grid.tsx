import { MdMoreHoriz } from "react-icons/md";
import { AccordionProps, TaskList } from "../modal/modal";
import { MorePopUp } from "./SelectPopUp";
import { useState } from "react";
import { format } from "date-fns";

export const Grid = ({ singleTask, title }: AccordionProps) => {
  const [more, setMore] = useState<string | null>(null); // State to track which task's pop-up is open

  const handleMore = (id: string) => {
    setMore(more === id ? null : id); // Toggle the pop-up for the clicked task
  };

  return (
    <>
      <div className="md:w-[49%] lg:w-[32.5%] bg-gray rounded-lg px-3 pt-3 pb-5">
        <button
          className={`Grid_title ${title === "Todo"
              ? "bg-pink"
              : title === "Onprogress"
                ? "bg-blue"
                : title === "Completed"
                  ? "bg-green"
                  : null
            }`}
        >
          {title}
        </button>
        {singleTask.length === 0 ? (
          <div className="flex items-center justify-center h-[400px]">
            <p className="text-center font-medium my-5">
              No Tasks in {title}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 h-[400px] overflow-y-auto pr-1">
            {singleTask.map((task: TaskList) => (
              <div className="bg-white rounded-md p-4" key={task.id}>
                <div className="flex flex-wrap justify-between items-start md:items-center gap-5">
                  {/* Task */}
                  <div className="w-[80%]">
                    <p className="Grid_text text-sm md:text-base">{task.task}</p>
                  </div>

                  {/* More Button */}
                  <div className="w-[10%] flex justify-end relative">
                    <MdMoreHoriz size={25} className="cursor-pointer" onClick={() => handleMore(task.id)} />
                    {more === task.id && <MorePopUp id={task.id} />}
                  </div>

                  {/* Category */}
                  <div className="w-[65%] text-sm text-gray-600 mt-2 md:mt-0">
                    {task.category}
                  </div>

                  {/* Due Date */}
                  <div className="w-[20%] text-right text-sm text-gray-500 md:basis-auto">
                    {format(new Date(task.duedate), "dd/MM/yyyy")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
