import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from "./contacts.module.scss";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qu1pg6a",
        "template_3am4cxs",
        form.current,
        "QQE1SltAzB7aEcAZ-"
      )
      .then(
        (result) => {
              console.log(result.text);
              console.log("massage sent");
              e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
    
    return (
      <section className={styles.contactsSection}>
        <h2 className={styles.contactTitle}>
          <span className={styles.textColorize}>Get</span> in touch
        </h2>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name</label>
          <input
            className={styles.contactsInput}
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            className={styles.contactsInput}
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea className={styles.contactsTextarea} name="message" />
          <input type="submit" value="Send" className={styles.submitButton} />
        </form>
      </section>
    );
};

export default Contact;