import { ABOUT_TEXT } from "../constant";
import ProfilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl ">
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
      </div>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={ProfilePic} className="rounded-2xl" alt="logo image" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
