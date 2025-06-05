import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2 } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Tech Enthusiast',
      description: 'Pursuing B.Tech in AI & ML with a passion for technology',
    },
    {
      icon: <Palette size={32} />,
      title: 'Entrepreneur',
      description: '5 years of experience in baking and craft business',
    },
    {
      icon: <Globe2 size={32} />,
      title: 'App Developer',
      description: 'Experience in Flutter and mobile app development',
    },
  ];

  return (
    <section id="about" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">About Me</h2>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto">
            I'm a student entrepreneur with a passion for technology and innovation. With 5 years of experience in the baking and craft industry,
            I bring a unique blend of creative and technical skills to my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-brown-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-brown-900 mb-2">{skill.title}</h3>
              <p className="text-brown-700">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;