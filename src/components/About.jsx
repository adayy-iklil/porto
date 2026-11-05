import React, { useState, useEffect, useRef } from 'react';

const PLAYLIST_TRACKS = [
  { id: 1, title: 'Right Now', artist: 'One Direction', duration: '03:20', seconds: 200 },
  { id: 2, title: 'Love Story', artist: 'Taylor Swift', duration: '03:55', seconds: 235 },
  { id: 3, title: 'Payphone', artist: 'Maroon 5', duration: '03:51', seconds: 231 },
  { id: 4, title: 'Jantung Hati', artist: 'Ghea Indrawari', duration: '04:08', seconds: 248 },
  { id: 5, title: 'Bernafas Tanpamu', artist: 'Last Child', duration: '04:15', seconds: 255 },
  { id: 6, title: 'Sekuat Hatimu', artist: 'Last Child', duration: '04:32', seconds: 272 },
];

function CutoutPortrait({ src, alt }) {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Crop to portrait aspect ratio centered on the subject
      const cropW = Math.floor(img.width * 0.62);
      const cropH = img.height;
      const startX = Math.floor((img.width - cropW) / 2);

      canvas.width = cropW;
      canvas.height = cropH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, startX, 0, cropW, cropH, 0, 0, cropW, cropH);

      try {
        const imgData = ctx.getImageData(0, 0, cropW, cropH);
        const data = imgData.data;
        const total = cropW * cropH;
        const visited = new Uint8Array(total);

        const isCurtainBlue = (idx) => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // Royal blue backdrop has strong B dominance over R and G
          return b > 85 && b - r > 42 && b - g > 18;
        };

        // Flood fill from top, left, and right edges so only outer curtain is removed
        // (protects school tie & badge inside torso)
        const queue = new Int32Array(total);
        let head = 0;
        let tail = 0;

        const pushSeed = (x, y) => {
          const pos = y * cropW + x;
          if (!visited[pos] && isCurtainBlue(pos * 4)) {
            visited[pos] = 1;
            queue[tail++] = pos;
          }
        };

        for (let x = 0; x < cropW; x++) {
          pushSeed(x, 0);
          pushSeed(x, 1);
        }
        for (let y = 0; y < cropH; y++) {
          pushSeed(0, y);
          pushSeed(1, y);
          pushSeed(cropW - 1, y);
          pushSeed(cropW - 2, y);
        }

        while (head < tail) {
          const curr = queue[head++];
          const cx = curr % cropW;
          const cy = (curr / cropW) | 0;

          const neighbors = [
            cx > 0 ? curr - 1 : -1,
            cx < cropW - 1 ? curr + 1 : -1,
            cy > 0 ? curr - cropW : -1,
            cy < cropH - 1 ? curr + cropW : -1,
          ];

          for (let i = 0; i < 4; i++) {
            const nb = neighbors[i];
            if (nb !== -1 && !visited[nb] && isCurtainBlue(nb * 4)) {
              visited[nb] = 1;
              queue[tail++] = nb;
            }
          }
        }

        // Apply transparency and soft edge feathering + bottom fade gradient
        for (let y = 0; y < cropH; y++) {
          // Bottom vignette fade (last 18% of height fades smoothly to 0)
          const bottomFade =
            y > cropH * 0.8
              ? Math.max(0, 1 - (y - cropH * 0.8) / (cropH * 0.2))
              : 1;

          for (let x = 0; x < cropW; x++) {
            const pos = y * cropW + x;
            const pIdx = pos * 4;

            if (visited[pos]) {
              data[pIdx + 3] = 0;
            } else {
              // Check 2px neighborhood for smooth anti-aliased edge
              let bgNeighbors = 0;
              if (x > 0 && visited[pos - 1]) bgNeighbors++;
              if (x < cropW - 1 && visited[pos + 1]) bgNeighbors++;
              if (y > 0 && visited[pos - cropW]) bgNeighbors++;
              if (y < cropH - 1 && visited[pos + cropW]) bgNeighbors++;

              let alpha = 255;
              if (bgNeighbors > 0) {
                alpha = Math.max(40, 255 - bgNeighbors * 60);
                // Despill blue halo on edge pixels
                data[pIdx + 2] = Math.min(data[pIdx + 2], Math.floor((data[pIdx] + data[pIdx + 1]) * 0.65));
              }

              data[pIdx + 3] = Math.floor(alpha * bottomFade);
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
      } catch (e) {
        // Fallback if canvas security blocks pixel manipulation
      }
      setLoaded(true);
    };
  }, [src]);

  return (
    <div className="alf-about__portrait-stage">
      <div className="alf-about__portrait-glow" />
      <canvas
        ref={canvasRef}
        className={`alf-about__portrait-canvas ${loaded ? 'is-loaded' : ''}`}
        aria-label={alt}
      />
    </div>
  );
}

