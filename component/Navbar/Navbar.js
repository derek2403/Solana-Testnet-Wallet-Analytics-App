import React, { useState } from 'react';
import { Search, Droplet, Moon, Settings, Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import WalletConnect from '../WalletConnect';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search .sol domain"
          className={styles.inputField}
        />
        <Search style={{ marginLeft: '-30px', color: '#6b7280' }} size={20} />
      </div>
      
      <div className={styles.mobileIcons}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <Menu size={24} />
        </div>
        <div className={styles.userProfile}>
          <WalletConnect />
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.button}>
            <Droplet size={18} />
            Faucet
          </button>
          <Moon size={24} style={{ cursor: 'pointer' }} />
          <Settings size={24} style={{ cursor: 'pointer' }} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
