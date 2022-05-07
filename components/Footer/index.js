import Link from "next/link"
import Image from "next/image"

import styles from './footer.module.css'


export default function Footer() {


    return (
        <div>
            <div className={styles.footerMain}>
                <div className={styles.logoContainer}>
                    <Image src={'/images/logo.png'} layout='responsive' width={400} height={200} alt='logo'/>
                </div>
                <section className='lg:flex'>
                    <div className={styles.linkContainer}>
                        <h6 className={styles.heading}>Quick Links</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>Gallery</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linkContainer}>
                        <h6 className={styles.heading}>Contact</h6>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>
                                        (416) 123-4567
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className={styles.link}>
                                        admin@tedescogroup.ca
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <p className={styles.text}>
                                    123 Main St. Toronto, ON
                                    G7H3X5
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className={styles.divider}></div>
            <section className={styles.footerLegal}>
                <div className={styles.legalLinks}>
                    <Link href='/'>
                        <a className={styles.link}>Privacy Policy</a>
                    </Link>
                    <Link href='/'>
                        <a className={styles.link}>Terms of Service</a>
                    </Link>
                </div>
                <div className={styles.text}>
                    ©2022 SMU Design | RWI Labs
                </div>
            </section>
        </div>
    )
}