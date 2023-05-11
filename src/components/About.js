import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="hidden lg:flex max-w-[320px] lg:max-w-[500px] flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1"
            >
            <h2 className="h2 text-accent">About me!</h2>
            <h3 className="h3 mb-4 ">
              I'm a freelancer front-end Developer with over 6 monnth of
              experience.
            </h3>
            <p className="mb-6">
              lorum ipsum dolor sit amet con lorem ips lorum ipsum dolor sit
              amet con lorem ipslorum ipsum dolor sit amet con lorem ipslorum
              ipsum dolor sit amet con lorem ips
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiarey text-gradient mb-2">
                  {InView ? <CountUp start={0} end={6} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiarey text-gradient mb-2">
                  {InView ? <CountUp start={0} end={15} duration={7} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiarey text-gradient mb-2">
                  {InView ? <CountUp start={0} end={8} duration={6} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> client
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
