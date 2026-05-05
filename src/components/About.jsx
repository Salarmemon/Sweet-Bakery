import AboutImage from '../assets/about-image.png';
import aboutImage2 from '../assets/about-image2.svg';
import aboutImage3 from '../assets/about-image3.svg';
import { motion } from 'framer-motion';
function About() {
    return (
        <section className="about-section py-6 md:py-12 lg:py-24 px-4 bg-gray-100 flex flex-col md:flex-row " id="about">
            <motion.div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{delay:0.1, duration: 1}} className="about-image-container w-full md:w-1/2 mb-8 md:mb-0">
                <img src={AboutImage} alt="About Sindh Sweets" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{delay:0.2, duration: 1.4}} className="container mx-auto w-full md:w-1/2 p-6">
                <h2 className="text-[clamp(0.5rem,2vw,3rem)] font-bold mb-6 text-orange-500 font-heading">New Famous</h2>
                <h3 className="text-[clamp(0.8rem,2.5vw,4rem)] mb-4 text-center font-bold font-heading">About us</h3>
                <p className="text-[clamp(0.4rem,1.6vw,2rem)] text-gray-700 mb-4 first-letter:text-xl md:first first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left font-bold">
Sindh Sweets Bakery, nestled in the heart of Karachi, is a culinary haven that epitomizes the rich tradition of Sindhi cuisine. With a legacy spanning decades, our establishment is renowned for crafting delectable sweets, savory snacks, and mouthwatering pastries. Our commitment to quality, authentic flavors, and warm hospitality has made us a beloved institution in Karachi's culinary landscape. Join us on a delightful journey through the tastes of Sindh, where every bite tells a story of tradition and taste.
                </p>
                <p className="text-[clamp(0.4rem,1.5vw,2rem)] text-gray-700 mb-4 font-bold first-letter:text-xl md:first first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left ">
                    We take pride in our wide variety of sweets, ranging from classic favorites like Gulab Jamun and Jalebi to unique creations that blend traditional recipes with modern twists. Each sweet is crafted with care and attention to detail, ensuring that every bite is a delightful experience.
                </p>
                <div className="flex gap-4 mt-6">

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