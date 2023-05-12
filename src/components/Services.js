import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";

//motion
import {motion} from "framer-motion";

//variants
import { fadeIn } from "../variants";

//service data
const service = [
  {
    name: "Frontend Development",
    description:
      "A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.",
  },
  {
    name: "Backend Development",
    description:
      "Back-end development means working on server-side software, which focuses on everything you can't see on a website.",
  },
  {
    name: "Full Stack Development",
    description:
      "Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish.",
  },
  {
    name: "UX/UI Design",
    description:
      "UI/UX design aims to create a positive user experience that encourages customers to stick with a brand or product.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What i do...</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full Stack Developer with Good analytical and problem solving skills.
            </h3>
          </motion.div>
          {/* sevices */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {service.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[480px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
