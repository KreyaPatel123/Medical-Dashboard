import { HiMenuAlt3 } from "react-icons/hi";
import { RiSearch2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { HiBell } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

// Navbar now receives prop for toggling sidebar and theme
const Navbar = ({ toggleMenu, toggleTheme }) => {
    return (
        <div>
            <nav className="w-full h-fit flex justify-between p-4 bg-blue-900 ">
                <div className="flex flex-row items-center justify-center">
                    <img src="../image.png" className="w-10 h-10 mr-3" alt="Pre Clinic Logo" />
                    <p className="text-white text-3xl font-bold">Pre Clinic</p>

                    <div className="ml-12 mr-5">
                        <HiMenuAlt3
                            className="w-8 h-8 text-white cursor-pointer"
                            onClick={toggleMenu} // Call the prop function to toggle the sidebar
                        />
                    </div>

                    <div className="w-[300px] h-fit border p-3 flex flex-row items-center rounded-[10px] bg-gray-200">
                        <RiSearch2Fill className="mr-2 w-6 h-6 text-gray-600" />
                        <input type="text" placeholder="search here" className="bg-transparent text-[18px] focus:outline-none w-full" />
                    </div>

                </div>

                <div className="flex flex-row items-center">
                    {/* icon-1 */}
                    <div className="flex flex-row items-center ml-7 relative">
                        <MdEmail className="w-8 h-8 text-white" />
                        <div className="w-4 h-4 rounded-full bg-gray-200 absolute top-[10px] right-0 shadow-[0_0_14px_12px_rgba(220,220,220,0.8)]"></div>
                    </div>

                    {/* icon-2 */}
                    <div className="flex flex-row items-center ml-7 relative">
                        <HiBell className="w-8 h-8 text-white" />
                        <div className="w-4 h-4 rounded-full bg-gray-200 absolute top-[10px] right-0 shadow-[0_0_14px_12px_rgba(220,220,220,0.8)]"></div>
                    </div>

                    {/* text */}
                    <div className="flex flex-col ml-10">
                        <h1 className="text-yellow-300 font-bold text-xl ">Liam Michael aa</h1>
                        <h2 className="text-yellow-300 flex justify-end text-xl font-bold">Action</h2>
                    </div>

                    {/* box */}
                    <div className="flex items-center ml-5">
                        <div className="w-10 h-10 rounded-[10px] bg-gray-300 border-2 border-gray-400 flex items-center justify-center"></div>
                    </div>

                    <div className="flex items-center ml-8 mr-4">
                        <AiFillSetting
                            className="w-8 h-8 text-white cursor-pointer"
                            onClick={toggleTheme} // Call the prop function to toggle the theme
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;