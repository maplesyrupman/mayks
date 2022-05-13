import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/thumbs'
import styles from '../../styles/slideshow.module.css'
import Image from "next/image"

export default function Slideshow({ imgDimensions, proj }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const imgNames = Object.keys(imgDimensions)

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                cssMode
                className={styles.mainContainer}
                loop
            >

                {imgNames.map((img) => {
                    const {height, width} = imgDimensions[img]
                    return (
                        <SwiperSlide key={img} className={styles.mainSlide}>
                                <div className={styles.mainImg}>
                                    <Image 
                                        src={`/projects/${proj}/${img}`} 
                                        layout='intrinsic' 
                                        height={height} 
                                        width={width} 
                                        alt='hey' 
                                    />
                                </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>

            <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                loop
                
                className={styles.thumbContainer}
                slidesPerView={3}
                cssMode
            >
                {imgNames.map((img) => {
                    const {height, width} = imgDimensions[img]
                    return (
                        <SwiperSlide key={img} className={styles.thumbSlide}>
                                <div className={styles.thumbImg}>
                                    <Image 
                                        src={`/projects/${proj}/${img}`} 
                                        layout='responsive' 
                                        height={height} 
                                        width={width} 
                                        alt='hey' 
                                    />
                                </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </>
    );
}