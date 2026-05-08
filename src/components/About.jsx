import AboutImage from '../assets/about-image.png';
import aboutImage2 from '../assets/about-image2.svg';
import aboutImage3 from '../assets/about-image3.svg';
import { motion } from 'framer-motion';
function About() {
    return (
        <section className="about-section py-6 md:py-12 lg:py-24 px-4 bg-gray-100 flex flex-col md:flex-row " id="about">
            <motion.div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{delay:0.1, duration: 1}} className="about-image-container w-[80vw] flex items-center :max-h-[500px] md:max-h-max justify-center overflow-hidden md:w-1/2 mb-8 md:mb-0 ">
                <img src={AboutImage} alt="About Sweet Bakers" className="w-full h-auto object-contain" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{delay:0.2, duration: 1.4}} className="container mx-auto w-full md:w-1/2 p-6">
                <h2 className="text-[clamp(0.5rem,2vw,3rem)] font-bold mb-6 text-orange-500 font-heading">Sweet Bakers</h2>
                <h3 className="text-[clamp(0.8rem,2.5vw,4rem)] mb-4 text-center font-bold font-heading">About us</h3>
                <p className="text-[clamp(0.4rem,1.6vw,2rem)] text-gray-700 mb-4 first-letter:text-xl md:first first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left font-bold">
Sweet Bakers in Pakistan is your destination for fresh bakery items, delicious sweets, and savory treats. We combine tradition with quality to deliver flavors you’ll always come back for.
                </p>
                <p className="text-[clamp(0.4rem,1.5vw,2rem)] text-gray-700 mb-4 font-bold first-letter:text-xl md:first first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left ">
                    From traditional sweets like Gulab Jamun and Chocolate Cakes to fast food favorites like zinger burgers, loaded fries, and chicken tandoori, our menu has something for everyone. Every item is crafted with care to deliver bold flavors and a satisfying experience.
                </p>
                <div className="flex gap-4 mt-6 md:mt-12">

                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.3, duration: 1}} className="flex w-1/2 items-start">
                    <img src={aboutImage2} alt="Sindh Sweets food icon" className="w-1/6 h-auto object-cover rounded-lg shadow-md" />

                    <div className="md:ml-6">
                    <p className="text-[clamp(0.6rem,2vw,1.5rem)] text-gray-700 mb-2 font-bold font-heading">Pure Fresh Food</p>
                    <p className="text-gray-700 text-[clamp(0.6rem,2vw,1.25rem)]">We use only the freshest ingredients to ensure that every bite is bursting with flavor and quality.</p>
                    </div>

                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 0.4, duration: 1}} className="w-1/2 flex items-start">
                    <img src={aboutImage3} alt="Sindh Sweets Bakers icon" className="w-1/6 h-auto object-cover rounded-lg shadow-md" />
                    <div className="ml-6">
                    <p className="text-[clamp(0.5rem,1.5vw,2rem)] text-gray-700 font-bold font-heading">Skilled Bakers</p>
                    <p className="text-gray-700 text-[clamp(0.6rem,2vw,1.25rem)]">Our skilled bakers bring years of experience and passion to every creation.</p>
                    </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;