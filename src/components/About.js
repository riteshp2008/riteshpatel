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
              I am skilled in Core Java, MySQL, Hibernate, SpringBoot, HTML,
              CSS, JavaScript, Node.js, React.js.
            </h3>
            <p className="mb-6">
              In the past, I have worked on projects based on IoT in which I
              worked with the front-end team. In addition to my development
              work, I am skilled in troubleshooting problems and resolving bugs
              within an existing system.
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
                  {InView ? <CountUp start={0} end={7} duration={6} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiarey text-gradient mb-2">
                  {InView ? <CountUp start={0} end={5} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  certificates <br /> Earned
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="https://wa.me/+918085678460?text=Hi">
                <button className="btn btn-lg">Contact me</button>
              </a>
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
