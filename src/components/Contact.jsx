import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const GithubIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/badariklil6@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nama: formData.name,
        Email: formData.email,
        Subjek: formData.subject,
        Pesan: formData.message
      })
    })
      .then(response => {
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert("Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
        }
      })
      .catch(error => {
        alert("Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Hubungi Saya</span>
          <h2>Mari Terhubung & Berkolaborasi</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Peluang Magang & Kolaborasi</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Saya sangat tertarik dengan tawaran magang, kerja sama proyek web/software, atau diskusi seru mengenai dunia IT. Silakan hubungi saya melalui form atau kontak di bawah ini.
            </p>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="contact-item-details">
                <h4>Email</h4>
                <a href="mailto:badariklil6@gmail.com">badariklil6@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="contact-item-details">
                <h4>Telepon / WhatsApp</h4>
                <p>+62 877-8239-0705</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="contact-item-details">
                <h4>Lokasi</h4>
                <p>Pancoran, Jakarta Selatan</p>
              </div>
            </div>

            <div className="social-links-container" style={{ marginTop: '1rem' }}>
              <h4>Ikuti Saya</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/ikliladay/" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://github.com/adayy-iklil" className="social-btn" aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/iklil-badar-4729a8422/" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="form-success-msg">
                Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Topik pesan"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tuliskan pesan Anda di sini..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
