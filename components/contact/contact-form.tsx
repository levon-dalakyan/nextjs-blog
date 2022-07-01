import { FormEvent, RefObject, useRef } from 'react';

import classes from './contact-form.module.css';

export const ContactForm = () => {
  const emailInputRef = useRef() as RefObject<HTMLInputElement>;
  const nameInputRef = useRef() as RefObject<HTMLInputElement>;
  const messageInputRef = useRef() as RefObject<HTMLTextAreaElement>;

  const formSumbitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;
    const enteredName = nameInputRef?.current?.value;
    const enteredMessage = messageInputRef?.current?.value;

    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={formSumbitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={messageInputRef} required />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};