export default function About({ onOpenCv }) {
  const [currentTrack, setCurrentTrack] = useState(PLAYLIST_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(42);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= currentTrack.seconds) {
          const nextIdx =
            (PLAYLIST_TRACKS.findIndex((t) => t.id === currentTrack.id) + 1) %
            PLAYLIST_TRACKS.length;
          setCurrentTrack(PLAYLIST_TRACKS[nextIdx]);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, currentTrack]);

  const handleSelectTrack = (track) => {
    if (track.id === currentTrack.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentTrack(track);
      setElapsed(0);
      setIsPlaying(true);
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <section className="alf-about" id="about">
      <div className="alf-container">
        {/*==================== 1. TOP 3-COLUMN INTRO ====================*/}
        <div className="alf-about__hero-grid">
          {/* Left Column: Big Name + Hubungi Saya */}
          <div className="alf-about__left">
            <h2 className="alf-about__big-title">
              <span className="alf-about__hi">Hi, I&apos;m</span>
              <span className="alf-about__name-accent">Iklil</span>
              <span className="alf-about__name-accent">Badar</span>
            </h2>

            <a href="#contact" className="alf-about__contact-pill">
              <span className="alf-about__contact-dot" />
              <span>Hubungi Saya</span>
              <i className="uil uil-arrow-up-right"></i>
            </a>
          </div>

          {/* Center Column: Cutout Blended Portrait */}
          <div className="alf-about__center">
            <CutoutPortrait src="/assets/avatar.jpg" alt="Iklil Badar" />
          </div>

          {/* Right Column: Bio Paragraphs + Buttons */}
          <div className="alf-about__right">
            <p className="alf-about__bio-p">
              Saya merupakan siswa <strong>SMK Negeri 6 Jakarta</strong> jurusan{' '}
              <strong>Rekayasa Perangkat Lunak (RPL)</strong> yang memiliki minat
              besar dalam pengembangan aplikasi web modern dan sistem berbasis
              database.
            </p>
            <p className="alf-about__bio-p">
              Berfokus pada pembuatan antarmuka yang bersih, responsif, dan
              terstruktur menggunakan <strong>React.js, Laravel, dan MySQL</strong>,
              serta aktif membangun berbagai proyek nyata mulai dari sistem
              informasi sekolah, platform e-ticketing, hingga aplikasi kasir.
            </p>

            <div className="alf-about__right-btns">
              <a href="#portfolio" className="alf-btn alf-btn--primary alf-btn--sm">
                <i className="uil uil-brackets-curly"></i>
                <span>Lihat Projek</span>
              </a>
              <button
                type="button"
                onClick={onOpenCv}
                className="alf-btn alf-btn--outline alf-btn--sm"
              >
                <i className="uil uil-file-alt"></i>
                <span>Lihat CV</span>
              </button>
            </div>
          </div>
        </div>

        {/*==================== 2. EDUCATION & EXPERIENCE ====================*/}
        <div className="alf-edu">
          <div className="alf-section-head">
            <h2 className="alf-section-head__title">
              Education &amp; <span className="text-blue">Experience</span>
            </h2>
            <p className="alf-section-head__sub">
              Perjalanan akademik dan pengalaman proyek pengembangan sistem saya.
            </p>
          </div>

          <div className="alf-edu__grid">
            {/* Education Column */}
            <div className="alf-edu__col">
              <div className="alf-edu__col-header">
                <span className="alf-edu__col-icon">
                  <i className="uil uil-graduation-cap"></i>
                </span>
                <h3>Education</h3>
              </div>

              <div className="alf-edu__list">
                <div className="alf-edu__card">
                  <span className="alf-edu__badge">2024 - Sekarang</span>
                  <h4 className="alf-edu__card-title">SMK Negeri 6 Jakarta</h4>
                  <span className="alf-edu__card-role">
                    Rekayasa Perangkat Lunak (RPL)
                  </span>
                  <p className="alf-edu__card-desc">
                    Mempelajari pemrograman web fullstack (HTML, CSS, JavaScript,
                    PHP, Laravel, React), pemrograman desktop C#, serta perancangan
                    basis data MySQL.
                  </p>
                </div>

                <div className="alf-edu__card">
                  <span className="alf-edu__badge">Juni 2026</span>
                  <h4 className="alf-edu__card-title">AI Workshop — Merkle</h4>
                  <span className="alf-edu__card-role">
                    Artificial Intelligence Training
                  </span>
                  <p className="alf-edu__card-desc">
                    Mengikuti pelatihan mengenai fundamental Artificial
                    Intelligence dan praktik penerapan tools berbasis AI dalam
                    pengembangan perangkat lunak modern.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div className="alf-edu__col">
              <div className="alf-edu__col-header">
                <span className="alf-edu__col-icon">
                  <i className="uil uil-briefcase-alt"></i>
                </span>
                <h3>Experience</h3>
              </div>

              <div className="alf-edu__list">
                <div className="alf-edu__card">
                  <span className="alf-edu__badge">Jun - Jul 2026</span>
                  <h4 className="alf-edu__card-title">Frontend Web Developer</h4>
                  <span className="alf-edu__card-role">
                    PT. Ace Service Energy
                  </span>
                  <p className="alf-edu__card-desc">
                    Membangun antarmuka pengguna (UI) responsif menggunakan
                    React.js untuk website energi surya serta berkolaborasi dengan
                    tim melalui GitHub.
                  </p>
                </div>

                <div className="alf-edu__card">
                  <span className="alf-edu__badge">Agustus 2025</span>
                  <h4 className="alf-edu__card-title">Frontend Web Developer</h4>
                  <span className="alf-edu__card-role">
                    ADOM Scoring (E-Ticketing)
                  </span>
                  <p className="alf-edu__card-desc">
                    Mengembangkan UI sistem ticketing menggunakan React.js dan
                    mengintegrasikannya dengan RESTful API berbasis Laravel &amp;
                    MySQL hingga siap produksi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*==================== 3. STATS COUNTER ROW ====================*/}
          <div className="alf-stats-grid">
            <a href="#portfolio" className="alf-stat-card">
              <div className="alf-stat-card__top">
                <span className="alf-stat-card__label">PROJECTS</span>
                <span className="alf-stat-card__icon">
                  <i className="uil uil-brackets-curly"></i>
                </span>
              </div>
              <div className="alf-stat-card__number">4</div>
              <div className="alf-stat-card__foot">
                <span>Total proyek web &amp; aplikasi yang telah diselesaikan</span>
                <i className="uil uil-arrow-up-right"></i>
              </div>
            </a>

            <a href="#portfolio" className="alf-stat-card">
              <div className="alf-stat-card__top">
                <span className="alf-stat-card__label">CERTIFICATES</span>
                <span className="alf-stat-card__icon">
                  <i className="uil uil-award"></i>
                </span>
              </div>
              <div className="alf-stat-card__number">3</div>
              <div className="alf-stat-card__foot">
                <span>Sertifikat pelatihan &amp; kompetensi teknologi</span>
                <i className="uil uil-arrow-up-right"></i>
              </div>
            </a>

            <a href="#portfolio" className="alf-stat-card">
              <div className="alf-stat-card__top">
                <span className="alf-stat-card__label">AWARDS</span>
                <span className="alf-stat-card__icon">
                  <i className="uil uil-trophy"></i>
                </span>
              </div>
              <div className="alf-stat-card__number">2</div>
              <div className="alf-stat-card__foot">
                <span>Pencapaian proyek industri &amp; inovasi sekolah</span>
                <i className="uil uil-arrow-up-right"></i>
              </div>
            </a>
          </div>
        </div>

        {/*==================== 4. MUSIC / SPOTIFY PLAYLIST SECTION ====================*/}
        <div className="alf-music">
          <div className="alf-music__left">
            <h2 className="alf-music__title">
              A little music.
              <br />
              <span className="text-blue">A lot of ideas.</span>
            </h2>
            <p className="alf-music__desc">
              Musik favorit yang menemani saya saat ngoding, merancang sistem,
              dan menyelesaikan proyek.
            </p>
          </div>

          <div className="alf-music__right">
            <div className="alf-spotify-card">
              {/* Top Playlist Header */}
              <div className="alf-spotify-card__header">
                <div className="alf-spotify-card__cover">
                  <img src="/assets/avatar.jpg" alt="NgodingTime Cover" />
                </div>

                <div className="alf-spotify-card__meta">
                  <span className="alf-spotify-card__tag">Playlist</span>
                  <h3 className="alf-spotify-card__name">NgodingTime</h3>
                  <span className="alf-spotify-card__author">Iklil Badar</span>
                  <div className="alf-spotify-card__progress-row">
                    <span>{formatTime(elapsed)}</span>
                    <div className="alf-spotify-card__bar">
                      <div
                        className="alf-spotify-card__bar-fill"
                        style={{
                          width: `${Math.min(100, (elapsed / currentTrack.seconds) * 100)}%`,
                        }}
                      />
                    </div>
                    <span>{currentTrack.duration}</span>
                  </div>
                </div>

                <div className="alf-spotify-card__actions">
                  <i
                    className="uil uil-spotify alf-spotify-card__logo"
                    title="Spotify Playlist"
                  ></i>
                  <button
                    type="button"
                    className="alf-spotify-card__play-btn"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    <i className={`uil ${isPlaying ? 'uil-pause' : 'uil-play'}`}></i>
                  </button>
                </div>
              </div>

              {/* Tracklist */}
              <div className="alf-spotify-card__tracks">
                {PLAYLIST_TRACKS.map((track, idx) => {
                  const isActive = track.id === currentTrack.id;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => handleSelectTrack(track)}
                      className={`alf-spotify-track ${isActive ? 'is-active' : ''}`}
                    >
                      <span className="alf-spotify-track__num">
                        {isActive && isPlaying ? (
                          <span className="alf-eq-bars">
                            <i />
                            <i />
                            <i />
                          </span>
                        ) : (
                          idx + 1
                        )}
                      </span>
                      <span className="alf-spotify-track__info">
                        <strong>{track.title}</strong>
                        <small>{track.artist}</small>
                      </span>
                      <span className="alf-spotify-track__dur">{track.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
