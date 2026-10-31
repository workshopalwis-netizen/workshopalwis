/**
 * DHANANJAYA PORTFOLIO — CINEMATIC SHOWREEL MODAL
 */

(function initShowreel() {
  const triggerCard = document.getElementById('showreel-trigger');
  const modal = document.getElementById('showreel-modal');
  const modalClose = document.getElementById('showreel-modal-close');
  const videoFrame = document.getElementById('showreel-video-frame');
  const playBtn = document.getElementById('showreel-toggle-play');
  const scrubBar = document.getElementById('showreel-scrub-bar');
  const scrubProgress = document.getElementById('showreel-scrub-progress');
  const timeDisplay = document.getElementById('showreel-time-display');

  if (!modal || !window.PORTFOLIO_DATA) return;

  const showreelData = window.PORTFOLIO_DATA.profile.showreel;
  let isPlaying = true;
  let progress = 45;
  let timerInterval;

  function openShowreel() {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // If user provided an actual YouTube/Vimeo/direct video URL, embed it
    if (showreelData.videoUrl && showreelData.videoUrl.trim() !== '') {
      const sep = showreelData.videoUrl.includes('?') ? '&' : '?';
      videoFrame.innerHTML = `
        <iframe src="${showreelData.videoUrl}${sep}autoplay=1&title=0&byline=0&portrait=0" 
                title="${showreelData.title}" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen></iframe>
      `;
    } else {
      // High-end cinematic interactive canvas simulation
      videoFrame.innerHTML = `
        <div style="position:relative; width:100%; height:100%; background:#07090e; display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${showreelData.fallbackCover}" alt="Showreel Cover" style="width:100%; height:100%; object-fit:cover; opacity:0.85; filter:brightness(0.9);"/>
          <div style="position:absolute; inset:0; background:radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(0,0,0,0.6) 80%);"></div>
          <div style="position:absolute; text-align:center; padding:2rem;">
            <div style="display:inline-block; font-family:var(--font-mono); font-size:0.875rem; color:var(--accent-blue); background:rgba(56,189,248,0.15); border:1px solid var(--accent-blue); padding:0.35rem 0.85rem; border-radius:var(--radius-full); margin-bottom:1rem;">
              CINEMATIC 4K SHOWREEL ACTIVE
            </div>
            <h3 style="font-size:clamp(1.5rem, 3vw, 2.25rem); color:#fff; font-weight:800; text-transform:uppercase; margin-bottom:0.5rem;">
              ${showreelData.title}
            </h3>
            <p style="font-family:var(--font-mono); font-size:0.875rem; color:var(--text-muted);">
              ${showreelData.duration} • ${showreelData.resolution}
            </p>
          </div>
        </div>
      `;
    }

    startSimulatedPlayback();
  }

  function startSimulatedPlayback() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isPlaying) return;
      progress = (progress + 0.5) % 100;
      if (scrubProgress) scrubProgress.style.width = `${progress}%`;

      const totalSeconds = 108; // 01:48
      const curSec = Math.floor((progress / 100) * totalSeconds);
      const m = String(Math.floor(curSec / 60)).padStart(2, '0');
      const s = String(curSec % 60).padStart(2, '0');
      if (timeDisplay) timeDisplay.textContent = `${m}:${s} / ${showreelData.duration}`;
    }, 500);
  }

  function closeShowreel() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    clearInterval(timerInterval);
    if (videoFrame) videoFrame.innerHTML = '';
  }

  if (triggerCard) triggerCard.addEventListener('click', openShowreel);
  if (modalClose) modalClose.addEventListener('click', closeShowreel);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeShowreel();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeShowreel();
    }
  });

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.textContent = isPlaying ? 'PAUSE' : 'PLAY';
    });
  }

  if (scrubBar) {
    scrubBar.addEventListener('click', (e) => {
      const rect = scrubBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      progress = (clickX / rect.width) * 100;
      if (scrubProgress) scrubProgress.style.width = `${progress}%`;
    });
  }
})();
