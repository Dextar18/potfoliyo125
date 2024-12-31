import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Certifications } from "../constants";

const FeedbackCard = ({
  index,
  Certificate,
  name,
  image,
  date,
  link,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-navy-500 p-10 rounded-3xl flex mt-5 w-full items-center '
    >
      <div className="block w-3/4">
        <p className='text-offWhite md:text-[32px] text-[24px] '>{Certificate}</p>
        <p className='mt-3 text-offWhite font-light md:text-[24px] text-[12px]'>
          <span className='cherryRed-gradient'></span> {name}
        </p>
        <p className='text-gray-300 font-xs md:text-[18px] text-[12px]'>
          <span className='cherryRed-gradient'></span> Issued in: {date}
        </p>
      </div>
      <img
        src={image}
        className='w-36 h-36 rounded-full p-5 sm:p-0'
        loading="lazy"
      />
    </motion.div>
  </a>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-navy-600 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
  <motion.div variants={textVariant()} className="bg-offWhite">
  <p className={styles.sectionSubText}>Investing in My Professional Development</p>
  <h2 className={styles.sectionHeadText}>My Licenses and Certifications.</h2>
</motion.div>


      </div>
      <div className={`-mt-20 pb-14 gap-5 ${styles.paddingX}`}>
        {Certifications.map((Certificate, index) => (
          <FeedbackCard key={Certificate.name} index={index} {...Certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
