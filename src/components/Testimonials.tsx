import '../css/testimonial.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

// assets 
import t1 from '../assets/t-image1.png'
import t2 from '../assets/t-image2.jpg'
import t3 from '../assets/t-image3.jpg'

// react-icons 
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

interface TestimonialItem {
    id: number,
    image: any,
    review: string,
    name: string,
    status: string
}

const testimonial_data: TestimonialItem[] = [
    {
        id: 1,
        image: t1,
        review: 'I made the right choice by choosing this Fitness club and buy chossing right coach.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nulla.',
        name: 'MATHEW HENDRICKSON',
        status: 'ENTERPRENEUR'
    },
    {
        id: 2,
        image: t2,
        review: 'The best fitness club in the Asghabat, with the passionate coaches and friendly stuff.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nulla.',
        name: 'MASON MOUNT',
        status: 'LAWER'
    },
    {
        id: 3,
        image: t3,
        review: 'I really love this fitness club. In my opinion it is the best fitness club in Ashgabat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nulla.',
        name: 'RICE JAMES',
        status: 'MANAGER'
    },
]


const Testimonials: React.FC = () => {

    const [selected, setSelected] = useState<number>(0)

    // functions 
    const upTestimonial = () => {
        selected === 0
            ? setSelected(testimonial_data.length - 1)
            : setSelected((prev) => prev - 1)
    }

    const downTestimonial = () => {
        selected === testimonial_data.length - 1 
            ? setSelected(0)
            : setSelected(prev => prev + 1)
    }

    return (
        <div className='testimonials'>
            <div className='testimonials-left'>
                <p>TESTIMONIALS</p>
                <p className='stroke-text'>WHAT THEY</p>
                <p>SAY ABOUT US</p>
                <motion.p
                    initial={{ opacity: 0, x: -100}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 3, type: 'spring' }}
                    key={selected} 
                > 
                    {testimonial_data[selected].review} 
                    <div className='testimonials-author'>
                        <span>{ testimonial_data[selected].name } </span> <span>- { testimonial_data[selected].status }</span>
                    </div>
                </motion.p>
            </div>
            

            <div className='testimonials-right' >

                <motion.div initial={{ opacity: 1, x: -100 }} transition={{ duration: 2, type: 'spring'}} whileInView={{opacity: 1, x: 0}}></motion.div>
                <motion.div initial={{ opacity: 1, x: 100 }} transition={{ duration: 2, type: 'spring'}} whileInView={{opacity: 1, x: 0}}></motion.div>
                
                <motion.img
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 3, type: 'spring' }}
                    key={selected} 
                    src={testimonial_data[selected].image} 
                    alt="author" 
                />
                
                <div className='arrows'>
                    <FaArrowLeft size={30} onClick={downTestimonial}/> 
                    <FaArrowRight size={31.9} onClick={upTestimonial}/>                 
                </div>

            </div>
        </div>
    )
}

export default Testimonials