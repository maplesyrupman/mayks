import Layout from '../components/Layout'
import Image from 'next/image'

import { FaPlug, FaFaucet, FaFire, FaHardHat, FaHouseDamage, FaBorderAll, FaRulerCombined, FaPencilRuler, FaHome, } from 'react-icons/fa'

import styles from '../styles/services.module.css'

const services = [
    {
        title: 'Project Management',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaHardHat className={styles.serviceIcon} />
    },
    {
        title: 'Design',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaPencilRuler className={styles.serviceIcon} />
    },
    {
        title: 'Disaster Restoration',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaHouseDamage className={styles.serviceIcon} />
    },
    {
        title: 'Electrical',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaPlug className={styles.serviceIcon} />
    },
    {
        title: 'Plumbing',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaFaucet className={styles.serviceIcon} />
    },
    {
        title: 'Gas',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaFire className={styles.serviceIcon} />
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
        title: 'Roofing',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        icon: <FaHome className={styles.serviceIcon} />
    },
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
                                className={styles.serviceCardBody }
                                key={idx}
                            >
                                {service.icon}
                                <h2 className={styles.serviceHeading}>{service.title}</h2>
                                <p className={styles.serviceText}>{service.blurb}</p>
                            </div>
                        )
                    })}
                </section>
            </section>

        </Layout>
    )
}