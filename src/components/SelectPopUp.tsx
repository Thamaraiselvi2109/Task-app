import { MdEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { RemoveTaskAction, UpdateTaskStatus } from "../Redux/Slices/taskSlice";
import { StatusProps } from "../modal/modal";

interface MorePopUpProps {
    id: string;
}

export const MorePopUp: React.FC<MorePopUpProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="selectpop right-6 -bottom-9 gap-2 ">
                <button><MdEdit /><span>Edit</span></button>
                <button className="text-red" onClick={() => dispatch(RemoveTaskAction(id))}><MdDeleteSweep /><span>Delete</span></button>
            </div>
        </>
    )
}


export const StatusPopup: React.FC<MorePopUpProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    
    const handleStatus = (status: StatusProps) => {
        dispatch(UpdateTaskStatus({ id, status }));
    };

    return (
        <>
            <div className="selectpop left-7">
                <button onClick={() => handleStatus("Todo")}>Todo</button>
                <button onClick={() => handleStatus("Onprogress")}>Onprogress</button>
                <button onClick={() => handleStatus("Completed")}>Completed</button>
            </div>
        </>
    )
}


export const CategoryPopup = () => {
    return (
        <>
            <div className="selectpop p-3 gap-2 left-7 -bottom-16">
                <button>Work</button>
                <button>Personal</button>
            </div>
        </>
    )
}
