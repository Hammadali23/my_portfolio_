import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-gray-950  to-gray-800 min-h-screen py-10 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center  mt-20 underline text-cyan-300 animate-scale-up-down">
          About Me
        </h1>
      <h1 className="text-3xl font-bold  text-center text-cyan-500 mt-12 ">
        Get In Touch With Us Now!
      </h1>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mt-14 ">
        {/* Left Section */}
        <div className="bg-gradient-to-r from-gray-800  to-cyan-800 shadow-md p-6 rounded-lg border-l-8 border-cyan-500 ">
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">📞</span>
              <div>
                <h2 className="font-bold text-lg text-cyan-300">Phone Number</h2>
                <p className="text-white text-lg">+92 3257059641</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">✉️</span>
              <div>
                <h2 className="font-bold text-lg  text-cyan-300">Email</h2>
                <p className="text-white text-lg">malik.hammad.ali78@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 lg:ml-2">
              <span className="text-3xl text-blue-900">📍</span>
              <div>
                <h2 className="font-bold text-lg lg:ml-2  text-cyan-300">Location</h2>
                <p className="text-white lg:ml-2 text-lg">
                 RKV 555 model colony, Karachi 
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">⏰</span>
              <div>
                <h2 className="font-bold text-lg  text-cyan-300">Working Hours</h2>
                <p className="text-white text-lg">Monday to Saturday</p>
                <p className="text-white text-lg">09:00 AM to 06:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-r from-gray-800  to-cyan-800 shadow-md p-6 rounded-lg border-l-8 border-cyan-500">
          <h2 className="font-bold text-3xl text-cyan-300 mb-4">Contact Us</h2>
          <form className="space-y-4">
            {/* First and Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* Mobile and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Mobile No *"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email ID *"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* Message */}
            <textarea
              placeholder="Message"
              
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
           
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-300 text-black hover:bg-cyan-100 py-3 rounded-lg font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
); }    
