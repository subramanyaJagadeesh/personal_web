import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero3DBackground from './ui/Hero3DBackground';

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Layout = ({ children, toggleTheme, currentTheme }: LayoutProps) => {
  return (
    <div className="relative isolate flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Hero3DBackground />
      </div>
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;