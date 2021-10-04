import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="contactSection">
      <form id="contact-form" onSubmit={handleSubmit} className="contactForm">

        <div>
          <h1 data-testid="h1tag" className="contactTitle">SEND ME A LITTLE MESSAGE . . .</h1>
        </div>

        <div className="contactItem">
          <label htmlFor="name">NAME:</label>
          <input className="contactInput" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div className="contactItem">
          <label htmlFor="email">EMAIL:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        <div className="contactItem">
          <label htmlFor="message">MESSAGE:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div className="contactItem submitContact">
          <button data-testid="button" type="submit">Submit</button>
        </div>

      </form>
    </section>
  );
}

export default ContactForm;
