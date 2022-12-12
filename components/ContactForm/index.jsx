import { useState } from 'react'

import styles from './contactForm.module.css'

export default function ContactForm() {

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
        </form>
    )
}