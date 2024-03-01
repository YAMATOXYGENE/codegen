import React, { useContext } from 'react';
import { HiArrowSmRight, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { Sidebar } from 'flowbite-react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import AuthContext from './AuthContext';

function SidebarContainer() {
  const { logoutUser } = useContext(AuthContext); // Destructure logoutUser from context
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="sidebar-container">
      <Sidebar aria-label="sidebar-Sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <Link to="/ProfilePage" className="sidebar-button">
                <HiUser className="sidebar-icon" /> Profile
              </Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to="/Codegen" className="sidebar-button">
                <HiShoppingBag className="sidebar-icon" /> Code generator
              </Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to="/Appassociation" className="sidebar-button">
                <HiArrowSmRight className="sidebar-icon" /> App associations
              </Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to="/Home" className="sidebar-button" onClick={() => {logoutUser(); navigate('/login')}}>
                <HiTable className="sidebar-icon" /> Logout
              </Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <a href="/afterlogin" className="sidebar-logo-link">
        <img src="https://i.imgur.com/oa40D0x.png" alt="Logo" className="sidebar-logo" />
      </a>
    </div>
  );
}

export default SidebarContainer;
