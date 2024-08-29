import Navbar from '@/component/Navbar/Navbar';
import Background from '../component/Background';
import Dashboard from '../component/Dashboard';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', fontFamily:"sans-serif" }}>
      <Background />
      <Navbar />
      <Dashboard />
    </div>
  );
}