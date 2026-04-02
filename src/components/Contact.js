import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
      formRef.current.reset();
    }, (error) => {
      console.error(error);
      setStatus('❌ Failed to send. Please try again or email me directly.');
    });
  };

  return (
    <section id="contact" style={styles.contact}>
      <div className="container">
        <h2>Contact Me</h2>
        <div style={styles.grid}>
          <div style={styles.info}>
            <p><strong>Email:</strong> gebrefillimon@gmail.com</p>
            <p><strong>GitHub:</strong> <a href="https://github.com/kingfillari" target="_blank" rel="noreferrer">kingfillari</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fillimon-gebre/" target="_blank" rel="noreferrer">fillimon-gebre</a></p>
            <p><strong>Telegram:</strong> @kingfillari</p>
            <p><strong>Location:</strong> Mekelle, Ethiopia</p>
          </div>
          <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary" style={styles.btn}>Send Message</button>
            {status && <p style={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    background: '#111827',
  },
  grid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  info: {
    flex: 1,
    background: '#0a0f1c',
    padding: '1.5rem',
    borderRadius: '8px',
  },
  form: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  btn: {
    padding: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  status: {
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
};

export default Contact;