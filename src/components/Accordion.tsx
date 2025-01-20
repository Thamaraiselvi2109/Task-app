import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdMoreHoriz, MdDragIndicator } from "react-icons/md";
import { format } from "date-fns";
import { AccordionProps, TaskList } from "../modal/modal";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { AccordionClick } from "../Redux/Slices/accordionopenSlice";
import { useState } from "react";
import { StatusPopup, MorePopUp } from "./SelectPopUp";
import { Addbtn } from "./Addbtn";

export const Accordion = ({ singleTask, title }: AccordionProps) => {
    const dispatch = useAppDispatch();
    const open = useSelector((state: RootState) => state.accordionopen.Accordion[title]);

    const [more, setMore] = useState<string | null>(null); // State to track which task's pop-up is open
    const [status, setStatus] = useState<string | null>(null);

    const handleMore = (id: string) => {
        setMore(more === id ? null : id); // Toggle the pop-up for the clicked task
    };
    const handleStatus = (id: string) => {
        setStatus(status === id ? null : id);
    }

    return (
        <div className="flex flex-col rounded-lg my-5">
            <div className="Accordion">
                {/* Accordion Header */}
                <button className={`btn ${title === "Todo" ? "bg-pink" : title === "Onprogress" ? "bg-blue" : title === "Completed" ? "bg-green" : null}`} onClick={() => dispatch(AccordionClick({ title }))} >
                    <span className="accor_title">  {title} ({singleTask.length})</span>
                    <span>{open ? <FaAngleUp color="#7B1984" /> : <FaAngleDown color="#7B1984" />}</span>
                </button>

                {/* Accordion Content with Smooth Transition */}
                <div className={`transition-max-height duration-500 ease-in-out lg:px-3 px-2 bg-gray  ${open ? "py-5 max-h-[500px]" : "max-h-0"}`} >
                    {title === "Todo" ? <Addbtn /> : null}

                    {singleTask.length === 0 ? (<p className="text-center font-medium py-5">No Tasks in {title}</p>) : (
                        singleTask.map((task: TaskList) => (

                            <div key={task.id} className="single_accor">
                                {/* task col */}
                                <div className="w-[80%] md:w-[50%]  flex items-center">
                                    {/* Selected */}
                                    <input type="checkbox" checked={task.isSelected} onChange={() => { }} className="mr-2" />

                                    {/* Drag */}
                                    <MdDragIndicator />

                                    {/* Done */}
                                    <input type="radio" checked={task.isDone} onChange={() => { }} className="ml-2 mr-2" />

                                    {/* Task */}
                                    <p className={`table_text ${title === 'Completed' ? 'line-through' : ''}`}>{task.task}</p>

                                    </div>

                                {/* Due Date */}
                                <div className="lg:w-[15%] table_text mbl_lay_hidden">
                                    {format(new Date(task.duedate), "dd/MM/yyyy")}
                                </div>

                                {/* Status */}
                                <div className="lg:w-[10%] md:w-[15%] relative md:text-center lg:text-start mbl_lay_hidden">
                                    <button className="bg-[#DDDADD] px-[5px] py-[3px] table_text rounded-md" onClick={() => handleStatus(task.id)}>{task.status}</button>
                                    {/* status popup */}
                                    {status === task.id && (
                                        <StatusPopup id={task.id} />
                                    )}
                                </div>

                                {/* Category */}
                                <div className="w-[10%] table_text md:text-center mbl_lay_hidden">
                                    <button>{task.category}</button>
                                </div>

                                {/* More Button and Pop-up */}
                                <div className="w-[10%] flex justify-end relative">
                                    <MdMoreHoriz size={25} className="cursor-pointer" onClick={() => handleMore(task.id)} />
                                    {more === task.id && (
                                        <MorePopUp id={task.id} />
                                    )}
                                </div>

                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
