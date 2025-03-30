import { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      subject : ''
    });
  
    const [formStatus, setFormStatus] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.email && formData.message) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' , subject: ''});
      } else {
        setFormStatus('Please fill in all fields.');
      }
    };
  


  return (
    <section id="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📧</div>
            <div className="detail">
              <h3>Email</h3>
              <p>mrmadeus@.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">📱</div>
            <div className="detail">
              <h3>Phone</h3>
              <p>+1 (317) 456-7890</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">📍</div>
            <div className="detail">
              <h3>Location</h3>
              <p>Indianapolis, Indiana</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">💼</div>
            <div className="detail">
              <h3>Work Status</h3>
              <p>Available for freelance</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>
          <div className="form-group">
            <input type="text" name='name' placeholder="Your Name" value={formData.name}  onChange={handleChange} required={true} />
          </div>
          <div className="form-group">
            <input type="email" name='email' placeholder="Your Email"  value={formData.email} onChange={handleChange} required={true} />
          </div>
          <div className="form-group">
            <input type="text" name='subject' placeholder="Subject" value={formData.subject} onChange={handleChange} required={true} />
          </div>
          <div className="form-group">
            <textarea name='message' placeholder="Your Message" rows="5"  value={formData.message} onChange={handleChange} ></textarea>
          </div>
          <button type="submit" className="submit-btn" >Send Message</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/madeus-rene-294196318/?trk=opento_sprofile_details" className="social-link">LinkedIn</a>
        <a href="https://github.com/princelamar509?tab=overview&from=2025-03-01&to=2025-03-24" className="social-link">GitHub</a>
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </section>
  );
};

export default Contact;