import React, { useState } from 'react';
import { Search, Droplet, Moon, Settings, Menu } from 'lucide-react';
import WalletConnect from './WalletConnect';

const mobileNavbarStyles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1a1b1ee0',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  inputField: {
    backgroundColor: '#2c2d30',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 10px', // Smaller padding for a smaller search bar
    color: 'white',
    width: '80%', // Smaller width
    maxWidth: '300px', // Adjusted max width
  },
  mobileIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Smaller gap between icons
  },
  menuIcon: {
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'absolute',
    top: '60px',
    right: '20px',
    backgroundColor: '#1a1b1e',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 1000,
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Gap between connect button and menu icon
  },
};

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={mobileNavbarStyles.navbar}>
      <div style={mobileNavbarStyles.inputContainer}>
        <input
          type="text"
          placeholder="Search .sol domain"
          style={mobileNavbarStyles.inputField}
        />
        <Search style={{ marginLeft: '-30px', color: '#6b7280' }} size={20} />
      </div>
      
      <div style={mobileNavbarStyles.menuButtonContainer}>
        <div style={mobileNavbarStyles.userProfile}>
          <WalletConnect />
        </div>
        <div style={mobileNavbarStyles.menuIcon} onClick={toggleMenu}>
          <Menu size={24} />
        </div>
      </div>

      {menuOpen && (
        <div style={mobileNavbarStyles.mobileMenu}>
          <div style={mobileNavbarStyles.menuItem}>
            <Droplet size={24} />
            <span> Faucet</span>
          </div>
          <div style={mobileNavbarStyles.menuItem}>
            <Moon size={24} style={{ cursor: 'pointer' }} />
            <span> Toggle</span>
          </div>
          <div style={mobileNavbarStyles.menuItem}>
            <Settings size={24} style={{ cursor: 'pointer' }} />
            <span> Settings</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;