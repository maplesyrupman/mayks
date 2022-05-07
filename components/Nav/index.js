import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import styles from './nav.module.css'

import { FiMenu, FiX } from "react-icons/fi"

export default function Nav({ home }) {
    const [dropdownVisible, setDropdownVisibility] = useState(false)

    function toggleDropdown() {
        setDropdownVisibility(!dropdownVisible)
    }


    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <Image src={'/images/alt-logo.svg'} width={240} height={95} alt='logo'/>
                </div>

                <div className="flex items-center">
                    <ul className={styles.linkContainer}>
                        <li>
                            <Link href='/'>
                                <a className={styles.navLink}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a className={styles.navLink}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/services'>
                                <a className={styles.navLink}>Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/gallery'>
                                <a className={styles.navLink}>Gallery</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a className={`bgOrange btn btnLg`}>
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.burger}>
                        <button onClick={toggleDropdown}>
                            {dropdownVisible ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`${styles.dropdown} ${dropdownVisible ? '' : styles.minimizeDropdown}`}>
                <ul className={styles.dropdownLinks}>
                    <li>
                        <Link href='/'>
                            <a className={styles.navLink}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/services'>
                            <a className={styles.navLink}>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/gallery'>
                            <a className={styles.navLink}>Gallery</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}