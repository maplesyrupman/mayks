import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './testimonials.module.css'

import { ImQuotesLeft, ImArrowRight2, ImArrowLeft2 } from 'react-icons/im'

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

const items = testimonials.map((test, i) => {
    return (
        <div className={`item ${styles.testSlide}`} data-value={`${i}`} key={i}>

            <span className={styles.quote}>
                <ImQuotesLeft />
            </span>
            <p className={styles.testText}>
                {test.text}
            </p>
            <h3 className={styles.name}>
                {test.name}
            </h3>

        </div>
    )
})


const navItem = (item, i) => {
    return <i key={i} onClick={() => this.Carousel.slideTo(i)} />;
};

function Carousel() {
    return [
        <AliceCarousel
            mouseTracking
            disableButtonsControls
            autoPlay
            animationType='slide'
            animationEasingFunction
            autoPlayInterval={7000}
            items={items}
            ref={(el) => (Carousel = el)}
            infinite
            responsive={{
                0: {
                    items: 1
                }
            }}
            key='carousel'
        />,
        // <nav>{items.map(navItem)}</nav>,

        <button className={styles.testBtn} onClick={() => Carousel.slidePrev()} key='prev'><ImArrowLeft2 /></button>,
        <button className={styles.testBtn} onClick={() => Carousel.slideNext()} key='next'><ImArrowRight2 /></button>
    ];
}

export default function Testimonials() {
    return (
        <div className={styles.container}>
                    <button className={styles.testBtn} onClick={() => Carousel.slidePrev()} key='prev'><ImArrowLeft2 /></button>
            < div className={styles.carousel} >

                <AliceCarousel
                    mouseTracking
                    disableButtonsControls
                    autoPlay
                    animationType='slide'
                    animationEasingFunction
                    autoPlayInterval={7000}
                    items={items}
                    ref={(el) => (Carousel = el)}
                    infinite
                    responsive={{
                        0: {
                            items: 1
                        }
                    }}
                    key='carousel'
                />

            </div >
            <button className={styles.testBtn} onClick={() => Carousel.slideNext()} key='next'><ImArrowRight2 /></button>
        </div>
    )
}