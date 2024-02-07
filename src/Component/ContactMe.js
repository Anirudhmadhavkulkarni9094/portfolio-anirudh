import React, { useState } from 'react';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a backend server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto mt-10 bg-gray-800 rounded-lg p-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          placeholder="Your Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
    </form>
  );
}

export default ContactMe;
