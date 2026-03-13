import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    textarea: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(prev => ({...prev,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData({
    name: "",
    company: "",
    email: "",
    textarea: "",});
    alert("Your question/comment was successfully submitted");
  };

  const counter = formData.textarea.length;



  return(
    <div id="contact" className="contact">
      <h2 className="contact__header">Contact Me</h2>
      <form onSubmit={handleSubmit} netlify="true" name="contact" className="contact__form">
        <p className="contact__text">Please fill out form!</p>
        <label htmlFor="name" className="form__label">
          <input onChange={handleChange} value={formData.name} required name="name" id="name" placeholder="Name" type="text" className="form__input" />
          Your Name*
        </label>
        <label htmlFor="company" className="form__label">
          <input onChange={handleChange} value={formData.company} name="company" id="company" placeholder="Company" type="text" className="form__input" />
          Company
        </label>
        <label htmlFor="email" className="form__label">
          <input onChange={handleChange} value={formData.email} required placeholder="John.Doe@email.com" name="email" id="email" type="email" className="form__input" />
          Email*
        </label>
        <label htmlFor="textarea" className="form__label">
        <textarea onChange={handleChange} value={formData.textarea} required maxLength={400} placeholder="Question/Comment" name="textarea" id="textarea" className="form__textarea"></textarea>
        {counter}/400
        </label>
        <button type="submit" className="form__button">Submit</button>
      </form>
    </div>
  )
}

export default Contact;