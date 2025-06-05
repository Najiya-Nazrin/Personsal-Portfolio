import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  date: string;
}

const Projects = () => {
  // ✅ Properly typed state for active image indexes
  const [activeIndexes, setActiveIndexes] = useState<{ [key: number]: number }>({});

  const projects: Project[] = [
    {
      title: "Indian Ancient Language Preservation",
      description: "Developed a BERT-based website for Indian ancient language missing word prediction and preservation.",
      images: ["/images/ancientlang.png"],
      tags: ["BERT", "NLP", "Web Development"],
      date: "January 2025"
    },
    {
      title: "E-Commerce App",
      description: "Flutter based application that allows users to buy products online.",
      images: ["/images/ecom1.png", "/images/ecom2.png", "/images/ecom3.png"],
      tags: ["Flutter", "Mobile Development", "E-commerce"],
      date: "July 2024 – August 2024"
    },
    {
      title: "EazyGo Map",
      description: "A mobile application that provides users with an easy way to report infrastructure issues.",
      images: ["/images/eazygo1.png", "/images/eazygo2.png", "/images/eazygo3.png"],
      tags: ["Mobile Development", "Maps", "Infrastructure"],
      date: "December 2022 – May 2025"
    },
    {
      title: "8 Queens Problem",
      description: "Implementation of the classic 8 Queens puzzle using advanced algorithms.",
      images: ["/images/queen1.png", "/images/queen2.png", "/images/queen3.png"],
      tags: ["Algorithms", "Problem Solving"],
      date: "2024"
    },
        {
      title: "Legal assistant",
      description: "Implementation of the classic 8 Queens puzzle using advanced algorithms.",
      images: ["/images/legal1.png", "/images/legal2.png"],
      tags: ["Algorithms", "Problem Solving"],
      date: "2024"
    }
  ];

  // ✅ Add type annotations for parameters
  const handleImageChange = (projectIndex: number, direction: number) => {
    setActiveIndexes((prevIndexes) => {
      const current = prevIndexes[projectIndex] || 0;
      const totalImages = projects[projectIndex].images.length;
      const newIndex = (current + direction + totalImages) % totalImages;
      return { ...prevIndexes, [projectIndex]: newIndex };
    });
  };

  return (
    <section id="projects" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">Projects</h2>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const currentImageIndex = activeIndexes[index] || 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => handleImageChange(index, -1)}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => handleImageChange(index, 1)}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
                  >
                    ›
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-900 mb-2">{project.title}</h3>
                  <p className="text-brown-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-brown-600 text-sm">{project.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
