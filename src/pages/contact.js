// pages/contact.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container h-[85vh] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-4">
          {/* Map Embed Code (Replace with your own map embed code) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.9586977141215!2d49.821234615203564!3d40.37720157936447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308c2428a93585%3A0x57d216e0d55b3f7f!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1646746405511!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          {/* Contact Information */}
          <p className="mb-4">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="mb-4">
            <strong>Location:</strong> 123 Main Street, Cityville, Country
          </p>
          {/* Add more contact details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
