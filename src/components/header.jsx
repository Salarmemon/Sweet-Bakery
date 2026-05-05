import { motion, AnimatePresence } from 'framer-motion';
import {useState, useEffect} from 'react';
import logo from '../assets/logo.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const navVariables = [{
        href: "#home",
        name: "Home"
    },
    {   href: "#about",
        name: "About"
    }, 
    {   href: "#menu",
        name: "Menu"
    },
    {        href: "#gallary",
        name: "Gallary"
    },
    {
        href: "#contact",
        name: "Contact"
    },
    {
        href: "https://order.sindhsweets.com/",
        name: "Order Online"
    }
    ];




const images = [image1, image2, image3, image4, image5, image6];


function HamburgerMenu({menuItems, isOpen, toggleMenu}) { 
    return (
        
        <div className="md:hidden z-50 absolute top-4 right-4 w-10 flex float-end items-center">
            <button onClick={toggleMenu} className="hamburger-button flex flex-col items-center justify-center gap-1 w-8 h-8">
                <span className={`block h-1 w-full bg-gray-300 rounded-sm transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-1 w-full bg-gray-300 rounded-sm transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 w-full bg-gray-300 rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

        <AnimatePresence>
        {isOpen && (
            <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 50}} transition={{duration: 0.3}} className="hamburger-menu absolute top-16 right-4 bg-black/90 backdrop-blur-md rounded-lg p-4 flex flex-col items-start gap-4 z-50">

                {menuItems.map((item, index) => (
                    <a key={index} href={`${item.href}`} 
                    target={item.href.startsWith('http') ? '_blank' : '_self'} className="nav-link text-gray-300 hover:text-gray-100 transition-all duration-300 hover:scale-110 text-lg font-medium" onClick={(e) => {

                        toggleMenu();
                    }}>
                        {item.name}
                    </a>
                ))}
            </motion.div>
        )}
        </AnimatePresence>
        </div>
    
    );
}
    
function Navbar() {
const [isOpen, setIsOpen] = useState(false);

    
    return (
        
        <motion.nav initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.8}}  className="navbar flex fixed w-full items-center justify-between p-4  shadow-md top-0 left-0 bg-black/90 backdrop-blur-md z-50 ">

            <HamburgerMenu menuItems={navVariables} isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
            <div className="logo-container">

            <img src={logo} alt="Sindh Sweets Logo" className="logo h-10 md:h-16 lg:h-28 rounded-full" />

            </div>
            
            <div className="hidden md:flex gap-8 mr-8">
                {navVariables.map((item, index) => (

                    <a key={index} href={`${item.href}`} target={item.href.startsWith('http') ? '_blank' : '_self'}  className="nav-link text-gray-300 hover:text-gray-100 transition-all duration-300 hover:scale-110 text-lg font-medium" onClick={(e) => {
            

                    }}>
                        {item.name}
                    </a>        
                ))}
            </div>
            </motion.nav>
    
    );
}

function Header() {

    const [startingImage, setStartingImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartingImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const visibleImages = [
  images[startingImage % images.length],
  images[(startingImage + 1) % images.length],
  images[(startingImage + 2) % images.length],
  images[(startingImage + 3) % images.length],
];
    return (
        <header className='bg-slate-950 w-full' id="home">
            <Navbar />

            <motion.div className="header-content mt-24 md:mt-36  lg:mt-52  p-4 md:p-12 flex  items-center justify-center md:items-start md:justify-start gap-12 sha" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0}} transition={{duration: 1, delay: 0.3}}>
                <div className="content flex flex-col items-start justify-start shadow-md shadow-slate-500 bg-slate-900 p-6">
                <h1 className="text-[clamp(0.6rem,2vw,3rem)] font-heading text-gray-100 mb-4 ">
                    <span className='text-[clamp(0.4rem,2vw,1.5rem)]'>🍩</span> Welcome to New Famous Bakers & Fast Food <span className='text-[clamp(0.4rem,2vw,1.5rem)]'>🍩</span></h1>
                <h2 className="text-[clamp(0.7rem,4vw,3rem)] text-gray-100 mb-6 font-heading font-bold ">Find Your Perfect Healthy & Delicious Meal</h2>


                <p className="text-gray-100 mb-12 w-full mr-24 text-[clamp(0.6rem,2vw,1.25rem)]">New Famous Bakers & Fast Food, located in the heart of Karachi, is a trusted name known for its exceptional taste and quality. With years of excellence, we serve delicious sweets, freshly baked delights, and flavorful fast food—crafted to satisfy every craving.</p>

                </div>

            
                <motion.div 
            
                initial={{opacity: 0, x: "-100%"}} animate={{opacity: 1, x: 0, rotate:360}} transition={{duration: 1, delay: 0.6, rotate: { duration: 4, delay: 0.1
                }}} className="images rounded-full  flex-shrink-0 overflow-hidden hidden sm:grid grid-cols-2 z-0  grid-rows-2 gap-1 ">
                    {visibleImages.map((image, index) => (
                        <img key={index} src={image} alt={`Sindh Sweets ${index + 1}`} className="w-full h-full object-cover" />
                    ))}
                    
                </motion.div>
        
            </motion.div>

        </header>
    );
}
export default Header