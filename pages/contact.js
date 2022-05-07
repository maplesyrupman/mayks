import { useState } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)

    function updateFormState(e) {
        const fieldName = e.target.name
        const value = e.target.value

        switch (fieldName) {
            case 'name':
                setFormState({ ...formState, name: value.trim() })
                break
            case 'email':
                setFormState({ ...formState, email: value.trim() })
                e.target.value = value.trim()
                break
            case 'phone':
                setFormState({ ...formState, phone: value.trim() })
                break
            default:
                setFormState({ ...formState, message: value.trim() })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        let isValid = true
        if (formState.name.length < 1) {
            setNameErr(true)
            isValid = false
        } else {
            setNameErr(false)
        }

        if (!formState.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setEmailErr(true)
            isValid = false
            return
        } else {
            setEmailErr(false)
        }

        if (isValid) {
            axios({
                method: 'post',
                url: '/api/contact',
                data: formState
            })
            .then(response => {
                console.log(response.data)
            })
        } else {
            console.log('invalid form')
        }
    }

    return (
        <Layout>
            <div className={styles.headingContainer}>
                <h1 className={`pageHeading blue`}>
                    Contact Us
                </h1>
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.infoContainer}>
                    <h2 className={styles.headerSecondary}>Get in touch.</h2>
                    <div className={styles.infoTextContainer}>
                        <div>
                            <h3 className={styles.heading}>Domenic Tedesco - President</h3>
                            <p className={styles.text}>Email: dom@tedescogroup.ca</p>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Eleanor Lastname - Secretary</h3>
                            <p className={styles.text}>Phone: 416-123-4567</p>
                            <p className={styles.text}>Email: admin@tedescogroup.ca</p>
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
                    <form className={styles.formBody}
                        onSubmit={handleSubmit}
                    >
                        <h2 className={styles.headerSecondary}>Get a quote.</h2>
                        <p className={styles.errorMsg}>* required field</p>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='name' className={styles.label}>Name<span className={styles.errorMsg}> *</span></label>
                            <input name='name'
                                type='text'
                                className={`${styles.fieldInput} ${nameErr ? styles.errorBorder : ''}`}
                                onChange={updateFormState}
                            />
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='email' className={styles.label}>Email<span className={styles.errorMsg}> *</span></label>
                            <input name='email'
                                type='email'
                                className={`${styles.fieldInput} ${emailErr ? styles.errorBorder : ''}`}
                                onChange={updateFormState}
                            />
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='phone' className={styles.label}>Phone</label>
                            <input name='phone'
                                type='text'
                                className={styles.fieldInput}
                                onChange={updateFormState}
                            />
                        </div>
                        <div className={styles.fieldContainer}>
                            <label htmlFor='message' className={styles.label}>Message</label>
                            <textarea name='message'
                                className={styles.fieldInput}
                                onChange={updateFormState}
                                
                            />
                        </div>
                        <div>
                            <button className='btn btnSm bgOrange' >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}