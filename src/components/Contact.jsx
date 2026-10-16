import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      Nama: formState.name,
      Email: formState.email,
      Subjek: formState.subject,
      Pesan: formState.message,
    };

    fetch('https://formsubmit.co/ajax/badariklil6@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          setIsSuccess(true);
          setFormState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSuccess(false), 6000);
        } else {
          alert('Maaf, pengiriman gagal. Silakan kirim email langsung ke badariklil6@gmail.com.');
        }
      })
      .catch(() => {
        alert('Terjadi kendala koneksi. Silakan hubungi langsung ke badariklil6@gmail.com.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="contact__title">Call Me / WhatsApp</h3>
              <span className="contact__subtitle">+62 877-8239-0705</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">badariklil6@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Jakarta Selatan, Indonesia</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form grid">
          {isSuccess && (
            <div className="contact__alert-success">
              Pesan Anda berhasil dikirim! Saya akan segera merespons Anda.
            </div>
          )}

          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Nama Anda"
                required
              />
            </div>

            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="subject" className="contact__label">
              Project / Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="contact__input"
              placeholder="Topik / Keperluan"
              required
            />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              cols="0"
              rows="6"
              value={formState.message}
              onChange={handleChange}
              className="contact__input contact__textarea"
              placeholder="Tulis pesan Anda di sini..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button button--flex"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
