import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Have questions? We’d love to hear from you. Send us a message and
          we’ll respond as soon as possible.
        </p>
      </motion.div>

      {/* Main Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-[#111] p-8 rounded-2xl shadow-lg flex-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Your company name"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Tell us about your needs..."
              rows="4"
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22c55e" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-green-500 text-black font-semibold rounded-lg py-2 mt-2 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-400 mb-4">
              Reach out to us through any of these channels, and our team will
              get back to you promptly.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="bg-[#111] p-6 rounded-xl shadow-md space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Email</h4>
                <p className="text-gray-400">contact@tourtech.com</p>
                <p className="text-gray-400">support@tourtech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Phone</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon–Fri 9am–6pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Office</h4>
                <p className="text-gray-400">
                  123 Business Street <br /> Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-6 rounded-xl shadow-md">
            <div className="flex items-start gap-3">
              <Clock className="text-green-500" />
              <div>
                <h4 className="font-semibold text-green-500">Business Hours</h4>
                <p className="text-gray-400">Mon–Fri: 9:00 AM–6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM–4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="text-gray-400 mb-4 max-w-md mx-auto">
          Join hundreds of industries already using TourTech to streamline their
          visit management.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px #22c55e",
          }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-green-400 transition"
        >
          Start Free Trial
        </motion.button>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 w-full border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h4 className="text-green-500 font-bold text-lg">TourTech</h4>
            <p className="text-gray-400 mt-2 max-w-xs">
              Simplifying industrial visit management for modern industries.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-12 text-sm mt-6 md:mt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <div>
              <h5 className="font-semibold mb-2">Product</h5>
              <ul className="space-y-1 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-1 text-gray-400">
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul className="space-y-1 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}


