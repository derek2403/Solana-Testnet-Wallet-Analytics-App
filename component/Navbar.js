import React from 'react';
import { Search, Droplet, Moon, Settings } from 'lucide-react';
import WalletConnect from './WalletConnect';

const desktopNavbarStyles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
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
    padding: '8px 12px',
    color: 'white',
    width: '80%',
  },
  desktopIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
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
};

const Navbar = () => {
  return (
    <nav style={desktopNavbarStyles.navbar}>
      <div style={desktopNavbarStyles.inputContainer}>
        <input
          type="text"
          placeholder="Search .sol domain or any Solana address"
          style={desktopNavbarStyles.inputField}
        />
        <Search style={{ marginLeft: '-30px', color: '#6b7280' }} size={20} />
      </div>
      
      <div style={desktopNavbarStyles.desktopIcons}>
        <button style={desktopNavbarStyles.button}>
          <Droplet size={24} />
          Faucet
        </button>
        <Moon size={24} style={{ cursor: 'pointer' }} />
        <Settings size={24} style={{ cursor: 'pointer' }} />
        <div style={desktopNavbarStyles.userProfile}>
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
