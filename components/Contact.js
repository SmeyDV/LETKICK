"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>ST 30E, Sen Sok, Phnom Penh City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>(855) 386-126</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>letkick@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Our Location</h2>
            <div className="bg-gray-200 h-64 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9595246319614!2d104.85884987406752!3d11.554759388645303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951cee0211477%3A0xf453020a41b9faec!2z4Z6f4Z6E4Z-S4Z6A4Z624Z6P4Z-L4oCL4Z6A4Z624Z6A4Z624Z6ULCDhnpfhn5LhnpPhn4bhnpbhn4Hhnok!5e0!3m2!1skm!2skh!4v1725538682394!5m2!1skm!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
