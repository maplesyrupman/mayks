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
            <Image src={'/images/hero-img-overlay.jpg'} layout='responsive' height={82} width={175} alt='finished kitchen'/>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <h1 className={`pageHeading ${styles.heroText}`}>Restoration.</h1>
              <h1 className={`pageHeading ${styles.heroText}`}>Design.</h1>
              <h1 className={`pageHeading ${styles.heroText}`}>Build.</h1>
            </div>
            <div className={styles.heroBtns}>
              <Link href='/contact'>
                <a className="btn btnSm bgOrange">Get a Quote</a>
              </Link>
              <Link href='/gallery'>
                <a className="btn btnSm bgBlue">View Our Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutContainer}>
        <div >
          <h2 className={styles.heading}>
            Delivering Exceptional Services Since 1995
          </h2>
          <p className={styles.text}>
            Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.
          </p>
          <div className={styles.aboutBtn}>
            <Link href='/about'>
              <a className='btn btnSm bgBlue'>
                About Us
              </a>
            </Link>
            {/* <Button type={'link'} colour={'secondary'} content='About Us' size='small' /> */}
          </div>
        </div>
      </section>

      <section className={styles.comResContainer}>
        <div className={styles.comResTextContainer}>
          <h2 className={`${styles.heading} ${styles.light} ${styles.left}`}>
            Experienced in Commercial <br />
            and Residential Projects
          </h2>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            One tasty titbit of information.
          </p>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            Another tasty titbit of information with a longer explanation
            of what it means
          </p>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            One tasty titbit of information.
          </p>
          <p className={`${styles.text} ${styles.light} ${styles.left}`}>
            Another tasty titbit of information with a longer explanation
            of what it means
          </p>
        </div>

        <div className={styles.comResImg}>
          <Image src='/images/home-middle.jpg' layout="responsive" width={245} height={328} alt='trades worker'/>
        </div>

      </section>

      <section className={styles.testsContainer}>
        {/* <div>
          <Image src='/images/testimonialBG-overlay.jpg' layout='responsive' width={3} height={2} />
        </div> */}
        <h2 className={`${styles.heading} ${styles.testHeading}`}>
          Testimonials
        </h2>
        <Testimonials />
      </section>

    </Layout>
  )
}