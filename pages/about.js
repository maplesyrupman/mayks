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
                        Malek founded Mayk&apos;s over 20 years ago when he began designing and renovating homes in the Greater Toronto Area. His passion and attention to detail earned him respect and a strong client base. Malek&apos;s passion and work ethic motivated his son, Dodish, to join him soon after, and the duo has been the heart and soul of Mayk&apos;s ever since. Mayks has recently moved to the west side of Canada and can&apos;t wait to renovate and innovate for the residents of Calgary.
                    </p>
                    <p>
                        Our customers want modern luxury, and thats what we provide. We value the best quality, and when you work with us, that&apos;s exactly what you&apos;ll get. Your satisfaction is our top priority. Whether it&apos;s a renovation or a complete redesign of your home, we&apos;re excited to show you Mayk&apos;s Magic.
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
                            Dodish was born in Afghanistan and moved to Toronto, Canada at just 2 years old. Ever since a young age, Dodish noticed his father, Malek, fixing things around their home. The curiosity in Dodish&apos;s mind intensified. This created intrigue early in his life, which later developed into a passion.
                        </p>
                        <p className={styles.bioPara}>
                            Dodish went to college for accounting in order to help his father with his business. He soon realized he would much rather continue in his father&apos;s footsteps. Dodish started being more hands-on and learning all the trades, one by one. With over 7 years of hands-on experience, he continues to work alongside his father. Attention to detail and customer satisfaction is Dodish&apos;s top priority.
                        </p>
                    </div>
                </div>
                <div className={styles.bioContainer}>
                    <div className={styles.bioImg}>
                    </div>
                    <div className={styles.bioTextContainer}>
                        <h3 className={styles.bioName}>Malek</h3>
                        <p className={styles.bioPara}>
                            Malek was born in Afghanistan, and moved to Toronto, Canada, after living a prosperous life back home. In his younger days, his family owned a farm and he would spend all day and night maintaining the farm. The farm created a discipline and work ethic within Malek.
                        </p>
                        <p className={styles.bioPara}>
                            Malek always loved to learn. This learning coupled with his aim to be better every day. Coming from a village in Afghanistan, there was no opportunity for an education past high school. After moving to the capital, Kabul, Malek began to pursue the education he always wanted. Malek enrolled in a university for biology. He completed medical school and was a practicing doctor for years. He eventually decided to change career paths and went on to become a math professor.
                        </p>
                        <p className={styles.bioPara}>
                            Malek wanted more for his family than what it offered in Afghanistan, so he took a leap of faith and moved to Canada. Malek brought his wife, 2 kids, a nephew, a brother, and his brother&apos;s family. He came to Canada with $100 and a dream. Malek began working in homes as a repairman soon after coming to Canada, and after a few years, became a respected contractor.
                        </p>
                        <p className={styles.bioPara}>
                            With 20 years of contracting experience, Malek is a master of his craft. He now works alongside Dodish and his trusted employees upgrading and renovating homes beyond measure. A doctor turned professor and now master contractor. Creating your dream home is Malek&apos;s top priority.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.aboutContainer}>
                <div className={styles.aboutText}>
                    <p>
                        The winning father-son/duo&apos;s passion is evident through the fact that they oversee ever single project themselves to date They only take up a few projects per year to give utmost attention to each one.
                    </p>
                    <p>
                        From designing to layouts and cost estimates, Malek and Dodish personally oversee every tiny detail. Malek believes that personal relationships and trust are the epitome of success he has had in the industry in the past 20 years.
                    </p>
                    <p>
                        Similarly, Dodish believes, following his father&apos;s legacy will help him stay successful for the next 20.
                    </p>
                </div>
            </section>
        </Layout>
    )
}


