import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Import Styling
import '../stylesheets/ContactUsPage.scss';

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="page--body contact-us">
      <h2 className="page--title contact-us">Contact Us</h2>

      <p className="page--description contact-us">
        If you would like to get into contact with our Society for any reason, whether it be regarding feedback, concerns, or questions  please feel free to submit them via the form below or through our email address, <a href="mailto: execs@zooengg.ca">execs@zooengg.ca</a>.
      </p>

      {/* Login form */}
      <div className="login-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>

          <div className="form-row">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage
