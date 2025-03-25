import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs
      .sendForm(
        'service_pfyt2mk', 
        'template_kbb2e3e', 
        formRef.current, 
        {
          publicKey: '4SsV5x7xDWBvwTBTb',
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus({
            submitted: true,
            success: true,
            message: 'Your message has been sent successfully!'
          });
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({
            submitted: true,
            success: false,
            message: `Failed to send message: ${error.text || 'Unknown error'}`
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Me 
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <a href="mailto:isurushehan450@gmail.com" className="text-gray-600 hover:text-indigo-600">
                      isurushehan450@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <a href="tel:+94773045073" className="text-gray-600 hover:text-indigo-600">
                      +94 773045073
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">
                      Algama,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            {status.submitted && (
              <div className={`mb-6 p-4 rounded-lg ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
