import React from 'react';
import Link from 'next/link';
import { FaHome,  FaBriefcase, FaCalendarAlt, FaComments } from 'react-icons/fa';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface MenuSection {
  list: MenuItem[];
}

const Sidebar: React.FC = () => {
  const menuItems: MenuSection[] = [
    {
      list: [
        { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
        // { title: "Meeting Room", path: "/meeting-room", icon: <FaMeeting /> },
        { title: "Projects", path: "/projects", icon: <FaBriefcase /> },
        { title: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
        { title: "Chat", path: "/chat", icon: <FaComments /> },
      ],
    },
  ];

  return (
    <nav className="bg-teal-950 text-white p-4">
      <h1 className='text-3xl text-blue-600 p-3'>LetsMeet</h1>
      {menuItems.map((section, index) => (
        <div key={index} className="mb-8 py-3">
          {section.list.map((item, itemIndex) => (
            <Link key={itemIndex} href={item.path}>
              <div className="flex items-center mb-4 hover:underline">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
