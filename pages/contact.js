import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'

export default function Contact() {

    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading gold`}>
                    Contact Us
                </h1>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.infoContainer}>
                    <h2 className={`${styles.headerSecondary} blackText`}>Get in touch.</h2>
                    <div className={styles.infoTextContainer}>
                        <div>
                            <h3 className={styles.heading}>Malek Khakrah - President</h3>
                            <p className={styles.text}>Email: mayks@mayks.ca</p>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Dodish Malek - Operations Director</h3>
                            <p className={styles.text}>Phone: 416-877-8923</p>
                            <p className={styles.text}>Email: dodish@mayks.ca</p>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Address</h3>
                            <p className={styles.text}>123 Someplace Blvd. Toronto,
                                <br />
                                ON Canada M1G 2L9
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}