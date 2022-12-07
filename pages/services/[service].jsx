import Layout from "../../components/Layout"
import Image from "next/image"

import style from "../../styles/servicesSpec.module.css"

export default function Service({ title, heroImg, heroWH, section1, section2 }) {

    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7rem' }}>
                <section className='headingContainer'>
                    <div className='headingImg'>
                        <Image src={heroImg} alt={section1.alt} layout='responsive' width={heroWH[1]} height={heroWH[0]} />
                    </div>
                    <h1 className="pageHeading">{title}</h1>
                </section>

                <section className={style.firstSection}>
                    <h2>{section1.heading}</h2>
                    {section1.paras.map((para, idx) => <p key={idx}>{para}</p>)}
                </section>

                <section className={style.secondSection}>
                    <div className={style.wwdCont}>
                        <h2>What We Do</h2>
                        <ol>
                            {section2.paras.map((para, idx) => <li key={idx}>{para}</li>)}
                        </ol>
                    </div>

                    <div style={{ width: "65%", maxHeight: '500px', overflowY: 'hidden' }}>
                        <Image src={section2.img} alt={section2.alt} layout='responsive' width={section2.imgWH[0]} height={section2.imgWH[1]} />
                    </div>
                </section>

                <section className={style.gurantee}>
                    <h2>What you can Expect</h2>
                    <div>
                        <div>
                            <h3>Quality Craftsmanship</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molit anim.</p>
                        </div>
                        <div>
                            <h3>Open Communication</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molit anim.</p>
                        </div>
                        <div>
                            <h3>Honesty and Integrity</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molit anim.</p>
                        </div>
                    </div>
                </section>

                <section>
                    Contact Form
                </section>

            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const mockService = {
        title: 'Basemenets',
        heroImg: '/projects/proj4/img-3.jpg',
        heroWH: [1536, 2048],
        heroAlt: 'A nice kitchen',
        section1: {
            heading: 'We do Basements',
            paras: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]
        },
        section2: {
            heading: 'What we do',
            img: '/projects/proj1/img-3.jpg',
            imgWH: [1, 1],
            alt: 'A nice basement kitchen',
            paras: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            ]
        }
    }

    return {
        props: {
            ...mockService
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            '/services/basements'
        ],
        fallback: true
    }
}