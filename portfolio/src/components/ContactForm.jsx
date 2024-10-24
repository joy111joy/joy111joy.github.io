import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;
    
  
    // Define template parameters
    const templateParams = {
      from_name: formData.name,    // Must match the template
      message: formData.message    // Must match the template
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('Your message has been sent!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormStatus('Failed to send your message. Please try again later.');
      });
  
    // Clear the form fields after submission
    setFormData({
      name: '',
      message: '',
    });
  };


  return (
    <div className='ContactForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Send Message</button>
      </form>

      {formStatus && <p id='Conf  '>{formStatus}</p>} {/* Display status message */}
    </div>
  );
};

export default ContactForm;
