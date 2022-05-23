import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './nav.module.css'

import { HiMenu } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={`${styles.header}`}>
            <Link href='/'>
                <a className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Image src={'/images/logo.png'} layout='responsive' width={1} height={1} alt='logo' />
                    </div>
                </a>
            </Link>
            <nav className={styles.nav}>
                <button className={styles.hamburger} onClick={toggleDropdown}>
                    <HiMenu className='goldText' />
                </button>
                <ul className={`${styles.dropdownMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li className={styles.navLink}>
                        <Link href='/'>
                            <a
                                className={styles.navLink}
                                onClick={toggleDropdown}
                            >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='/about'>
                            <a className={styles.navLink} onClick={toggleDropdown} >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='/services'>
                            <a className={styles.navLink} onClick={toggleDropdown} >
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='/gallery'>
                            <a className={styles.navLink} onClick={toggleDropdown} >
                                Gallery
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='/contact'>
                            <a className={styles.navLink} onClick={toggleDropdown} >
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}