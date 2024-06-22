import React from "react";
//image
// import Image from "../assets/avatar.svg";
//icons
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-0 lg:flex-row lg:items-center lg:gap-x-10">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] font-bold leading-[0.8] lg:text-[85px]"
            >
              RITESH <span>PATEL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-5 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              As an aspiring software developer, I am equipped with foundational
              skills in programming languages such as JavaScript and proficiency
              in web development technologies, including React.js, Next.js,
              Redux, Node.js, Express.js and MongoDB. Eager to contribute my
              enthusiasm and learnings to dynamic teams, I am committed to
              continuous growth and delivering innovative solutions !
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-7 max-w-max items-center mb-10 mx-auto lg:mx-0"
            >
              <a href="https://wa.me/+918085678460?text=Hi">
                <button className="btn btn-lg">Contact me</button>
              </a>
              <a
                href="./ResumeRitesh.pdf"
                className="text-gradient btn-link"
                download="ResumeRitesh.pdf"
              >
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-8 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/ri.teshhh/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/ri_teshhh">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/riteshpatel2008/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px]"
          >
            <img src="/images/avatar3.svg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
