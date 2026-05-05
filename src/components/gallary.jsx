import gallaryImg1 from '../assets/gal1.png';
import gallaryImg2 from '../assets/gal2.png';
import gallaryImg3 from '../assets/gal3.png';
import gallaryImg4 from '../assets/gal4.png';
import gallaryImg5 from '../assets/gal5.jpg';
import gallaryImg6 from '../assets/gal6.png';
import { motion } from 'framer-motion';

function Gallary() {
    const gallaryImages = [gallaryImg1, gallaryImg2, gallaryImg3, gallaryImg4, gallaryImg5, gallaryImg6];
    return (
        <section id="gallary" className="gallary-section py-20 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-[clamp(0.8rem,3.2vw,4rem)] font-bold text-center mb-12 font-heading">Our Special Gallary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {gallaryImages.map((image, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{duration: 0.6, delay: (index % 3 * 0.1)}} className="gallary-item bg-white rounded-lg shadow-md overflow-hidden relative">
                            <img src={image} alt={`Gallary Image ${index + 1}`} className="w-full h-full object-cover z-0" />
                            <motion.div animate={{ opacity: [0, 0.5, 0] }} transition={{repeat: Infinity, duration: 2, delay: (index % 3 * 0.1)}} id="shining-effect" className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallary;