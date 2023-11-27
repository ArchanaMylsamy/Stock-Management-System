import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import Logo from "../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            St<span>o</span>cks
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              {item.path ? (
                <Link to={item.path} className="custom-link">
                  <>
                    <item.icon />
                    <span>{item.heading}</span>
                  </>
                </Link>
              ) : (
                <>
                  <item.icon />
                  <span>{item.heading}</span>
                </>
              )}
            </div>
          ))}
          {/* signoutIcon */}
          <Link to="/Login">
            <div className="menuItem">
              <UilSignOutAlt />
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
