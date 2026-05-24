import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // IMPORTANTE: Para que este formulario te envíe correos a ti,
    // debes registrarte en https://www.emailjs.com/ y reemplazar
    // los parámetros de abajo con tus propios IDs:
    // .sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form.current, 'TU_PUBLIC_KEY')
    emailjs
      .sendForm('service_6jqypys', 'template_yaaoluw', form.current, 'ly_nVFO9rdZJp_bHB')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const inputVariants = {
    focus: { scale: 1.05, borderColor: '#a855f7', transition: { duration: 0.3 } }, // purple-500
    hover: { scale: 1.02, borderColor: '#4b5563', transition: { duration: 0.3 } }, // gray-600
    initial: { scale: 1, borderColor: '#1f2937' } // gray-800
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-md mx-auto glass-panel p-8 shadow-2xl">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            className="w-full p-3 border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder-neutral-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            placeholder="Your Name"
            name="your_name"
            aria-label="Your Name"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          />
          <motion.input
            type="email"
            className="w-full p-3 border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder-neutral-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            placeholder="Your Email"
            name="your_email"
            aria-label="Your Email"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          />
          <motion.textarea
            className="w-full p-3 border border-neutral-800 bg-neutral-950/70 text-neutral-100 placeholder-neutral-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            variants={inputVariants}
            initial="initial"
            whileFocus="focus"
            whileHover="hover"
          ></motion.textarea>
          <motion.button
            type="submit"
            value="Send"
            className="w-full p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
  };

export default EmailForm;
