import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

// Components
import SectionTransition from '../components/ui/SectionTransition';

const NotFound = () => {
  return (
    <SectionTransition>
      <section className="h-screen flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-dark-600 dark:text-dark-300 max-w-md mx-auto mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home className="mr-2" size={20} />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </SectionTransition>
  );
};

export default NotFound;