import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="pt-10 text-center">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="max-w-2xl mx-auto mt-2 text-sm text-gray-500">
          We'd love to hear from you. Our team is here to help with any questions or feedback.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-start justify-center gap-12 px-6 my-16 md:flex-row md:px-12">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col gap-6 bg-white rounded-xl shadow-md border border-gray-200 p-8 md:w-[400px]">
          {/* Office */}
          <div>
            <p className="text-xl font-semibold text-gray-800">Our Store</p>
            <p className="mt-1 text-gray-500">
              Forever E‑Commerce Pvt. Ltd. <br />
              3rd Floor, Gaurav Tower, <br />
              Malviya Nagar, Jaipur, Rajasthan - 302017, India
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <p className="text-gray-500">
              Tel: +91 141-4001234 <br />
              Email: support@forever.com
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className="text-xl font-semibold text-gray-800">
              Careers at Forever
            </p>
            <p className="mt-1 text-gray-500">
              Learn more about our teams and job openings in India.
            </p>
          </div>

          <button className="px-8 py-3 text-sm text-blue-600 transition-all duration-300 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Explore Jobs
          </button>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 p-8 bg-white border border-gray-200 shadow-md rounded-xl">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 font-medium text-white transition-all duration-150 bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-6xl px-6 mx-auto mb-16 md:px-12">
        <iframe
          title="Forever Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.180215225179!2d75.81956957546926!3d26.861587576671597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6f3d1b5f4e5%3A0xeffb1a1b26d42f7b!2sGaurav%20Tower%2C%20Malviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1707042138740!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      {/* Newsletter */}
      <div className="py-10 bg-gray-100">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;


