import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Query Solver",
    description:
      "A networking website with chat and problem-solving features for seamless communication and collaboration.",
    image: "project1.jpg",
    github: "https://github.com/rastogi-archi/Query-Solver",
    live: "", 
  },
  {
    title: "LaundryMate",
    description:
      "Developed a full-stack web application to manage and streamline hostel laundry bookings, minimizing scheduling conflicts and optimizing machine usage.",
    image: "laundrymate.jpg",
    github: "https://github.com/rastogi-archi/washing",
    live: "https://washing-eight.vercel.app", 
  },
];

const Project = () => {
  return (
    <section className="mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#012322] mb-12">
          Projects
        </h2>

        <div className="flex flex-wrap gap-10 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-md hover:shadow-2xl rounded-2xl overflow-hidden max-w-sm w-full transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#01504d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#013734] transition"
                  >
                    GitHub
                    <MoveRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-[#01504d] border border-[#01504d] px-4 py-2 rounded-lg font-medium hover:bg-[#01504d] hover:text-white transition"
                  >
                    Live Demo
                    <MoveRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
