import React, { useState } from "react";
import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// ================== DATA (Easy to Update) ==================
const PROFILE = {
  name: "Anjali Thakur",
  title: "Software Development Engineer (2+ Years)",
  tagline: "Python • AWS • React • PostgreSQL",
  email: "thakur.anjali0405@gmail.com",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/anjali-thakur-270948303",
  resume: "/AnjaliThakur.pdf",
};

const EXPERIENCE = [
  {
    role: "Software Development Engineer",
    company: "WNS Global Private Limited",
    duration: "May 2023 – Present",
    points: [
      "Developed and optimized full-stack web applications using React.js and Python",
      "Built scalable backend services and business logic using Python",
      "Managed AWS services including Amazon S3 and CloudWatch",
      "Improved data performance using PostgreSQL stored procedures",
      "Provided production monitoring and support using CloudWatch",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "WNS Global Private Limited",
    duration: "Jun 2022 – Apr 2023",
    points: [
      "Designed and implemented ETL/ELT pipelines for production systems",
      "Improved system performance using Python-based data processing",
      "Worked with cloud computing concepts to support scalable workflows",
      "Collaborated with cross-functional teams to deliver business solutions",
    ],
  },
];

const SKILLS = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS"] },
  { title: "Backend & Cloud", items: ["AWS (S3, CloudWatch)", "PostgreSQL"] },
  { title: "Data", items: ["ETL", "ELT"] },
  { title: "Tools", items: ["Git", "Agile", "SDLC"] },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  const stagger = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      } min-h-screen font-sans transition-colors duration-500`}
    >
      {/* Dark/Light Toggle */}
      <div
        className="fixed top-4 right-4 cursor-pointer z-50"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </div>

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center min-h-screen px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold break-words">
          {PROFILE.name}
        </h1>
        <p className="mt-4 text-xl max-w-3xl break-words">
          {PROFILE.title} | {PROFILE.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href={`mailto:${PROFILE.email}`}>
            <Mail />
          </a>
        </div>
        <a
          href={PROFILE.resume}
          download
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl"
        >
          <Download size={18} /> Download Resume
        </a>
      </motion.section>

      {/* About */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="leading-relaxed max-w-4xl break-words">
          Software Development Engineer with 2+ years of experience building
          scalable full-stack and backend systems. Strong expertise in Python,
          AWS, PostgreSQL, and React.js. Passionate about clean architecture,
          cloud-native development, and building reliable, maintainable
          applications.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>
          <motion.div variants={stagger} className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                <h3 className="text-xl font-semibold break-words">
                  {exp.role}
                </h3>
                <p className="break-words">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  {exp.points.map((p, i) => (
                    <li key={i} className="break-words">
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      >
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <SkillBlock
              key={idx}
              title={skill.title}
              items={skill.items}
              darkMode={darkMode}
            />
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-700"
            } break-words`}
          >
            <strong>Bachelor of Engineering in Computer Science</strong>
            <br />
            Chitkara University, Punjab
            <br />
            CGPA: 9.56 | 2019 – 2023
          </p>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4 sm:px-6"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p
          className={`${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-6 break-words`}
        >
          Open to full-time SDE roles & exciting projects
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="px-6 py-3 bg-white text-black rounded-xl"
        >
          Get In Touch
        </a>
      </motion.section>

      <footer
        className={`${
          darkMode ? "text-gray-500" : "text-gray-700"
        } text-center py-6`}
      >
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}

function SkillBlock({ title, items, darkMode }) {
  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-2xl`}
    >
      <h3
        className={`${
          darkMode ? "text-white" : "text-gray-900"
        } font-semibold mb-2 break-words`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 text-sm">
        {items.map((item, i) => (
          <span
            key={i}
            className={`${
              darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-300 text-gray-800"
            } px-2 py-1 rounded-lg break-words`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
