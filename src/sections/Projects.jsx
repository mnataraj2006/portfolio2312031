import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import {
  FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript,
  SiMysql, SiPostman, SiFastapi,
} from "react-icons/si";
import { projects } from "../data/projects";

/* ── Animations ── */
const fade = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const viewport = { once: true, amount: 0.1 };

/* ── Icon map (reused from Skills) ── */
const ICON_MAP = {
  "React.js":    { Icon: FaReact,       color: "rgba(97,218,251,0.65)" },
  "Node.js":     { Icon: FaNodeJs,      color: "rgba(104,160,99,0.7)"  },
  "Express.js":  { Icon: SiExpress,     color: "rgba(200,200,200,0.5)" },
  "MongoDB":     { Icon: SiMongodb,     color: "rgba(71,162,72,0.7)"   },
  "Tailwind CSS":{ Icon: SiTailwindcss, color: "rgba(56,189,248,0.65)" },
  "Docker":      { Icon: FaDocker,      color: "rgba(29,99,237,0.65)"  },
  "JWT":         { Icon: FaDatabase,    color: "rgba(180,180,180,0.5)" },
  "REST APIs":   { Icon: FaDatabase,    color: "rgba(180,180,180,0.5)" },
  "JavaScript":  { Icon: SiJavascript,  color: "rgba(247,223,30,0.7)"  },
  "Python":      { Icon: FaPython,      color: "rgba(55,118,171,0.7)"  },
  "FastAPI":     { Icon: SiFastapi,     color: "rgba(0,188,150,0.65)"  },
  "MySQL":       { Icon: SiMysql,       color: "rgba(0,117,143,0.7)"   },
  "Postman":     { Icon: SiPostman,     color: "rgba(255,108,55,0.7)"  },
  "Git":         { Icon: FaGitAlt,      color: "rgba(240,80,50,0.7)"   },
};

/* ── Tech chip ── */
const Chip = ({ name }) => {
  const entry = ICON_MAP[name];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-medium"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#A1A1AA",
      }}
    >
      {entry && <entry.Icon size={10} style={{ color: entry.color, flexShrink: 0 }} />}
      {name}
    </span>
  );
};

/* ── Image placeholder (shown when no image available) ── */
const ImagePlaceholder = ({ title }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center gap-4 select-none"
    style={{ background: "#0F0F0F" }}
  >
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
    <div className="relative text-center space-y-3">
      <div
        className="mx-auto w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <FiArrowUpRight size={20} style={{ color: "#3F3F46" }} />
      </div>
      <p className="text-xs font-medium tracking-wide" style={{ color: "#3F3F46" }}>
        Preview coming soon
      </p>
    </div>
  </div>
);

/* ── Project card ── */
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="group relative overflow-hidden rounded-3xl"
      style={{
        background: "rgba(255,255,255,0.018)",
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: "300px",
        transition: "border-color 0.3s ease",
      }}
      whileHover={{ borderColor: "rgba(255,255,255,0.13)" }}
    >
      <div
        className={`grid grid-cols-1 h-full md:grid-cols-[1fr_1.15fr] ${
          !isEven ? "md:grid-cols-[1.15fr_1fr]" : ""
        }`}
      >
        {/* ── LEFT: Content (or right if odd) ── */}
        {!isEven && (
          <div className="relative overflow-hidden rounded-tl-3xl rounded-bl-3xl min-h-[280px] md:min-h-0">
            <ProjectImage project={project} />
          </div>
        )}

        {/* ── Details panel ── */}
        <div className="flex flex-col justify-between p-6 lg:p-7">
          <div className="space-y-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span
                className="text-[0.58rem] font-bold tracking-[0.22em] uppercase"
                style={{ color: "#A1A1AA" }}
              >
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
            </div>

            {/* Title */}
            <h3
              className="font-bold tracking-tight leading-snug"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
                color: "#F5F5F5",
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-[1.85]"
              style={{ color: "#A1A1AA", maxWidth: "44ch" }}
            >
              {project.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <Chip key={t} name={t} />
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-live-${project.id}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  background: "#F5F5F5",
                  color: "#0A0A0A",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#FFFFFF"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#F5F5F5"; }}
              >
                Live Demo
                <FiExternalLink size={13} />
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-github-${project.id}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#A1A1AA",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "#F5F5F5";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "#A1A1AA";
                }}
              >
                <FiGithub size={13} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* ── RIGHT: Image panel (even cards) ── */}
        {isEven && (
          <div className="relative overflow-hidden min-h-[280px] md:min-h-0 rounded-tr-3xl rounded-br-3xl">
            <ProjectImage project={project} />
          </div>
        )}
      </div>
    </motion.article>
  );
};

/* ── Image panel ── */
const ProjectImage = ({ project }) => (
  <div className="relative w-full h-full overflow-hidden" style={{ minHeight: "300px" }}>
    {project.image ? (
      <>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
        {/* Left gradient fade into card */}
        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(13,13,14,0.9), transparent)" }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(13,13,14,0.6), transparent)" }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.18)" }} />
      </>
    ) : (
      <ImagePlaceholder title={project.title} />
    )}
  </div>
);

/* ── Section ── */
const Projects = () => (
  <section
    id="projects"
    className="py-24 lg:py-28"
    style={{ background: "#0D0D0E" }}
  >
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-12">

      {/* Header */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex items-end justify-between gap-6 flex-wrap mb-14"
      >
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-[0.6rem] font-bold tracking-[0.22em] uppercase"
              style={{ color: "#A1A1AA" }}
            >
              03 / Work
            </span>
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>
          <h2
            className="font-bold tracking-[-0.03em] leading-none"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 3rem)", color: "#F5F5F5" }}
          >
            Selected
            <span style={{ color: "#3F3F46" }}> Projects</span>
          </h2>
        </div>

        <a
          href="https://github.com/mnataraj2006"
          target="_blank"
          rel="noopener noreferrer"
          id="view-all-github"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium transition-colors duration-200"
          style={{ color: "#A1A1AA" }}
          onMouseEnter={e => e.currentTarget.style.color = "#F5F5F5"}
          onMouseLeave={e => e.currentTarget.style.color = "#A1A1AA"}
        >
          <FiGithub size={13} />
          All on GitHub
          <FiArrowUpRight size={12} />
        </a>
      </motion.div>

      {/* Cards — vertical stack */}
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </div>
  </section>
);

export default Projects;
