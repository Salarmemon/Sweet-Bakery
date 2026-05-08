import { image } from 'framer-motion/client';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import { motion } from 'framer-motion';
const dishes = [
    { name: "Zinger Burger", 
      image: image1,
      id : 1
    },
    { name: "Cake",
      image: image2,
      id : 2
    },
    { name: "Cheese Fries",
      image: image3,
      id : 3
    },
    { name: "Tea",
      image: image4,
      id : 4
    }, 
    { name: "Tanduri Chicken",
      image: image5,
      id : 5
    },
    { name: "Fruit Chaat",
      image: image6,
      id : 6
    }
]

function Menu() {
    return (
        <section id="menu" className="menu-section py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-[clamp(0.8rem,3vw,4rem)] font-bold text-center mb-12 font-heading">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="menu-item bg-white relative rounded-lg shadow-md overflow-hidden">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: dishes.indexOf(dish) * 0.2 }} viewport={{once: true}} className="relative">

                            <img src={dish.image} alt={`Menu Item ${dish.id}`} className="w-full  h-full  object-cover z-0 max-h-[400px]" />
                            </motion.div>
                        <div className="text-center p-4">
                            <h3 className="text-xl font-bold mb-2 font-heading">{dish.name}</h3>
                        <motion.button whileHover={{scale: 1.1}} className="order-button  bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 to hover:to-yellow-400 text-white px-4 py-2 rounded-full duration-300 font-heading">
                                Order Now
                            </motion.button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;