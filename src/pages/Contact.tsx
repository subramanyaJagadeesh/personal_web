import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

// Components
import SectionTransition from '../components/ui/SectionTransition';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      label: 'Github', 
      url: 'https://github.com/subramanyajagadeesh',
      color: 'bg-[#333] hover:bg-[#24292e]'
    },
    { 
      icon: <Linkedin size={24} />, 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/subramanyajagadeesh',
      color: 'bg-[#0077B5] hover:bg-[#006097]'
    },
  ];

  return (
    <SectionTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-dark-600 dark:text-dark-300 text-lg mb-8">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-dark-600 dark:text-dark-300 mb-8">
                Feel free to contact me through any of these channels. I'm always open 
                to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:subramanyaj.msse@gmail.com" 
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      subramanyaj.msse@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-dark-600 dark:text-dark-300">
                      Santa Clara, California
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Connect on Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white rounded-lg p-3 transition-transform hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-900 rounded-lg p-4 text-green-800 dark:text-green-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="mt-1">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2" size={20} />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for a Developer?</h2>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto mb-8">
            I'm currently available for full-time opportunities. 
            If you're looking for a developer who can bring your ideas to life, let's talk!
          </p>
        </div>
      </section>
    </SectionTransition>
  );
};

export default Contact;