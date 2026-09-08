import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

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
      Pesan: formState.message
    };

    fetch('https://formsubmit.co/ajax/badariklil6@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((res) => {
        if (res.ok) {
          setFormSuccess(true);
          setFormState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setFormSuccess(false), 5000);
        } else {
          alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        }
      })
      .catch(() => {
        alert('Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.');
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
            <p className="contact-lead-desc">
              Saya sangat tertarik dengan tawaran magang, kerja sama proyek web/software, atau diskusi seru mengenai dunia IT. Silakan hubungi saya melalui form atau kontak di bawah ini.
            </p>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail className="w-5 h-5" />
              </div>
              <div className="contact-item-details">
                <h4>Email</h4>
                <a href="mailto:badariklil6@gmail.com">badariklil6@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone className="w-5 h-5" />
              </div>
              <div className="contact-item-details">
                <h4>Telepon / WhatsApp</h4>
                <p>+62 877-8239-0705</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="contact-item-details">
                <h4>Lokasi</h4>
                <p>Pancoran, Jakarta Selatan</p>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Ikuti Saya</h4>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/ikliladay/" 
                  className="social-btn" 
                  aria-label="Instagram" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/adayy-iklil" 
                  className="social-btn" 
                  aria-label="Github" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/iklil-badar-4729a8422/" 
                  className="social-btn" 
                  aria-label="LinkedIn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
            {formSuccess && (
              <div id="form-success" className="form-success-msg">
                Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Nama Anda" 
                value={formState.name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="email@example.com" 
                value={formState.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Topik pesan" 
                value={formState.subject} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tuliskan pesan Anda di sini..." 
                value={formState.message} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button id="submit-btn" type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit">
              {isSubmitting ? 'Mengirim...' : (
                <>
                  Kirim Pesan <Send className="w-4 h-4 ml-1 inline" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
