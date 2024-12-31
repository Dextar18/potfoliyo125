import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{
        background: "linear-gradient(90deg, #D2042D, #001F54)", // Cherry Red to Navy Blue Gradient
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{
          backgroundColor: "#F8F9FA", // Off-White Background
        }}
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3
          className="text-center text-[20px] font-bold"
          style={{
            color: "#D2042D", // Cherry Red Text
          }}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={styles.sectionSubText}
          style={{
            color: "#001F54", // Navy Blue Text
          }}
        >
          Introduction
        </p>
        <h2
          className={styles.sectionHeadText}
          style={{
            color: "#D2042D", // Cherry Red Text
          }}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] max-w-3xl leading-[30px]"
        style={{
          color: "#001F54", // Navy Blue Text
        }}
      >
        I am a Computer engineer with knowledge in front-end development, and
        strong leadership, analytical, and communication skills gained from
        volunteering and leadership activities. I also have one year of
        experience as a content specialist where I applied my creativity and
        adaptability skills to overcome challenges.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
