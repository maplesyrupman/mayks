import Layout from "../../components/Layout"
import Slideshow from "../../components/Slideshow"
import styles from '../../styles/proj.module.css'

import { getAllProjectIds, getProjectData } from "../../lib/gallery"
import Link from "next/link"

export async function getStaticProps({ params }) {
    const data = getProjectData(params.proj)
    return {
        props: {
            ...data
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export default function Project({ imageCount, proj, desc }) {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.gallery}>
                    <div className={styles.heading}>
                        <Link href='/gallery'>
                            <a className={`btn bgOrange ${styles.backBtn}`}>back</a>
                        </Link>
                        <h1 className={styles.desc}>
                            {desc}
                        </h1>
                    </div>
                    <Slideshow
                        imageCount={imageCount}
                        proj={proj}
                    />
                </div>
            </div>
        </Layout>
    )
}