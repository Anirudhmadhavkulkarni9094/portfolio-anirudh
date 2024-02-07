import React, { useEffect, useState } from 'react';
import './Project.css'
import axios from 'axios'

function Projects() {
  const [projects , setProject] = useState([]);
  useEffect(()=>{
    axios.get("https://portfolio-17hx.onrender.com/get-projects").then(res=>{
        setProject(res.data.data);
    })
  })

  return (
    <div className=" project h-screen text-white flex justify-center items-center" >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Space Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <div key={project.id} className="p-4 border rounded shadow-md bg-gray-900 card h-56 overflow-auto card">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-2">
                <ul className='flex flex-wrap gap-2 mt-4'>
      {project.skills && project.skills.length >0 && project.skills.map((skill, index) => (
        <li key={index} className="text-gray-300 border-2 p-2 rounded-2xl hover:bg-white hover:text-black ">{skill}</li>
      ))}
    </ul>
                
              </div>
              <div className="flex justify-between">
                <a href={project.link} className="text-white border-2 p-2 hover:bg-white rounded-xl hover:text-black " target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a href={project.demoLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Demo</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
