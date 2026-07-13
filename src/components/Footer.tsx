import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white dark:bg-dark-950 border-t border-dark-100 dark:border-dark-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-dark-600 dark:text-dark-300 text-sm">
              &copy; {currentYear} Subramanya Jagadeesh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-dark-600 dark:text-dark-300 text-sm">
            <span>Built with</span>
            <Heart className="mx-1 text-dark-900 dark:text-white" size={16} />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
