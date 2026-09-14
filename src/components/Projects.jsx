import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "🎓 College Event Management System",
    desc: "A responsive web-based platform for managing college events, student registrations, attendance, certificates, OD requests, announcements, and administrative activities through dedicated student and admin dashboards.",
    ss: "/p2.png",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
    live: "https://event-management-system-inky-three.vercel.app/",
    code: "https://github.com/sameershaiks13/event-management-system"
},

{
    title: "⚙️ Distributed Job Scheduler",
    desc: "A distributed, multi-tenant job scheduling platform that manages priority queues, scheduled and recurring jobs, workers, retries, dead-letter queues, execution history, and real-time operational monitoring.",
    ss: "/p1.png",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Docker"],
    live: "#",
    code: "https://github.com/sameershaiks13/distributed-job-scheduler"
},

{
    title: "🏏 IPL Winning Team Prediction",
    desc: "A machine learning web application that predicts the real-time winning probability of the batting team using IPL match data, current score, wickets, overs, target, run rates, match pressure, and other engineered features.",
    ss: "/p3.png",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit"],
    live: "#",
    code: "https://github.com/sameershaiks13/Ipl-Winning-Team-Predection"
},

{
    title: "☁️ Microservices Deployment Lab",
    desc: "A hands-on DevOps and cloud-native project focused on containerizing, deploying, managing, and scaling microservices while demonstrating service orchestration, CI/CD workflows, and distributed application deployment.",
    ss: "/p4.png",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Linux", "REST API", "Cloud/DevOps"],
    live: "#",
    code: "https://github.com/sameershaiks13/Microservices-Deployment-Lab-"
},

{
    title: "🩺 Diabetes Prediction Using ML",
    desc: "A machine learning project that analyzes health-related parameters and applies classification techniques to predict diabetes risk, with data preprocessing, exploratory analysis, model training, evaluation, and feature-importance analysis.",
    ss: "/p5.png",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    live: "#",
    code: "https://github.com/sameershaiks13/diabetes-prediction-using-ml-"
},

{
    title: "👁️ Eye Disease Classifier",
    desc: "A deep learning computer-vision project that analyzes retinal images and classifies eye-related conditions using a trained neural network, demonstrating image processing, model training, and medical image classification.",
    ss: "/p6.png",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Jupyter"],
    live: "#",
    code: "https://github.com/sameershaiks13/eye-disease-classifier"
},

{
    title: "🍔 Food Ordering Website",
    desc: "A responsive food ordering website that lets users explore menus, order food online, choose pickup options, book tables, view food details, and interact with a modern restaurant-focused interface.",
    ss: "/p7.png",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "#",
    code: "https://github.com/sameershaiks13/food-ordering-website"
}
];



export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
