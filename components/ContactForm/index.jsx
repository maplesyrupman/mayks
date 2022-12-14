import axios from 'axios'
import { useState, useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'


import styles from './contactForm.module.css'

export default function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [response, setResponse] = useState('')

    const { executeRecaptcha } = useGoogleReCaptcha()

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

    async function handleSubmit(e) {
        e.preventDefault()
        setEmailErr(true)
        let isValid = true
        if (formState.name.length < 1) {
            setNameErr(true)
            isValid = false
        } else {
            setNameErr(false)
            setResponse({status: 'Failed', messgae:'Please enter a valid name'})
        }

        if (!formState.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setEmailErr(true)
            isValid = false
            setResponse({status: 'Failed', messgae:'Please enter a valid email'})
            return
        } else {
            setEmailErr(false)
        }

        if (!executeRecaptcha) return


        if (isValid) {
            try {
                const token = await executeRecaptcha()
                if (!token) {
                    setResponse({ message: "Failed to send", status: 'Failed' })
                    return
                }
    
                const result = await axios({
                    method: 'post',
                    url: '/api/contact',
                    data: {...formState, token}
                })
                    .then(response => {
                        if (response.data) {
                            setResponse({
                                message: response.data.message,
                                status: response.data.status
                            })
                        }
                    })
            } catch (err) {
                setResponse({ message: "Failed to send", status: 'Failed' })
            }

        } else {
            setResponse({
                message: "Invalid form input",
                status: 'Failed'
            })
        }
    }

    return (
        <form className={styles.formBody}
            onSubmit={handleSubmit}
        >
            <h2 className={`${styles.headerSecondary} goldText`}>Get a quote.</h2>
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
                <button className='btn btnSm bgGold blackText' >
                    Submit
                </button>
            </div>
            {response && <p>{response.message}</p>}
        </form>
    )
}