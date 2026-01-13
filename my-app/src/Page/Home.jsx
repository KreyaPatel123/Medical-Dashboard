import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import DropdownMenu from "../Components/DropdownMenu";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import ChartComponent from "../Components/ChartComponent";
import DepartmentDonutChart from "../Components/DepartmentDonutChart";
import Footer from "../Components/Footer";

const Home = () => {
    // State to control the visibility of the sidebar (DropdownMenu)
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Default to open as per requirement
    // State to control the theme (light or dark)
    const [theme, setTheme] = useState('light'); // Default theme is light

    const toggleSidebar = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Define theme-dependent classes
    const themeClasses = {
        light: {
            background: 'bg-[#DEDEDE]', // Main background
            cardBackground: 'bg-white', // Card backgrounds
            textColor: 'text-gray-900', // Default text color
            headingColor: 'text-blue-900', // Dashboard heading color
            subHeadingColor: 'text-gray-400', // Sub-heading color
            borderColor: 'border-gray-300', // Border color for boxes
        },
        dark: {
            background: 'bg-gray-800',
            cardBackground: 'bg-gray-700',
            textColor: 'text-gray-100',
            headingColor: 'text-blue-300',
            subHeadingColor: 'text-gray-300',
            borderColor: 'border-gray-600',
        }
    };

    const currentTheme = themeClasses[theme];

    return (
        <div className={`${currentTheme.background} min-h-screen flex flex-col`}>
            <div className={`${currentTheme.cardBackground}`}>
                {/* Pass the toggleSidebar and toggleTheme functions to Navbar */}
                <Navbar toggleMenu={toggleSidebar} toggleTheme={toggleTheme} />
            </div>

            {/* Main content area: flex row for sidebar and dashboard */}
            <div className="flex flex-row flex-grow">

                {/* Left Sidebar - Conditional rendering based on isMenuOpen */}
                <div className={`
                    ${currentTheme.cardBackground} rounded-tr-[50px] rounded-br-[50px] mt-5 mb-5 ml-5 shadow-lg
                    transform transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'w-[20%] translate-x-0' : 'w-0 -translate-x-full overflow-hidden'}
                `}>
                    {/* DropdownMenu content can also adapt to theme if needed */}
                    <DropdownMenu theme={theme} />
                </div>

                {/* Right Main Content Area - Adjust width based on sidebar state */}
                <div className={`
                    flex flex-col m-5 transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'w-[80%]' : 'w-full'}
                `}>
                    {/* [1]-----------------> One box */}
                    <div className="w-full flex flex-row rounded-lg items-center mt-5">
                        <h1 className={`${currentTheme.headingColor} text-xl font-bold`}>Dashboard</h1>
                        <MdKeyboardArrowRight className={`${currentTheme.headingColor} flex items-center w-8 h-6`} />
                        <p className={`${currentTheme.textColor} text-lg font-bold`}>Admin Dashboard</p>
                    </div>

                    {/* [2]-------------------> Two box */}
                    <div className={`w-full h-fit mt-5 rounded-lg p-8 pt-16 pb-16 relative flex flex-row ${currentTheme.cardBackground}`}>
                        <div className="flex flex-col">
                            <h1 className={`text-3xl font-bold mb-2 ${currentTheme.textColor}`}>Good Morning,<span className={`${currentTheme.headingColor}`}> Daniel Bruk</span></h1>
                            <p className={`${currentTheme.subHeadingColor} font-bold `}>Have a nice day at work</p>
                        </div>
                        <div>
                            <img src="../th-pica.png" alt="image" className="w-[320px] absolute h-[190px] right-[3px] top-[3px] " />
                            <img src="../leaves1.png" alt="image" className="absolute bottom-1 right-[265px] h-[200px] " />
                        </div>
                    </div>

                    {/* [3]-------------------->Thired box*/}
                    <div className="w-full h-fit flex flex-row mt-5 rounded-lg ">
                        {/* boxxxxxxx-1 */}
                        <div className={`w-[25%] h-fit rounded-lg ${currentTheme.cardBackground} flex flex-col p-5 mt-5 mb-10 mr-5`}>
                            <div className={`w-[50px] h-[50px] flex items-center justify-center bg-gray-200 ${currentTheme.borderColor} rounded-lg `}>
                                <FaCalendarAlt className="w-[30px] h-[30px] flex items-center justify-center text-blue-900" />
                            </div>
                            <h1 className={`${currentTheme.textColor} text-2xl font-bold mt-4 mb-8`}>Appointments</h1>
                            <p className={`${currentTheme.headingColor} font-bold text-4xl mb-10`}>250</p>
                            <div className="flex flex-row items-center ">
                                <MdArrowOutward className="w-6 h-6 mr-2 text-green-600" />
                                <p className="text-xl text-green-600 font-bold">40% </p>
                                <span className="text-[15px] font-bold text-gray-600 m-2">VS</span>
                                <p className="text-[20px] text-gray-600 ">last month</p>
                            </div>
                        </div>

                        {/* boxxxxxxx-2 */}
                        <div className={`w-[25%] h-fit rounded-lg ${currentTheme.cardBackground} flex flex-col p-5 mt-5 mb-10 mr-5`}>
                            <div className={`w-[50px] h-[50px] flex items-center justify-center bg-gray-200 ${currentTheme.borderColor} rounded-lg `}>
                                <CgProfile className="w-[30px] h-[30px] flex items-center justify-center text-blue-900" />
                            </div>
                            <h1 className={`${currentTheme.textColor} text-2xl font-bold mt-4 mb-8`}>Nwe Patients</h1>
                            <p className={`${currentTheme.headingColor} font-bold text-4xl mb-10`}>140</p>
                            <div className="flex flex-row items-center ">
                                <MdArrowOutward className="w-6 h-6 mr-2 text-green-600" />
                                <p className="text-xl text-green-600 font-bold">20% </p>
                                <span className="text-[15px] font-bold text-gray-600 m-2">VS</span>
                                <p className="text-[20px] text-gray-600 ">last month</p>
                            </div>
                        </div>

                        {/* boxxxxxxx-3 */}
                        <div className={`w-[25%] h-fit rounded-lg ${currentTheme.cardBackground} flex flex-col p-5 mr-5 mt-5 mb-10`}>
                            <div className={`w-[50px] h-[50px] flex items-center justify-center bg-gray-200 ${currentTheme.borderColor} rounded-lg `}>
                                <MdMedicalServices className="w-[30px] h-[30px] flex items-center justify-center text-blue-900" />
                            </div>
                            <h1 className={`${currentTheme.textColor} text-2xl font-bold mt-4 mb-8`}>Operations</h1>
                            <p className={`${currentTheme.headingColor} font-bold text-4xl mb-10`}>56</p>
                            <div className="flex flex-row items-center ">
                                <MdArrowOutward className="w-6 h-6 mr-2 text-red-600" />
                                <p className="text-xl text-red-600 font-bold">15% </p>
                                <span className="text-[15px] font-bold text-gray-600 m-2">VS</span>
                                <p className="text-[20px] text-gray-600 ">last month</p>
                            </div>
                        </div>

                        {/* boxxxxxxx-4 */}
                        <div className={`w-[25%] h-fit rounded-lg ${currentTheme.cardBackground} flex flex-col p-5 mt-5 mb-10`}>
                            <div className={`w-[50px] h-[50px] flex items-center justify-center bg-gray-200 ${currentTheme.borderColor} rounded-lg `}>
                                <FaMoneyBillWave className="w-[30px] h-[30px] flex items-center justify-center text-blue-900" />
                            </div>
                            <h1 className={`${currentTheme.textColor} text-2xl font-bold mt-4 mb-8`}>Earnings</h1>
                            <p className={`${currentTheme.headingColor} font-bold text-4xl mb-10`}>$20,250</p>
                            <div className="flex flex-row items-center ">
                                <MdArrowOutward className="w-6 h-6 mr-2 text-green-600" />
                                <p className="text-xl text-green-600 font-bold">lastmonth</p>
                                <span className="text-[15px] font-bold text-gray-600 m-2">last month</span>
                                <p className="text-[20px] text-gray-600 ">last month</p>
                            </div>
                        </div>
                    </div>

                    {/* [4]---------------------->Four box */}
                    <div className="w-full h-[450px] rounded-lg flex flex-row justify-between">
                        <div className={`w-[1000px] h-[450px] ${currentTheme.cardBackground} border rounded-[15px]`}><ChartComponent /></div>
                        <div className={`w-[480px] h-[450px] ${currentTheme.cardBackground} rounded-[15px]`}><DepartmentDonutChart /></div>
                    </div>
                </div>
            </div>

            <div className="bg-red-400"> {/* Footer might need theme adjustment too */}
                <Footer />
            </div>
        </div>
    );
};

export default Home;