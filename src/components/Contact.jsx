import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fv0m1hx",
        "template_i0xj4p8",
        {
          from_name: form.name,
          to_name: "Abhi",
          from_email: form.email,
          to_email: "Abhip8085@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_CODE
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl"
        style={{
          backgroundColor: "#001F54", // Navy Blue Background
        }}
      >
        <p
          className={styles.sectionSubText}
          style={{
            color: "#F8F9FA", // Off-White Text
          }}
        >
          Get in touch
        </p>
        <h3
          className={styles.sectionHeadText}
          style={{
            color: "white", // Cherry Red Text
          }}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span
              className="font-medium mb-4"
              style={{
                color: "#F8F9FA", // Off-White Text
              }}
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Please provide your name"
              className="py-4 px-6 rounded-lg outline-none border-none font-medium"
              style={{
                backgroundColor: "white", // Cherry Red Input Background
                color: "#F8F9FA", // Off-White Text
                placeholderColor: "#F8F9FA", // Placeholder Off-White
              }}
            />
          </label>
          <label className="flex flex-col">
            <span
              className="font-medium mb-4"
              style={{
                color: "#F8F9FA", // Off-White Text
              }}
            >
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Please provide your email"
              className="py-4 px-6 rounded-lg outline-none border-none font-medium"
              style={{
                backgroundColor: "white", // Cherry Red Input Background
                color: "#F8F9FA", // Off-White Text
              }}
            />
          </label>
          <label className="flex flex-col">
            <span
              className="font-medium mb-4"
              style={{
                color: "#F8F9FA", // Off-White Text
              }}
            >
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 rounded-lg outline-none border-none font-medium"
              style={{
                backgroundColor: "white", // Cherry Red Input Background
                color: "#F8F9FA", // Off-White Text
              }}
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md"
            style={{
              backgroundColor: "#D2042D", // Cherry Red Button Background
              color: "#F8F9FA", // Off-White Text
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="flex mt-10 gap-5 justify-center">
          {/** Social icons with updated colors */}
          <a
            className="text-gray-500"
            href="https://www.facebook.com/ome.ga.351"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#F8F9FA", // Off-White Icon Color
            }}
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          {/* Repeat for other icons */}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
