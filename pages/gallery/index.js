import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/Layout"
import styles from '../../styles/gallery.module.css'
import { getThumbData } from "../../lib/gallery"

export async function getStaticProps() {
    const thumbs = getThumbData()
    return {
        props: {
            thumbs
        }
    }
}

export default function Gallery({ thumbs }) {

    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading gold`}>
                    Gallery
                </h1>
                <p className={styles.headingPara}>
                    Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.gallery}>
                    {thumbs.map((thumb, idx) => {
                        return (
                            <Link href={`/gallery/${thumb.proj}`} key={`proj${idx}`} passHref>
                                <div key={thumb} className={styles.projectCard}>
                                    <div className={styles.imgContainer}>
                                        <div className={styles.cardImg}>
                                            <Image
                                                src={`${thumb.thumbPath}`}
                                                layout='responsive'
                                                width={1}
                                                height={1}
                                                alt='project image'
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.projDesc}>
                                        <h3>{thumb.desc}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}