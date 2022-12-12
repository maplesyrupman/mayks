import { Navigation, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from './testimonials.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'


const testimonials = [
    {
        name: 'John Smith',
        text: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.'
    },
    {
        name: 'Sarah Stade',
        text: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.'
    },
    {
        name: 'Matthew Vettese',
        text: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.'
    },
    {
        name: 'Alexandra Vesia',
        text: 'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.'
    }
]

export default function Testimonials() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1200}
            autoplay={{
                delay: 4500,
                disableOnInteraction: true
            }}         
              
            navigation
            loop
            className={style.swiperCon}
        >
            {testimonials.map((test, idx) => (
                <SwiperSlide key={idx}>
                    <div className={style.slide}>
                        <p className={style.text}>{test.text}</p>
                        <h4 className={style.name}>{test.name}</h4>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};