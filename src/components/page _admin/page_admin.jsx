import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importer Link pour la navigation
import { Home, User, MessageSquare, Menu } from "lucide-react";
import "./page_admin.css";

const PageAdmin1 = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/Shop" },
    { name: "User", icon: <User size={20} />, path: "/UserTable" },
    { name: "box", icon: <MessageSquare size={20} />, path: "/OrdersAdmin" },
 
    
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name} className="menu-item">
            <Link to={item.path} className="menu-link">  {/* Utilisation du Link pour la navigation */}
              {item.icon}
              {isOpen && <span className="menu-text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && <div className="profile">👤 User Profile</div>}
    </div>
  );
};

export default PageAdmin1;
