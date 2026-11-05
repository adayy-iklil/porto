import React, { useState, useEffect, useRef } from 'react';

const INITIAL_COMMENTS = [
  {
    id: 'pinned-1',
    name: 'iklilbadar_',
    message: 'Hai! welcome to my portfolio website',
    date: 'Pinned',
    avatar: '/assets/avatar.jpg',
    isPinned: true,
  },
];

export default function Contact() {
  // Left Contact Form State (FormSubmit to badariklil6@gmail.com)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  // Right Comment Box State
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('iklil_portfolio_comments_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      // ignore storage errors
    }
    return INITIAL_COMMENTS;
  });

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentAvatar, setCommentAvatar] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem('iklil_portfolio_comments_v2', JSON.stringify(comments));
    } catch (e) {
      // ignore storage quota errors
    }
  }, [comments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/ajax/badariklil6@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nama: formData.name,
          Email: formData.email,
          Pesan: formData.message,
          _subject: `Pesan Portofolio Baru dari ${formData.name}`,
          _template: 'table',
        }),
      });
      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran foto maksimal 5MB.');
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setCommentAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const newComment = {
      id: `c-${Date.now()}`,
      name: commentName.trim(),
      message: commentText.trim(),
      date: formattedDate,
      avatar: commentAvatar || null,
      isPinned: false,
    };

    setComments((prev) => [prev[0], newComment, ...prev.slice(1)]);
    setCommentName('');
    setCommentText('');
    setCommentAvatar(null);
    setFileName('');
  };

  return (
    <section className="alf-contact" id="contact">
      <div className="alf-container">
        {/* Section Heading */}
        <div className="alf-section-head">
          <h2 className="alf-section-head__title">
            Hubungi <span className="text-blue">saya</span>
          </h2>
          <p className="alf-section-head__sub">
            Punya pertanyaan atau tawaran proyek? Kirimkan pesan dan saya akan
            segera membalasnya.
          </p>
        </div>

        {/* 2-Column Contact & Komentar Grid */}
        <div className="alf-contact__grid">
          {/* LEFT CARD: Hubungi Saya + FIND ME */}
          <div className="alf-contact-card">
            <div className="alf-contact-card__top">
              <div>
                <h3 className="alf-contact-card__title">Hubungi Saya</h3>
                <p className="alf-contact-card__sub">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita
                  bicara.
                </p>
              </div>
              <i className="uil uil-share-alt alf-contact-card__share"></i>
            </div>

            <form onSubmit={handleContactSubmit} className="alf-form">
              <div className="alf-input-group">
                <i className="uil uil-user alf-input-group__icon"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="alf-input"
                />
              </div>

              <div className="alf-input-group">
                <i className="uil uil-envelope alf-input-group__icon"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="alf-input"
                />
              </div>

              <div className="alf-input-group alf-input-group--textarea">
                <i className="uil uil-comment-alt-lines alf-input-group__icon"></i>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="alf-input alf-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="alf-btn alf-btn--primary alf-btn--full"
              >
                <i className="uil uil-message"></i>
                <span>
                  {status === 'submitting' ? 'Mengirim Pesan...' : 'Kirim Pesan'}
                </span>
              </button>

              {status === 'success' && (
                <div className="alf-form-alert alf-form-alert--ok">
                  <i className="uil uil-check-circle"></i> Pesan berhasil
                  terkirim ke email Iklil Badar!
                </div>
              )}

              {status === 'error' && (
                <div className="alf-form-alert alf-form-alert--err">
                  <i className="uil uil-exclamation-triangle"></i> Gagal mengirim
                  pesan. Silakan hubungi via WhatsApp/Email.
                </div>
              )}
            </form>

            {/* FIND ME Social Cards inside Left Column */}
            <div className="alf-findme-box">
              <div className="alf-findme-box__head">
                <span className="alf-findme-box__line" />
                <span>FIND ME</span>
              </div>

              <a
                href="https://www.instagram.com/ikliladay/"
                target="_blank"
                rel="noopener noreferrer"
                className="alf-findme-item alf-findme-item--featured"
              >
                <div className="alf-findme-item__icon alf-findme-item__icon--ig">
                  <i className="uil uil-instagram"></i>
                </div>
                <div className="alf-findme-item__info">
                  <strong>Instagram</strong>
                  <span>@ikliladay</span>
                </div>
                <i className="uil uil-external-link-alt alf-findme-item__ext"></i>
              </a>

              <div className="alf-findme-box__row">
                <a
                  href="https://www.linkedin.com/in/iklil-badar-4729a8422/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alf-findme-item"
                >
                  <div className="alf-findme-item__icon alf-findme-item__icon--li">
                    <i className="uil uil-linkedin-alt"></i>
                  </div>
                  <div className="alf-findme-item__info">
                    <strong>LinkedIn</strong>
                    <span>Iklil Badar</span>
                  </div>
                </a>

                <a
                  href="https://github.com/adayy-iklil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alf-findme-item"
                >
                  <div className="alf-findme-item__icon alf-findme-item__icon--gh">
                    <i className="uil uil-github-alt"></i>
                  </div>
                  <div className="alf-findme-item__info">
                    <strong>GitHub</strong>
                    <span>@adayy-iklil</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Komentar Live Box */}
          <div className="alf-contact-card alf-comment-card">
            <div className="alf-comment-card__header">
              <span className="alf-comment-card__icon">
                <i className="uil uil-comments"></i>
              </span>
              <h3>
                Komentar <span className="text-blue">({comments.length})</span>
              </h3>
            </div>

            <form onSubmit={handleCommentSubmit} className="alf-comment-form">
              <div className="alf-comment-field">
                <label>
                  <i className="uil uil-user"></i> Nama <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  required
                  className="alf-input"
                />
              </div>

              <div className="alf-comment-field">
                <label>
                  <i className="uil uil-comment-dots"></i> Pesan{' '}
                  <span className="req">*</span>
                </label>
                <textarea
                  rows="3"
                  placeholder="Tulis pesan Anda di sini..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                  className="alf-input alf-textarea"
                />
              </div>

              <div className="alf-comment-field">
                <label>
                  <i className="uil uil-image"></i> Foto Profil{' '}
                  <small>(Opsional)</small>
                </label>
                <div className="alf-file-picker">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      fileInputRef.current && fileInputRef.current.click()
                    }
                    className="alf-file-picker__btn"
                  >
                    <i className="uil uil-camera-plus"></i>
                    <span>{fileName ? fileName : 'Pilih Foto'}</span>
                  </button>
                  <span className="alf-file-picker__hint">Ukuran maks: 5MB</span>
                </div>
              </div>

              <button
                type="submit"
                className="alf-btn alf-btn--primary alf-btn--full"
              >
                <i className="uil uil-message"></i>
                <span>Kirim Komentar</span>
              </button>
            </form>

            {/* Comment Feed */}
            <div className="alf-comment-list">
              {comments.map((item) => (
                <div
                  key={item.id}
                  className={`alf-comment-item ${item.isPinned ? 'is-pinned' : ''}`}
                >
                  <div className="alf-comment-item__avatar">
                    {item.avatar ? (
                      <img src={item.avatar} alt={item.name} />
                    ) : (
                      <span>{item.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="alf-comment-item__body">
                    <div className="alf-comment-item__top">
                      <strong>{item.name}</strong>
                      {item.isPinned && (
                        <span className="alf-comment-item__pin">Author</span>
                      )}
                      <small>{item.date}</small>
                    </div>
                    <p>{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
