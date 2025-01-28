import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description: "A real-time weather forecast app using OpenWeather API and Auth0 for authentication",
    image:"/src/assets/Weather-app-signed-out.png",
    techStack: ["Nextjs", "Javascript", "Tailwind CSS", "Auth0"],
    liveLink: 'https://weather-app-rho-ivory-95.vercel.app/',
    gitHubLink: 'https://github.com/Aweroro/weather-app'
  },
  {
    title: "Book Tracker",
    description: "A reading tracker app to manage books across different categories. It uses Firebase for authentication and database",
    image:'/src/assets/book-reading-app-signed-in.png',
    techStack: ["Nextjs", "Typescript", "Tailwind CSS", "Firebase"],
    liveLink: 'https://book-reading-tracker-f73c2.web.app/',
    gitHubLink: 'https://github.com/Aweroro/book-reading-tracker'
  },
  {
    title: "Form Validation Application",
    description: "A basic form application that validates and authenticate inputs and submission of a form page using formik and yup.",
    image:'/src/assets/form-page-app.png',
    techStack: ["Typescript", "Tailwind CSS", "Formik", "Yup"],
    gitHubLink: 'https://github.com/Aweroro/form-validation-app'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="bg-primary text-text py-16 px-6 md:px-12 lg:px-20">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
