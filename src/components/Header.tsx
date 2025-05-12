import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const Header = ({ toggleTheme, currentTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    // Reset scroll position of mobile menu when opening
    if (!isMenuOpen) {
      setTimeout(() => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.scrollTop = 0;
        }
      }, 0);
    }
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up overflow style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/subramanyaJagadeesh', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/subramanyajagadeesh', label: 'LinkedIn' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold relative z-20">
          <span className="text-primary-600 dark:text-primary-400">SJ</span>
          <span className="text-dark-900 dark:text-white">.dev</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `relative font-medium text-base transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-dark-800 dark:text-dark-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span 
                          layoutId="underline"
                          className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-primary-600 dark:bg-primary-400" 
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full text-dark-800 dark:text-dark-100 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
          >
            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full text-dark-800 dark:text-dark-100 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
          >
            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="relative z-20 text-dark-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="fixed inset-0 bg-white dark:bg-dark-900 z-10 md:hidden overflow-y-auto"
            style={{ top: '0', height: '100vh' }}
          >
            <div className="flex flex-col items-center justify-center min-h-full py-20">
              <ul className="flex flex-col items-center space-y-8 mb-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `text-2xl font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                          isActive 
                            ? 'text-primary-600 dark:text-primary-400' 
                            : 'text-dark-800 dark:text-dark-100'
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-8">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;