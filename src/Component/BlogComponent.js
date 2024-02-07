import React, { useEffect, useState } from 'react';
import './Project.css'

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portfolio-17hx.onrender.com/get-blogs');
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<div className=" background text-white font-sans">
      <div className="max-w-4xl  mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-bold mb-8 text-black">Blog Posts</h1> */}
        {blogs.map(blog => (
          <div key={blog._id} className="m-5 bg-slate-950  shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.content}</p>
            <p className="text-gray-400">Date: {new Date(blog.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
