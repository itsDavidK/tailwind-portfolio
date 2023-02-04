import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import newTab from "../assets/newtab.png";
import github from "../assets/blackgithub.png";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project1 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          A game inspired by Neopets and Nintendogs. Built using React with Web Speech API, Natural, and Dictionary API.
        </p>
        <a href="https://shrubclub.netlify.app/"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project2 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project3 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project4 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project5 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project6 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Project7 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-lightGray z-30 flex flex-col justify-center items-center text-center p-16 text-specialBlack`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
        <a href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 0, left: 100}} src={newTab} alt="Website"/>
          </a>
          <a href="https://github.com/jordan-koichiro-johnson/shrub-club"
          target="_blank"
          rel="noreferrer">
            <img style={{position: 'absolute', bottom: 3, right: 100}} src={github} alt="GitHub Repo"/>
          </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-lavender">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some projects I have worked on. Feel free to visit the websites or even checkout the repository on GitHub.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project1 title="Shrub Club" />
          <Project2 title="Music Quiz" /> 
          <Project3 title="Minimal Portfolio" />

          {/* ROW 2 */}
          <Project4 title="Pineapple Motivator" />
          <Project5 title="Weather Forecast" />
          <Project6 title="Troll Quiz" />

          {/* ROW 3 */}
          <Project7 title="Surprisebox Simulator" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;