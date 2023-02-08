import LineGradient from "../components/LineGradient";
import {useForm} from 'react-hook-form';
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-48">
            {/* HEADING */}
            <motion.div 
                className="flex justify-left w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                >
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                       <span className="text-lavender">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                    </div>
                </motion.div>

                {/* FORM */}
                <div className=" md:justify-between gap-16 mt-5">
                    <motion.div
                    className="basis-1/2 flex justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                    </motion.div>

                    <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    >
                        <form
                        name="contact v1"
                        target="_blank"
                        method="post"
                        data-netlify="true"
                        onSubmit={onSubmit}
                        >
                            <input 
                            type="hidden"
                            name="form-name"
                            value="contact v1"
                            />
                                <div>
                                    <input 
                                    className="w-full bg-gray font-semibold placeholder-opaque-black p-3"
                                    type="text" 
                                    name="first-name"
                                    placeholder="NAME"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 100,
                                    })} 
                                    />
                                </div>

                            {errors.name && (
                                <p className="text-lavender mt-1">
                                    {errors.name.type === 'required' && "Please leave your name."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 characters."}
                                </p>
                            )}

                            <div>
                            <input 
                            className="w-full bg-gray font-semibold placeholder-opaque-black p-3 mt-5"
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            />
                            </div>
                                {errors.email && (
                                <p className="text-lavender mt-1">
                                    {errors.email.type === 'required' && "Please put your email."}
                                    {errors.email.type === 'pattern' && "Invalid email address"}
                                </p>
                            )}

                            <div>
                            <textarea
                            className="w-full bg-gray font-semibold placeholder-opaque-black p-3 mt-5"
                            name="comments"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength:2000
                            })}
                            />
                            </div>
                                {errors.message && (
                                <p className="text-lavender mt-1">
                                    {errors.message.type === 'required' && "Please leave a message."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 characters."}
                                </p>
                            )}

                            <button
                            type="submit"
                            className="p-5 bg-lavender font-semibold text-specialBlack mt-5 hover:bg-darkPurple
                            hover:text-white transition duration-500"
                            >
                                SEND ME A MESSAGE
                            </button>

                        </form>
                    </motion.div>
                </div>
        </section>
    )
}

export default Contact;