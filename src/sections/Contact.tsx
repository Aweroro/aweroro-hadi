import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (This is just a placeholder, integrate with an API)");
  };

  return (
    <section id="contact" className="bg-primary text-text py-16 px-4">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row px-4 gap-10 justify-between">
        <motion.div
            className="flex flex-col gap-4 max-w-xs lg:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-lg font-bold">Let's connect!</h1>
            <p>
                I am always eager to explore new opportunities that allow me to grow and apply my skills in delivering high-quality technology solutions. 
                If you have a proposal or would like to connect, feel free to reach out.
            </p>
          
        </motion.div>
        <motion.form
          className="bg-secondary p-6 rounded-lg w-full max-w-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-md mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-primary border border-text text-text focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-primary border border-text text-text focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-primary border border-text text-text focus:outline-none focus:ring-2 focus:ring-accent h-32"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-accent text-primary font-bold py-2 rounded-lg hover:bg-opacity-80 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
