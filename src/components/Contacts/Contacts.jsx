import React, { useRef} from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import emailjs from "@emailjs/browser";

import styles from "./_contacts.module.scss";

const Contact = () => {

  const form = useRef();
  const inputRef = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) { return Notify.failure("Please, fill the field");  }
    
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
            Notify.success(
              "Thank you, your message has been sent successfully"
            );
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            Notify.failure("Sorry something went wrong");
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
        <input className={styles.contactsInput} type="text" name="user_name" />
        <label>Email</label>
        <input
          ref={inputRef}
          className={styles.contactsInput}
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea className={styles.contactsTextarea} name="message" />
        <button type="submit" value="Send" className={styles.submitButton}>
          Send
        </button>
        {/* <input type="submit" value="Send"  className={styles.submitButton} /> */}
      </form>
    </section>
  );
};

export default Contact;
