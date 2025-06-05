import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = "najiyanazrincn@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${form.name.valueOf}\nEmail: ${form.email.value}\nMessage: ${form.message.value}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center">
                <Mail className="text-brown-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown-900">Email</h3>
                <p className="text-brown-700">najiyanazrincn@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center">
                <Phone className="text-brown-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown-900">Phone</h3>
                <p className="text-brown-700">+91 6282371167</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center">
                <MapPin className="text-brown-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown-900">Location</h3>
                <p className="text-brown-700">Ernakulam, Kerala, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brown-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-brown-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-brown-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-brown-600 hover:bg-brown-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center w-full"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;