"use client"
import { useState, useEffect } from 'react';
import Navbar from '@/component/Navbar';
import Background from '../component/Background';
import Dashboard from '../component/Dashboard';
import MobileDashboard from '../component/MobileDashboard';

// Custom hook to detect screen size and device type
const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Adjust this breakpoint as needed
    };

    // Check on initial render
    checkDevice();

    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useDeviceDetect();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {isClient && (
        <>
          {isMobile ? <MobileDashboard /> : <Dashboard />}
        </>
      )}
    </div>
  );
}