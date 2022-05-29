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
                        MAYKS Renovations stands for utmost dedication and perfectionism which is evident in all projects completed so far.
                    </p>
                    <p>
                        Flexible, eager to take on challenging and creative projects make MAYKS a leading name in the local construction industry. Find out more about the dynamic father/son duo behind the company.
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
                            The owner and founder, MALEK, thrives on client interaction and adding a personal touch to each of his projects.
                        </p>
                    </div>
                </div>
                <div className={styles.bioContainer}>
                    <div className={styles.bioImg}>
                    </div>
                    <div className={styles.bioTextContainer}>
                        <h3 className={styles.bioName}>Dodish</h3>
                        <p className={styles.bioPara}>
                            Proud co-owner, Dodish is set to follow in his father’s footsteps. The only difference: Dodish believes it’s time to make MAYKS a household name                        </p>
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
                        Similarly, Dodish believes, following his father’s legacy will help him stay successful for the next 20.
                    </p>
                </div>
            </section>
        </Layout>
    )
}


