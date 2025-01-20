import { BoardOrList } from './BoardOrList'
import { FilterComponent } from './FilterComponent'
import { LogOut } from './LogOut'
import { SearchAddBtn } from './SearchAddBtn'





export const Navbar = () => {
    return (
        <>
            <div className=" bg-pastel lg:bg-[#ffffff] shadow-md lg:shadow-none">
                <div className="cont flex justify-between  px-2 pt-5 pb-2 lg:pb-0 ">
                    <BoardOrList />
                    <LogOut />
                </div>
            </div>
            <div className='cont'>
                <div className="flex justify-between px-2 py-4 gap-3 flex-wrap md:flex-nowrap">
                    <FilterComponent />
                    <SearchAddBtn />
                </div>
                <hr />
            </div>
        </>
    )
}