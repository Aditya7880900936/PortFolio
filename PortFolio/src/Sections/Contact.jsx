import { send } from "@emailjs/browser";
import React from "react";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_vbhnksb

  // template_lyrakqm

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      await send('service_vbhnksb','template_jwidvro', {
        from_name: form.name,
        to_name: "Aditya",
        from_email: form.email,
        to_email: "aditya2310043@akgec.ac.in",
        message: form.message,
      },'gTr95UnTrIDR-In9o');

      setLoading(false);
      alert("Thank you , I will get back to you as soon as possible");
      setForm({ name: "", email: "", message: "" });


    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen mb-10 flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="sm:text-3xl text-2xl font-semibold text-gray_gradient sm:pt-5">Let's Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform , or bring a unique project to life ,I am Here to Help{" "}
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 sm:mt-6 flex flex-col space-y-4"
          >
            <label className="sm:space-y-2 space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name"
              />
            </label>
            <label className="sm:space-y-2 space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email"
              />
            </label>
            <label className="sm:space-y-2 space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Enter your message"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up "
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      {/* <h3 className="head-text">Contact Me</h3> */}
    </section>
  );
};

export default Contact;
