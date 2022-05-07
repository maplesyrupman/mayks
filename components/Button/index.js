import styles from './button.module.css'

export default function Button({colour, content, size}) {

    return (
        <a className={`${styles[colour]} ${styles.btn} ${styles[size]}`}>
            {content}   
        </a>
    )
}