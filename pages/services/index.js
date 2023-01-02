import Layout from '../../components/Layout'
import Image from 'next/image'

import styles from '../../styles/services.module.css'
import Link from 'next/link'

const services = [
    {
        title: 'Full Home Renovations',
        blurb: 'Have you recently purchased an older home or condominium that needs a facelift? Whether your home is a bungalow, a 4-story townhouse, or a mansion, we have you covered.',
        img: '/projects/proj1/img-3.jpg',
        path: 'full-home'
    },
    {
        title: 'Kitchens',
        blurb: 'The kitchen is the heart of any home. Here you\'ll prepare your breakfast in the morning and enjoy home-cooked meals. We\'re experts in striking perfect balance between luxuary and functionality.',
        img: '/projects/proj1/img-3.jpg',
        path: 'kitchens'
    },
    {
        title: 'Bathrooms',
        blurb: 'Imagine transforming your bathroom into an oasis, with heated floors and a bathtub you can stretch out in. At Mayk\'s, we get luxury bathrooms. Let us turn your bathroom into a spa!',
        img: '/projects/proj2/img-6.jpg',
        path: 'bathrooms'
    },
    {
        title: 'Basements',
        blurb: 'Many homeowners live with unfinished basements. At Mayk\'s, we believe that the basement can be the best part of your home for relaxing and entertainment. Let us help you build the basement of your dreams!',
        img: '/projects/proj1/img-3.jpg',
        path: 'basements'
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
                                    <Link href={`/services/${service.path}`}>
                                        <a className='btn btnXs bgGold blackText'>Learn More</a>
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