import { CONTACT } from "../constant";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h1
        className="my-10 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>
      <motion.div
        className="text-center tracking-tighter"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={CONTACT.email} className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
