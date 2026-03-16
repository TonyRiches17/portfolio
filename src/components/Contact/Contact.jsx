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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      alert("Your Question/Comment was successfully submitted. A reply will follow shortly.");

      setFormData({
        name: "",
        company: "",
        email: "",
        textarea: "",
      });
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error(error);
    }
  };

  const counter = formData.textarea.length;

  return (
    <div id="contact" className="contact">
      <h2 className="contact__header">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        name="contact"
        className="contact__form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p className="contact__text">Please fill out form!</p>
        <label htmlFor="name" className="form__label">
          <input
            onChange={handleChange}
            value={formData.name}
            required
            name="name"
            id="name"
            placeholder="Name"
            type="text"
            className="form__input"
          />
          Your Name*
        </label>
        <label htmlFor="company" className="form__label">
          <input
            onChange={handleChange}
            value={formData.company}
            name="company"
            id="company"
            placeholder="Company"
            type="text"
            className="form__input"
          />
          Company
        </label>
        <label htmlFor="email" className="form__label">
          <input
            onChange={handleChange}
            value={formData.email}
            required
            placeholder="John.Doe@email.com"
            name="email"
            id="email"
            type="email"
            className="form__input"
          />
          Email*
        </label>
        <label htmlFor="textarea" className="form__label">
          <textarea
            onChange={handleChange}
            value={formData.textarea}
            required
            maxLength={400}
            placeholder="Question/Comment"
            name="textarea"
            id="textarea"
            className="form__textarea"
          ></textarea>
          {counter}/400
        </label>
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
