import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Iklil Badar. All rights reserved.</p>
        <p style={{ fontSize: '0.85rem' }}>Siswa RPL - SMKN 6 Jakarta</p>
        <button 
          onClick={scrollToTop} 
          className="btn btn-secondary" 
          style={{ padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
