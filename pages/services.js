import Layout from '../components/Layout'
import Image from 'next/image'

import { FaFaucet, FaBorderAll, FaRulerCombined, FaHome, FaHammer, FaPuzzlePiece } from 'react-icons/fa'

import styles from '../styles/services.module.css'
import Link from 'next/link'

const services = [
    {
        title: 'Project Management',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.'
    },
    {
        title: 'Full Home Renovation',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.'
    },
    {
        title: 'Kitchens',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.'
    },
    {
        title: 'Bathrooms',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.'
    },
    {
        title: 'Basement Finishing',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.'
    }
]

const secondaryServices = [
    {
        title: 'Plumbing',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaFaucet className={styles.serviceIcon} />
    },
    {
        title: 'Tiling',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaBorderAll className={styles.serviceIcon} />
    },
    {
        title: 'Drywall & Framing',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaRulerCombined className={styles.serviceIcon} />
    },
    {
        title: 'Flooring',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaPuzzlePiece className={styles.serviceIcon} />
    },
    {
        title: 'Carpentry',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaHammer className={styles.serviceIcon} />
    }
]

export default function Services() {
    return (
        <Layout>
            <div className={styles.headingContainer} >
                <h1 className='pageHeading'>Services</h1>
                <div className={styles.headingImg}>
                    <Image src='/images/services-banner-overlay.jpg' layout='responsive' width={375} height={211} alt='trades person' />
                </div>
            </div>
            <section className={styles.servicesParaContainer}>
                <div className={styles.servicesPara}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
                    </p>
                </div>
            </section>
            <section>
                <section className={styles.servicesContainer}>
                    {services.map((service, idx) => {
                        return (
                            <div
                                className={styles.serviceSection}
                                key={idx}
                            >
                                <div className={styles.serviceTextContainer}>
                                    <h2 className={styles.serviceHeading}>{service.title}</h2>
                                    <p className={styles.serviceText}>{service.blurb}</p>
                                    <Link href='/contact'>
                                        <a className='btn btnXs bgGold blackText'>Request a Quote</a>
                                    </Link>
                                </div>
                                <div className={styles.imgPlaceHolder}>

                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>

        </Layout>
    )
}