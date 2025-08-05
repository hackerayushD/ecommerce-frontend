import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

// Animation library
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* ABOUT US Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="pt-10 text-center"
      >
        <Title text1={"ABOUT"} text2={"US"} />
        <p className="max-w-2xl mx-auto mt-2 text-sm text-gray-500">
          Learn more about our journey, mission, and what makes us different.
        </p>
      </motion.div>

      {/* About Section */}
      <div className="flex flex-col max-w-6xl gap-12 px-6 mx-auto my-16 md:flex-row md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative group w-full md:max-w-[450px]"
        >
          <img
            src={assets.about_img}
            alt="About Us"
            className="rounded-lg shadow-lg transform group-hover:scale-[1.02] transition duration-300"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4"
        >
          <p>
            <span className="font-medium text-gray-800">Forever</span> was born
            out of a passion for innovation and a desire to revolutionize the
            way people shop online. Our journey began with a simple idea: to
            provide a platform where customers can easily discover, explore, and
            purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <div>
            <h3 className="mb-1 text-lg font-semibold text-gray-800">
              Our Mission
            </h3>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </motion.div>
      </div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-10 text-center bg-white"
      >
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <p className="max-w-2xl mx-auto mt-2 text-sm text-gray-500">
          Here’s why customers trust and choose us every day.
        </p>
      </motion.div>

      <div className="grid max-w-6xl gap-8 px-6 mx-auto mb-20 md:grid-cols-3 md:px-12">
        {[
          {
            title: "Quality Assurance",
            desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
          },
          {
            title: "Convenience",
            desc: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
          },
          {
            title: "Exceptional Customer Service",
            desc: "Our dedicated team is here to assist you every step of the way, ensuring your satisfaction is our top priority.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeUp}
            className="flex flex-col gap-4 p-8 transition duration-300 border rounded-xl bg-gray-50 hover:shadow-xl hover:-translate-y-1"
          >
            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Newsletter */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-10 bg-gray-100"
      >
        <NewsletterBox />
      </motion.div>
    </div>
  );
};

export default About;
