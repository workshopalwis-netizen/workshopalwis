/**
 * DHANANJAYA PORTFOLIO — CREATIVE PROCESS & STYLE MOODBOARD
 */

(function initProcessAndStyle() {
  // 1. Process Timeline Scroll Observer
  const stepItems = document.querySelectorAll('.process-step-item');
  if (stepItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.35 }
    );

    stepItems.forEach((step) => observer.observe(step));
  }

  // 2. Interactive Style Pills Moodboard
  const styleContainer = document.getElementById('style-tags-container');
  const stylePreview = document.getElementById('style-preview-text');

  if (styleContainer && stylePreview && window.PORTFOLIO_DATA) {
    const { styleTags } = window.PORTFOLIO_DATA;

    styleContainer.innerHTML = styleTags.map((tag, i) => `
      <button class="style-tag-pill ${i === 0 ? 'active' : ''}" data-desc="${tag.desc}">
        ${tag.label}
      </button>
    `).join('');

    stylePreview.textContent = styleTags[0].desc;

    styleContainer.addEventListener('click', (e) => {
      const pill = e.target.closest('.style-tag-pill');
      if (!pill) return;
      document.querySelectorAll('.style-tag-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      stylePreview.textContent = pill.getAttribute('data-desc');
    });
  }

  // 3. Creative DNA Marquee Word Click / Hover feedback
  const dnaWords = document.querySelectorAll('.dna-word-wrap');
  dnaWords.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.filter = 'drop-shadow(0 0 15px var(--accent-purple))';
    });
    item.addEventListener('mouseleave', () => {
      item.style.filter = 'none';
    });
  });
})();
