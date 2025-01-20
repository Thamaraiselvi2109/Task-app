import { useState } from "react";
import { CategoryPopup } from "./SelectPopUp";

export const FilterComponent = () => {
    const [categoryOpen, setCategoryOpen] = useState<Boolean>(false)
    return (
        <>
            <div className="FilterComponent">
                <p className="texts pr-2">Filtered by :</p>
                <div className="relative">
                <button className="filter_btn relative" onClick={()=>setCategoryOpen(!categoryOpen)}>Categories</button>
                {categoryOpen ? <CategoryPopup/> : null}
                </div>
                <button className="filter_btn">Due Date</button>
            </div>
        </>
    )
};