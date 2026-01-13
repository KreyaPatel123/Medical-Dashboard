import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaUserDoctor, FaUsers } from 'react-icons/fa6';
import { FaUserNurse } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";

const DropdownMenu = ({ theme }) => { // Receive theme as a prop
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
    const [activeSubMenuItem, setActiveSubMenuItem] = useState('Admin Dashboard');

    const toggleDashboardDropdown = () => {
        setIsDashboardOpen(!isDashboardOpen);
        setActiveMenuItem('Dashboard');
    };

    const handleSubItemClick = (item) => {
        setActiveSubMenuItem(item);
        console.log(`Navigating to: ${item}`);
    };

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        setIsDashboardOpen(false);
        console.log(`Navigating to: ${item}`);
    };

    // Theme-dependent classes for DropdownMenu
    const dropdownThemeClasses = {
        light: {
            menuItemHover: 'hover:bg-gray-100',
            activeMenuItemBg: 'bg-blue-100',
            activeMenuItemText: 'text-blue-800',
            iconBg: 'bg-gray-200',
            mainTextColor: 'text-gray-500',
            itemTextColor: 'text-gray-600',
            subItemTextColor: 'text-gray-700',
            activeSubItemTextColor: 'text-blue-800',
        },
        dark: {
            menuItemHover: 'hover:bg-gray-700',
            activeMenuItemBg: 'bg-blue-900', // Darker blue for active in dark mode
            activeMenuItemText: 'text-white',
            iconBg: 'bg-gray-600',
            mainTextColor: 'text-gray-300',
            itemTextColor: 'text-gray-100',
            subItemTextColor: 'text-gray-200',
            activeSubItemTextColor: 'text-blue-400',
        }
    };

    const currentDropdownTheme = dropdownThemeClasses[theme];

    return (
        <div className="p-8 pt-28 h-full">
            <div className={`mb-6 font-semibold text-[22px] ml-10 ${currentDropdownTheme.mainTextColor}`}>Main</div>

            {/* Dashboard Dropdown */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Dashboard' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={toggleDashboardDropdown}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <LuLayoutDashboard className={`w-5 h-5 ${activeMenuItem === 'Dashboard' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Dashboard' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Dashboard</span>
                    {isDashboardOpen ? <MdKeyboardArrowDown className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} /> : <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />}
                </div>
                {isDashboardOpen && (
                    <ul className="mt-2 pl-4">
                        <li
                            className={`ml-8 p-2 cursor-pointer rounded-md ${currentDropdownTheme.menuItemHover} ${activeSubMenuItem === 'Admin Dashboard' ? currentDropdownTheme.activeSubItemTextColor + ' font-semibold' : currentDropdownTheme.subItemTextColor}`}
                            onClick={() => handleSubItemClick('Admin Dashboard')}
                        >
                            <span className='text-xl'> Admin Dashboard</span>
                        </li>
                        <li
                            className={`ml-8 p-2 cursor-pointer rounded-md ${currentDropdownTheme.menuItemHover} ${activeSubMenuItem === 'Doctor Dashboard' ? currentDropdownTheme.activeSubItemTextColor + ' font-semibold' : currentDropdownTheme.subItemTextColor}`}
                            onClick={() => handleSubItemClick('Doctor Dashboard')}
                        >
                            <span className='text-xl'> Doctor Dashboard </span>
                        </li>
                        <li
                            className={`ml-8 p-2 cursor-pointer rounded-md ${currentDropdownTheme.menuItemHover} ${activeSubMenuItem === 'Patient Dashboard' ? currentDropdownTheme.activeSubItemTextColor + ' font-semibold' : currentDropdownTheme.subItemTextColor}`}
                            onClick={() => handleSubItemClick('Patient Dashboard')}
                        >
                            <span className='text-xl'>Patient Dashboard</span>
                        </li>
                    </ul>
                )}
            </div>

            {/* Doctors */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Doctors' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Doctors')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FaUserDoctor className={`w-5 h-5 ${activeMenuItem === 'Doctors' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Doctors' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Doctors</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>

            {/* Patients */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Patients' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Patients')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FaUsers className={`w-5 h-5 ${activeMenuItem === 'Patients' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Patients' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Patients</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>

            {/* Staff */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Staff' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Staff')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FaUserNurse className={`w-5 h-5 ${activeMenuItem === 'Staff' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Staff' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Staff</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>

            {/* Appointments */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Appointments' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Appointments')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FaCalendarAlt className={`w-5 h-5 ${activeMenuItem === 'Appointments' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Appointments' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Appointments</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>

            {/* Doctor Schedule */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Doctor Schedule' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Doctor Schedule')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FaCalendarAlt className={`w-5 h-5 ${activeMenuItem === 'Doctor Schedule' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Doctor Schedule' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Doctor Schedule</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>

            {/* Departments */}
            <div className="mb-2 ml-5">
                <div
                    className={`flex items-center p-3 cursor-pointer rounded-md ${activeMenuItem === 'Departments' ? currentDropdownTheme.activeMenuItemBg : currentDropdownTheme.menuItemHover}`}
                    onClick={() => handleMenuItemClick('Departments')}
                >
                    <div className={`w-[50px] h-[50px] rounded-[10px] ${currentDropdownTheme.iconBg} flex items-center justify-center mr-3`}>
                        <FcDepartment className={`w-5 h-5 ${activeMenuItem === 'Departments' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`} />
                    </div>
                    <span className={`text-xl font-bold ${activeMenuItem === 'Departments' ? currentDropdownTheme.activeMenuItemText : currentDropdownTheme.itemTextColor}`}>Departments</span>
                    <MdKeyboardArrowRight className={`ml-auto w-8 h-8 ${currentDropdownTheme.itemTextColor}`} />
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;