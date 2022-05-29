import Image from "next/image"
import Link from "next/link"
import Testimonials from '../components/Testimonials'

import styles from './index.module.css'

import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <section className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroImg}>
            <Image src={'/images/hero-img-overlay.jpg'} layout='responsive' height={82} width={175} alt='finished kitchen' />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <h1 className={`pageHeading ${styles.heroText}`}>MAYK&apos;S <br className={styles.heroBreak} /> SERVICE</h1>
            </div>
            <div className={styles.heroBtns}>
              <Link href='/contact'>
                <a className="btn btnSm bgGold blackText">Get a Quote</a>
              </Link>
              <Link href='/gallery'>
                <a className="btn btnSm bgBlack goldText">View Our Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.aboutContainer} bgBlack`}>
        <div >
          <h2 className={styles.heading}>
            Serving the GTA since 2003
          </h2>
          <p className={styles.text}>
            Welcome to MAYKS, one of the most trusted home renovation companies in Toronto for 20+ years! As a top home renovating contractor, we’ll help make your dream home a reality.
          </p>
          <p className={styles.text}>
            When it comes to redesigning homes, our clients enjoy the process of working with us, rather than feeling overwhelmed and anxious. This is because we put YOU at the center of the decision-making process and believe in open two-way communication.
          </p>
          <p className={styles.text}>
            Don&apos;t be surprised if our projects turn into friendships. We trade tremendous pride when our clients count us among their friends, rather than the snobby contractor who couldn&apos;t keep a straight face.
          </p>
          <div className={styles.aboutBtn}>
            <Link href='/about'>
              <a className='btn btnSm bgGold blackText'>
                About Us
              </a>
            </Link>
            {/* <Button type={'link'} colour={'secondary'} content='About Us' size='small' /> */}
          </div>
        </div>
      </section>

      <section className={`${styles.comResContainer} bgBlack`}>
        <div className={styles.comResTextContainer}>
          <div className={styles.comResText}>
          <h2 className={`${styles.heading} ${styles.dark} ${styles.left}`}>
            Experienced in Commercial <br />
            and Residential Projects
          </h2>
          <p className={`${styles.text} ${styles.dark} ${styles.left}`}>
            At MAYKS we believe every family is unique and so is their vision of a dream house! Some thrive on functionality while others focus on aesthetics.
          </p>
          <p className={`${styles.text} ${styles.dark} ${styles.left}`}>
            Since we have been in the industry for over 20 years, we know EXACTLY what is it the client needs.
          </p>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            Experience world-class luxury with 5-star construction and renovation experts.
          </p>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            Another tasty titbit of information with a longer explanation
            of what it means
          </p>
          </div>
        </div>

        <div className={styles.comResImg}>
          <Image src='/images/home-middle.jpg' layout="responsive" width={245} height={328} alt='trades worker' />
        </div>

      </section>

      <section className={styles.testsContainer}>
        <h2 className={`${styles.heading} ${styles.testHeading}`}>
          Testimonials
        </h2>
        <Testimonials />
      </section>

    </Layout>
  )
}