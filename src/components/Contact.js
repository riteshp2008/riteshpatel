import React, { useRef } from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";


const Contact = () => {

  const form = useRef();
  const sendMail = async (e) => {
    e.preventDefault();
    // get the form data
    const { name, email, message } = e.target.elements;

    console.log(e.target)

    try {
      // send the email using EmailJS
      const result = await emailjs.sendForm(
        "service_qyt9jec",
        "template_cbanyqe",
         form.current,
        "uqmq_qH6dURI7d3QS"
      );

      console.log(result.text);
      // show a success message to the user
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
      // show an error message to the user
      toast.error("An error occurred, Please try again");
    }
  };
  
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1 flex justify-start items-start"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={sendMail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="from_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your mail"
              name="email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button 
            type="submit"
            className="btn btn-sm">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
