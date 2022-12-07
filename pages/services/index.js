import Layout from '../../components/Layout'
import Image from 'next/image'

import { FaFaucet, FaBorderAll, FaRulerCombined, FaHome, FaHammer, FaPuzzlePiece } from 'react-icons/fa'

import styles from '../../styles/services.module.css'
import Link from 'next/link'

const services = [
    {
        title: 'Full Home Renovation',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        img: '/projects/proj1/img-3.jpg'
    },
    {
        title: 'Kitchens',
        blurb: 'The most frequently used room in the house, your kitchen, defines your personality even more than your bedrooms. While we love the modern elements, when it comes to kitchen design, our designers focus on one aspect: Functionality!',
        img: '/projects/proj1/img-3.jpg'
    },
    {
        title: 'Bathrooms',
        blurb: 'A well-designed bathroom can bring about a magnanimous impact on the overall feel of the house. Whether you are looking to add value to flip the house, or have plans to settle in, a new bathroom can add heaps of functionality and style to your abode.',
        img: '/projects/proj2/img-6.jpg'
    },
    {
        title: 'Basement Finishing',
        blurb: 'If you are thinking that your basement needs to perform more than just an extra space in your house, now is the time to act and get it done.',
        img: '/projects/proj1/img-3.jpg'
    },
    {
        title: 'Commercial Projects',
        blurb: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus.',
        img: '/projects/proj1/img-3.jpg'
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
                        From exteriors to interior renovations, roofing, foundation, restoration, and remodeling bathrooms and kitchens, MAYKs has repeatedly surpassed its client’s expectations.
                    </p>
                    <p>
                        Over-delivering is, perhaps, the norm at our end!
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
                                <div className={styles.imgContainer}>
                                    <div className={styles.img} >
                                        <Image src={service.img} layout='fixed' width={400} height={400} alt='service image' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </Layout>
    )
}