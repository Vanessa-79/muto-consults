import { Outlet } from 'react-router-dom';
import  Navbar  from './Navbar';
import  Footer  from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}