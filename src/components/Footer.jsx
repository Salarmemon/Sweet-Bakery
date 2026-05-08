import footerImg from '../assets/footer.png';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,  faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    

    const categories1 = [
        { name: "Fast Food",
            href: "#"
         },
        { name: "Special Sweets", href: "#" },
        { name: "Biscuits", href: "#" },
        { name: "Fresh Cakes", href: "#" }
    ];

    const categories2 = [
        { name: "Desserts", href: "#" },
        { name: "Dairy Items", href: "#" },
        { name: "Bread", href: "#" },
        { name: "Bakery Items", href: "#" }
    ];

    return (
        <motion.footer id="contact" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} transition={{delay: 0.2, duration: 1}}className="footer-section flex flex-col md:flex-row bg-gray-800 text-gray-200 py-8 items-center justify-content px-4 z-0 relative"
        style={{ backgroundImage: `url(${footerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div id="overlay" className="absolute w-full h-full inset-0 bg-black/85 z-10"></div>

        
                    <div className="categories flex flex-col items-center gap-4 z-20 m-6 md:m-20">

                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 font-heading">Our Categories</h3>
                    
                    <div className="flex  items-center gap-12">
                        <ul className="flex flex-col items-start gap-6 ">
                            {categories1.map((category, index) => (
                                <motion.li key={index} initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{once: true}} transition={{delay: 0.8 + 0.1 * index, duration: 0.1 }} className="hover:text-yellow-500 transition-all duration-300 cursor-pointer text-[clamp(0.5rem,1.5vw,2.3rem)] transform  hover:scale-120">
                                    {category.name}
                                </motion.li>
                            ))}
                        </ul>
            
                        <ul className="flex flex-col items-start gap-6">
                            {categories2.map((category, index) => (
                                <motion.li key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + 0.1 * index, duration: 0.1 }} className=" hover:text-yellow-500 transition-all duration-300 cursor-pointer text-[clamp(0.5rem,1.5vw,2.3rem)] hover:scale-110">
                                    {category.name}
                                </motion.li>
                            ))}

                        </ul>
                        </div>
                    </div>
                
                <motion.div className="logo-section flex flex-col items-center gap-4 z-20 mt-8 md:mt-0 border-gray-700 p-4 rounded-full border-2 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 aspect-square hover:border-yellow-500" initial={{border: "none", opacity: 0}} whileInView={{border: "2px solid #fff", opacity: 1}} viewport={{once: true}} transition={{delay: 1, duration: 0.5}}>
                
                    <motion.img initial={{opacity:0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: 1.1, duration: 0.5}} src={logo} alt="Logo" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover" />

                    <motion.p initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{delay: 1.2, duration: 0.5}} className="logo-text text-center text-[clamp(0.6rem,2.2vw,2.5rem)] font-heading">
                        Sweet Bakers
                    </motion.p>

                    <div className="social-icons flex gap-4 mt-4">
                        <a href="https://www.facebook.com" className=" transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-yellow-500 hover:bg-yellow-700 hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com" className="hover:text-gray-400 transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-yellow-500 hover:bg-yellow-700">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </motion.div>

                <div className="contact-section flex flex-col items-center gap-4 z-20 mt-8  border-gray-700 m-12" >
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mb-6 font-heading">Contact Us</h3>
                    <p id="phone" className='contact-text '><span className="mx-2 text-yellow-500">Phone:</span><a href="tel:+92229876" className="hover:text-gray-400 transition-all duration-300  mb-6">+92-2287658</a></p>

                    <p className='mb-6 email-text'><span className="text-yellow-500 mx-2">Email:</span>
                    <a href="mailto:sweetbakers@email.com" className="hover:text-gray-400 transition-all duration-300">
                        sweetbakers@email.com
                    </a>
                    </p>
                </div>

        </motion.footer>
    );
}

export default Footer;