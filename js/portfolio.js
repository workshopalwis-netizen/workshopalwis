/**
 * DHANANJAYA PORTFOLIO — PORTFOLIO GALLERY & CASE STUDY VIEWER
 */

(function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const filterContainer = document.getElementById('portfolio-filters');
  const modal = document.getElementById('case-study-modal');
  const modalBody = document.getElementById('case-study-modal-body');
  const modalClose = document.getElementById('case-study-modal-close');

  if (!grid || !window.PORTFOLIO_DATA) return;

  const { projects } = window.PORTFOLIO_DATA;
  let currentFilter = 'ALL';
  let currentProjectIndex = 0;

  // Categories list
  const categories = [
    'ALL',
    'VIDEO EDITING',
    'MOTION GRAPHICS',
    '3D',
    'VFX',
    'SOCIAL MEDIA',
    'ADVERTISING',
    'CREATIVE CONTENT'
  ];

  // 1. Render Filter Pills
  if (filterContainer) {
    filterContainer.innerHTML = categories.map((cat) => `
      <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-category');
      renderProjects();
    });
  }

  // 2. Render Project Cards
  function renderProjects() {
    const filtered = currentFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === currentFilter);

    grid.innerHTML = filtered.map((proj) => {
      const isVertical = proj.aspectRatio === '9:16';
      return `
        <article class="project-card ${isVertical ? 'vertical' : ''}" data-id="${proj.id}">
          <div class="project-thumb-wrapper">
            <img class="project-thumb" src="${proj.thumbnail}" alt="${proj.title}" loading="lazy"/>
            <div class="project-overlay"></div>
            <div class="project-floating-play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
            </div>
          </div>
          <div class="project-content">
            <div>
              <div class="project-meta-row">
                <span class="project-category-badge">${proj.category}</span>
                <span class="project-year">${proj.year}</span>
              </div>
              <h3 class="project-title">${proj.title}</h3>
              <p class="project-description">${proj.shortDescription}</p>
            </div>
            <div class="project-footer-row">
              <div class="project-tools-tags">
                ${proj.tools.map((t) => `<span class="tool-tag">${t}</span>`).join('')}
              </div>
              <span class="view-project-link">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const index = projects.findIndex((p) => p.id === id);
        if (index !== -1) {
          openCaseStudy(index);
        }
      });
    });
  }

  // Initial Render
  renderProjects();

  // 3. Open Case Study Deep-Dive Modal
  function openCaseStudy(index) {
    currentProjectIndex = index;
    const proj = projects[index];
    if (!proj || !modal || !modalBody) return;

    const cs = proj.caseStudy;
    const nextIndex = (index + 1) % projects.length;
    const prevIndex = (index - 1 + projects.length) % projects.length;

    modalBody.innerHTML = `
      <div class="case-study-hero">
        <div class="case-study-badge">${proj.category} • ${proj.year}</div>
        <h2 class="case-study-title">${proj.title}</h2>
        <p class="section-subtitle">${proj.shortDescription}</p>
      </div>

      <div class="case-study-grid">
        <div class="case-study-main">
          <!-- Interactive Before / After VFX Slider -->
          ${cs.beforeAfter ? `
            <div style="margin-bottom: 2rem;">
              <h3 style="margin-bottom: 0.75rem;">Interactive Comparison // Before &amp; After</h3>
              <div class="comparison-slider-container" id="modal-slider">
                <img src="${cs.beforeAfter.imageBefore}" alt="Before"/>
                <div class="comparison-after-wrapper" id="slider-after-wrap">
                  <img src="${cs.beforeAfter.imageAfter}" alt="After"/>
                </div>
                <div class="comparison-divider-line" id="slider-divider">
                  <div class="comparison-handle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>
                    </svg>
                  </div>
                </div>
                <span class="comparison-label label-before">${cs.beforeAfter.labelBefore}</span>
                <span class="comparison-label label-after">${cs.beforeAfter.labelAfter}</span>
              </div>
            </div>
          ` : `
            <div style="margin-bottom: 2rem;">
              <img src="${proj.thumbnail}" alt="${proj.title}" style="border-radius: var(--radius-md); width:100%; border:1px solid var(--border-subtle);"/>
            </div>
          `}

          <h3>Objective</h3>
          <p>${cs.objective}</p>

          <h3>Creative Approach</h3>
          <p>${cs.creativeApproach}</p>

          <h3>Production Process</h3>
          <p style="white-space: pre-line;">${cs.process}</p>

          <h3>Final Result</h3>
          <p>${cs.finalResult}</p>
        </div>

        <aside class="case-study-sidebar">
          <div class="sidebar-field">
            <div class="sidebar-label">Client / Brand</div>
            <div class="sidebar-value">${cs.client}</div>
          </div>
          <div class="sidebar-field">
            <div class="sidebar-label">My Role</div>
            <div class="sidebar-value">${cs.role}</div>
          </div>
          <div class="sidebar-field">
            <div class="sidebar-label">Deliverables</div>
            <div class="sidebar-value">${proj.category} Asset Suite</div>
          </div>
          <div class="sidebar-field">
            <div class="sidebar-label">Software &amp; Tools Used</div>
            <div class="project-tools-tags" style="margin-top: 0.5rem;">
              ${cs.tools.map((t) => `<span class="tool-tag" style="background: rgba(139, 92, 246, 0.15); color: #fff;">${t}</span>`).join('')}
            </div>
          </div>
        </aside>
      </div>

      <nav class="case-study-nav">
        <button class="btn btn-secondary" id="case-study-prev" style="padding: 0.65rem 1.25rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Previous
        </button>
        <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-dark);">
          ${index + 1} / ${projects.length}
        </span>
        <button class="btn btn-secondary" id="case-study-next" style="padding: 0.65rem 1.25rem;">
          Next Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </nav>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Initialize Comparison Slider
    initComparisonSlider();

    // Next / Prev triggers
    const prevBtn = document.getElementById('case-study-prev');
    const nextBtn = document.getElementById('case-study-next');
    if (prevBtn) prevBtn.addEventListener('click', () => openCaseStudy(prevIndex));
    if (nextBtn) nextBtn.addEventListener('click', () => openCaseStudy(nextIndex));
  }

  // 4. Comparison Slider Logic
  function initComparisonSlider() {
    const container = document.getElementById('modal-slider');
    const afterWrap = document.getElementById('slider-after-wrap');
    const divider = document.getElementById('slider-divider');
    if (!container || !afterWrap || !divider) return;

    let isDragging = false;

    function setPosition(xPos) {
      const rect = container.getBoundingClientRect();
      let percent = ((xPos - rect.left) / rect.width) * 100;
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;

      afterWrap.style.clipPath = `inset(0 0 0 ${percent}%)`;
      divider.style.left = `${percent}%`;
    }

    divider.addEventListener('mousedown', () => (isDragging = true));
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      setPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => (isDragging = false));

    // Touch support
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      setPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setPosition(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => (isDragging = false));
  }

  // 5. Close Modal Handler
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();
