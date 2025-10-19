import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="bg-dark-300 rounded-2xl  flex flex-col items-center justify-center text-gray-600 p-6">
      {/* Contact Info */}
      <div className="space-y-4 w-full max-w-md mt-0.1">
        {/* Email */}
        <div className="flex items-center space-x-4 bg-dark-200 p-4 rounded-xl shadow-lg">
          <MdEmail className="text-2xl text-purple-400" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-300 text-sm cursor-pointer">hatifshaikh88732@gmail.com</p>
          </div>
        </div> 

        {/* Phone */}
        <div className="flex items-center space-x-4 bg-dark-200 p-4 rounded-xl shadow-lg">
          <MdPhone className="text-2xl text-gray-400" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-300 text-sm cursor-pointer">+91 8809247620</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4 bg-dark-200 p-4 rounded-xl shadow-lg">
          <MdLocationOn className="text-2xl text-purple-400" />
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-300 text-sm">
              Pune, Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/HatifShaikh88"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-purple px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hatif1508"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
