import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/profile-image.png";
import resume from "../assets/resume.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-gray before:z-[-1]"
          >
            <img
              alt="profile"
              className=" filter: saturate-200 hover:filter hover:saturate-0 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={profilePic}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="filter: saturate-200 z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={profilePic}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl z-10 text-center md:text-start font-bold">
            David <span className="nameText">Kovalchuk</span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem, necessitatibus voluptatibus consequatur quibusdam eius saepe veniam assumenda nihil harum provident expedita excepturi magnam quaerat, ab doloribus vitae facere adipisci.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-purple text-specialBlack rounded-sm py-3 px-7 font-semibold
              hover:bg-gray hover:text-white transition duration-500"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            My Resume
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-purple py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-specialBlack hover:text-lavender transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
