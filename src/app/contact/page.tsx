import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-gray-950  to-gray-800 min-h-screen py-10 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center  mt-20 underline text-cyan-300 animate-scale-up-down">
          About Me
        </h1>
      <h1 className="text-3xl font-bold  text-center text-blue-300 mt-12 ">
        Get In Touch With Us Now!
      </h1>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mt-14 border-l-8 border-red-700">
        {/* Left Section */}
        <div className="bg-blue-200 shadow-md p-6 rounded-lg ">
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">📞</span>
              <div>
                <h2 className="font-bold text-lg">Phone Number</h2>
                <p className="text-gray-600">+92 3257059641</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">✉️</span>
              <div>
                <h2 className="font-bold text-lg">Email</h2>
                <p className="text-gray-600">malik.hammad.ali78@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 ml-2">
              <span className="text-3xl text-blue-900">📍</span>
              <div>
                <h2 className="font-bold text-lg ml-2">Location</h2>
                <p className="text-black ml-2">
                 RKV 555 model colony, Karachi 
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-blue-900">⏰</span>
              <div>
                <h2 className="font-bold text-lg">Working Hours</h2>
                <p className="text-gray-600">Monday to Saturday</p>
                <p className="text-gray-600">09:00 AM to 06:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-blue-200  border-l-8 border-red-700 shadow-md p-6 rounded-lg">
          <h2 className="font-bold text-3xl text-blue-900 mb-4">Contact Us</h2>
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
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
); }    
