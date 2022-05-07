import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"


import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/thumbs'
import styles from '../../styles/slideshow.module.css'
import Image from "next/image"

export default function Slideshow({ imageCount, proj }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const imageNums = Array.from('x'.repeat(imageCount))

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

                {imageNums.map((imgNum, idx) => {
                    return (
                        <SwiperSlide key={`${idx}-slide`} className={styles.mainSlide}>
                                <div className={styles.mainImg}>
                                    <Image src={`/projects/${proj}/${proj}-${idx}.jpg`} layout='responsive' height={640} width={481} alt='hey' />
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
                slidesPerView={2}
                cssMode
            >
                {imageNums.map((imgNum, idx) => {
                    return (
                        <SwiperSlide key={`${idx}-slide`} className={styles.thumbSlide}>
                                <div className={styles.thumbImg}>
                                    <Image src={`/projects/${proj}/${proj}-${idx}.jpg`} layout='responsive' height={640} width={481} alt='hey' />
                                </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </>
    );
}