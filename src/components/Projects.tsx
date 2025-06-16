import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  date: string;
  githubLink: string;
}

const Projects = () => {
  const [activeIndexes, setActiveIndexes] = useState<{ [key: number]: number }>({});

  const projects: Project[] = [
    {
      title: "Indian Ancient Language Preservation",
      description: "Developed a BERT-based website for Indian ancient language missing word prediction and preservation.",
      images: ["./images/ancient.jpeg","./images/ancientlang.png"],
      tags: ["BERT", "NLP", "Web Development"],
      date: "January 2025",
      githubLink: "https://github.com/Najiya-Nazrin/ancient-language-preservation"
    },
    {
      title: "E-Commerce App",
      description: "Flutter based application that allows users to buy products online.",
      images: ["./images/ecomm.png"],
      tags: ["Flutter", "Mobile Development", "E-commerce"],
      date: "July 2024 – August 2024",
      githubLink:"https://github.com/Najiya-Nazrin/Flutter_Fly/tree/main/proj1"
    },
    {
      title: "System Monitoring App",
      description: "Flutter based application that helps to know the usage.",
      images: ["./images/systmon.png"],
      tags: ["Flutter", "Mobile Development", "E-commerce"],
      date: "July 2024 – August 2024",
      githubLink:"https://github.com/Najiya-Nazrin/system-monitoring-app"
    },
    {
      title: "EazyGo Map",
      description: "A mobile application that provides users with an easy way to report infrastructure issues.",
      images: ["./images/eazygo.png"],
      tags: ["Mobile Development", "Maps", "Infrastructure"],
      date: "December 2022 – May 2025",
      githubLink:"https://github.com/aswin-asokan/EazyGo-MAp"
    },
    {
      title: "8 Queens Problem",
      description: "Implementation of the classic 8 Queens puzzle using advanced algorithms.",
      images: ["./images/8queens.png"],
      tags: ["Backtracking", "Problem Solving"],
      date: "2024",
      githubLink:"https://github.com/Najiya-Nazrin/8-queen-puzzle"
    },
        {
      title: "Legal assistant",
      description: "Implementation of the classic 8 Queens puzzle using advanced algorithms.",
      images: ["./images/legal1.png", "./images/legal2.png"],
      tags: ["Algorithms", "Problem Solving"],
      date: "2024",
      githubLink:"https://github.com/Najiya-Nazrin/legal-assistant"
    }
  ];

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
                className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-500 transform hover:scale-105 cursor-pointer"

              >
                
                <div className="relative">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  
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
                  <a
  href={project.githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-black-600 underline mt-2 inline-block"
>
  GitHub
</a>

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
