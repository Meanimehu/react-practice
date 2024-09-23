import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState({});

  const handleToggle = (menu) => {
    const newIsOpen = {};
    for (let key in isOpen) {
      newIsOpen[key] = false;
    }
    newIsOpen[menu] = !isOpen[menu];
    setIsOpen(newIsOpen);
  };


  return (
    <div className="h-screen w-64 bg-gray-800 text-gray-200 flex flex-col justify-between sidebar">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold p-4">ProLOG</h1>
        <ul className="flex flex-col  max-h-[500px] overflow-y-scroll">
          {[
            { name: "projects", icon: "fas fa-folder", label: "Projects" },
            { name: "issues", icon: "fas fa-bug", label: "Issues" },
            {
              name: "alerts",
              icon: "fas fa-exclamation-triangle",
              label: "Alerts",
            },
            { name: "users", icon: "fas fa-user", label: "Users" },
            { name: "settings", icon: "fas fa-cog", label: "Settings" },
            { name: "home", icon: "fas fa-user", label: "Menu" },
            { name: "about", icon: "fas fa-cog", label: "About" },
            { name: "contacts", icon: "fas fa-user", label: "Contact" },
            { name: "projects", icon: "fas fa-cog", label: "Project" },
          ].map((menu) => (
            <li key={menu.name} className="relative">
              <div
                onClick={() => handleToggle(menu.name)}
                className="py-2 px-4 hover:bg-gray-700 flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center">
                  <i className={`${menu.icon} mr-2`}></i>
                  {menu.label}
                </div>
                <i
                  className={`fas fa-chevron-down transition-transform duration-300 ${
                    isOpen[menu.name] ? "rotate-180" : ""
                  }`}
                ></i>
              </div>
              {isOpen[menu.name] && (
                <ul className="bg-gray-800 pl-8 py-2">
                  {["1", "2", "3"].map((item) => (
                    <li key={item} className="py-2 px-4 hover:bg-gray-700">
                      {menu.label} {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          <i className="fas fa-question-circle mr-2"></i>
          Support
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
          <i className="fas fa-arrow-left mr-2"></i>
          Collapse
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
