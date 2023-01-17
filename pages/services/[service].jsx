import Layout from "../../components/Layout"
import Image from "next/image"
import ContactForm from "../../components/ContactForm"
import Guarantee from '../../components/Guarantee'

import style from "../../styles/servicesSpec.module.css"

import services from '../../services.json'

export default function Service({ title, heroImg, heroAlt, heroWH, section1, section2 }) {

    return (
        <Layout>
            <section className={style.headingContainer}>
                <div className={style.headingImg}>
                    <Image src={heroImg} alt={heroAlt} layout='responsive' width={heroWH[1]} height={heroWH[0]} />
                </div>
                <h1 className="pageHeading">{title}</h1>
            </section>

            <div className={style.contianer}>
                <section className={style.firstSection}>
                    <h2>{section1.heading}</h2>
                    {section1.paras.map((para, idx) => <p key={idx}>{para}</p>)}
                </section>

                <section className={style.secondSection} >
                    <div className={style.wwdCont}>
                        <h2>What We Do</h2>
                        <ul className="">
                            {section2.paras.map((para, idx) => <li key={idx}>{para}</li>)}
                        </ul>
                    </div>
                    <div className={style.ssImg}>
                        <Image src={section2.img} alt={section2.alt} layout='responsive' width={section2.imgWH[0]} height={section2.imgWH[1]} />
                    </div>
                </section>

                <Guarantee />

                <section className={style.formContainer}>
                    <ContactForm />
                </section>

            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    return {
        props: {
            ...services[params.service]
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            '/services/basements',
            '/services/full-home',
            '/services/bathrooms',
            '/services/kitchens'
        ],
        fallback: true
    }
}