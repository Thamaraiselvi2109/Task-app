import { useState } from "react";
import { AddTaskPopUp } from "./AddTaskPopUp";


export const SearchAddBtn = () => {
    const [entry, setEntry] = useState<boolean>(false);

    const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const closePopup = () => {
        setEntry(false);
    };

    return (
        <>
            <div className="SearchComponent">
                <form onSubmit={searchSubmit}>
                    <input type="search" className="searchInput border p-2" placeholder="Search Here ..." />
                </form>
                <button className="Add_btn bg-blue-500 text-white px-4 py-2" onClick={() => setEntry(true)}> Add Task </button>
            </div>
            {entry && (
                <div className="PopupOverlay">
                    <AddTaskPopUp onClose={closePopup} />
                </div>
            )}
        </>
    );
};
