import Image from "next/image"

import Layout from "../components/Layout"

import styles from '../styles/about.module.css'

export default function About() {

    return (
        <Layout>
            <div className={styles.headingContainer} >
                <h1 className='pageHeading'>About Us</h1>
                <div className={styles.headingImg}>
                    <Image src='/images/about-banner-overlay.jpg' layout='responsive' width={375} height={211} alt='trades person' />
                </div>
            </div>
            <section className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                    <h2 className={`${styles.aboutHeading} pageHeading`}>Mayk&apos;s Service</h2>
                    <p>
                        Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </p>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    </p>
                    <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </p>
                </div>
            </section>
            <section className={styles.bioSection} >
                <div className={styles.bioContainer}>
                    <div className={styles.bioImg}>
                    </div>
                    <div className={styles.bioTextContainer}>
                        <h3 className={styles.bioName}>Dodish</h3>
                        <p className={styles.bioPara}>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                    </div>
                </div>
                <div className={styles.bioContainer}>
                    <div className={styles.bioImg}>

                    </div>
                    <div className={styles.bioTextContainer}>
                        <h3 className={styles.bioName}>Dodish</h3>
                        <p className={styles.bioPara}>
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}