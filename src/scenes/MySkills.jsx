import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER and image section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div 
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-lavender">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                         These are a list of skills I have picked up while working on personal projects as well during my time studying at college, and at a full-stack web development boot camp.
                    </p>
                </motion.div>

            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                    {/* EXPERIENCE */}
                    <motion.div 
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">Front-End</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Developer</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-gray absolute right-0 top-0 z-[-1]" />
                        </div>
                        <p className="mt-5">
                            HTML &bull; CSS &bull; JavaScript &bull; JSON &bull; MySQL &bull; React &bull; Bootstrap &bull; Tailwind &bull; Figma &bull; jQuery &bull; Handlebars &bull; UI/UX
                        </p>
                    </motion.div>

                    {/* INNOVATIVE */}
                    <motion.div 
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">Back-End</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Developer</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-darkPurple absolute right-0 top-0 z-[-1]" />
                        </div>
                        <p className="mt-5">
                            Express.js &bull; Node.js &bull; MySQL &bull; MongoDB &bull; Socket.io &bull; Java &bull; C &bull; C++ &bull; OOP &bull; Netlify &bull; Heroku
                        </p>
                    </motion.div>

                    {/* IMAGINATIVE */}
                    <motion.div 
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">Extraordinary</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Skills</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-lavender absolute right-0 top-0 z-[-1]" />
                        </div>
                        <p className="mt-5">
                            Git &bull; Vegas Pro &bull; Ableton 11 &bull; Audacity &bull; PhotoShop &bull; Aseprite &bull; Figma
                        </p>
                    </motion.div>
            </div>
        </section>
    );
};

export default MySkills;