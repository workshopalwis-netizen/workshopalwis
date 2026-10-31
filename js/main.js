/**
 * DHANANJAYA PORTFOLIO — MAIN APPLICATION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const desktopNav = document.getElementById('desktop-nav');
  if (mobileToggle && desktopNav) {
    mobileToggle.addEventListener('click', () => {
      desktopNav.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('is-active');
    });

    // Close on link click
    desktopNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        desktopNav.classList.remove('mobile-open');
        mobileToggle.classList.remove('is-active');
      });
    });
  }

  // 3. Audio Ambient Toggle (Web Audio API subtle futuristic pad tone)
  const soundToggle = document.getElementById('sound-toggle');
  let audioCtx, osc, gainNode, soundActive = false;

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      if (!soundActive) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!audioCtx) audioCtx = new AudioContext();
          if (audioCtx.state === 'suspended') audioCtx.resume();

          osc = audioCtx.createOscillator();
          gainNode = audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(55, audioCtx.currentTime); // Low 55Hz subtle ambient cinema drone
          gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);

          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.start();

          soundActive = true;
          soundToggle.classList.add('is-active');
          soundToggle.querySelector('.sound-label').textContent = 'AUDIO ON';
        } catch (e) {
          soundToggle.classList.add('is-active');
        }
      } else {
        if (osc) {
          osc.stop();
          osc.disconnect();
        }
        soundActive = false;
        soundToggle.classList.remove('is-active');
        soundToggle.querySelector('.sound-label').textContent = 'SOUND';
      }
    });
  }

  // 4. Render Capabilities Grid
  const capabilitiesGrid = document.getElementById('capabilities-grid');
  if (capabilitiesGrid && data.capabilities) {
    capabilitiesGrid.innerHTML = data.capabilities.map((cap) => `
      <div class="capability-card">
        <div class="capability-header">
          <span class="capability-number">${cap.id}</span>
          <div class="capability-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${getIconSvg(cap.icon)}
            </svg>
          </div>
        </div>
        <h3 class="capability-title">${cap.title}</h3>
        <p class="capability-desc">${cap.description}</p>
        <div class="capability-tags">
          ${cap.tags.map((t) => `<span class="capability-pill">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. Render Tools & Software Grid
  const toolsGrid = document.getElementById('tools-grid');
  if (toolsGrid && data.tools) {
    toolsGrid.innerHTML = data.tools.map((tool) => `
      <div class="tool-card ${tool.highlight.includes('•') ? 'featured-tool' : ''}">
        <span class="tool-badge-highlight">${tool.highlight}</span>
        <h3 class="tool-name">${tool.name}</h3>
        <p class="tool-desc">${tool.description}</p>
      </div>
    `).join('');
  }

  // 6. Render Why Work With Me Grid
  const whyGrid = document.getElementById('why-grid');
  if (whyGrid && data.whyWorkWithMe) {
    whyGrid.innerHTML = data.whyWorkWithMe.map((item) => `
      <div class="why-card">
        <div class="why-number">${item.number}</div>
        <h3 class="why-title">${item.title}</h3>
        <p class="why-desc">${item.description}</p>
      </div>
    `).join('');
  }

  // 7. Render Services Grid
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid && data.services) {
    servicesGrid.innerHTML = data.services.map((srv) => `
      <div class="service-card">
        <div>
          <h3 class="service-title">${srv.title}</h3>
          <p class="service-provide">${srv.whatIProvide}</p>
          <div class="service-usecase-box">
            <div class="usecase-label">Ideal For</div>
            <div class="usecase-text">${srv.idealUseCase}</div>
          </div>
        </div>
        <div>
          <a href="#contact" class="service-cta-link" data-service="${srv.title}">
            Inquire About This Service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `).join('');

    // Pre-select service in contact form when clicked
    document.querySelectorAll('.service-cta-link').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const srvTitle = btn.getAttribute('data-service');
        const select = document.getElementById('contact-project-type');
        if (select && srvTitle) {
          select.value = srvTitle;
        }
      });
    });
  }

  // 8. Render Verified Social Links (Only showing platforms with actual URLs as required)
  const socialContainer = document.getElementById('social-links-list');
  if (socialContainer && data.socialLinks) {
    const activeLinks = data.socialLinks.filter((s) => s.active && s.url.trim() !== '');
    socialContainer.innerHTML = activeLinks.map((s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${getSocialIconSvg(s.icon)}
        </svg>
        <span>${s.name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity: 0.5;">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </a>
    `).join('');
  }

  // 9. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Message...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactForm.reset();
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.textContent = "Thank you! Your project inquiry has been received. Dhananjaya will review your brief and respond promptly.";
          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }, 1000);
    });
  }

  // 10. Back To Top
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Helper for Lucide-style Clean Icons
  function getIconSvg(type) {
    switch (type) {
      case 'film':
        return '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>';
      case 'activity':
        return '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>';
      case 'type':
        return '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>';
      case 'box':
        return '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>';
      case 'sparkles':
        return '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>';
      case 'smartphone':
        return '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>';
      case 'target':
        return '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>';
      case 'eye':
        return '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
      default:
        return '<circle cx="12" cy="12" r="10"/>';
    }
  }

  function getSocialIconSvg(type) {
    switch (type) {
      case 'linkedin':
        return '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>';
      case 'instagram':
        return '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>';
      case 'youtube':
        return '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>';
      case 'vimeo':
        return '<path d="M2.5 8c.5-1 1.5-2.5 3-2.5 2 0 2.5 1.5 3 4.5.5 3 .8 4.5 1.5 4.5s1.5-1.5 2.5-3.5c1-2 1.5-3.5 1.5-4 0-.8-.5-1-1.5-1 .5-2 2-3 4-3 2.5 0 3.5 1.5 3.5 4.5 0 3.5-2.5 8-5.5 12-3 4-5.5 5.5-7.5 5.5-2 0-3-2-4-5.5L2 9.5C1.8 8.7 1.5 8.2 1 8.2"/>';
      case 'behance':
        return '<path d="M2 7h7v5H2zM2 13h8v4H2zM15 13h7M18 10a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3 3 3 0 0 0 3-3"/>';
      case 'briefcase':
        return '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>';
      case 'mail':
        return '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>';
      case 'whatsapp':
        return '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.5 8.5c-.3-.7-.6-.7-.9-.7h-.7a1.5 1.5 0 0 0-1.1.5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 10.2 10.2 0 0 0 4.2 3.7c1.8.8 2.6.7 3.3.6a2.8 2.8 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.2-.3-.3-.7-.5s-2.1-1-2.4-1.1-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a9.2 9.2 0 0 1-2.7-1.7 10.3 10.3 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7s.4-.4.6-.6a2.7 2.7 0 0 0 .4-.7.8.8 0 0 0 0-.7c-.1-.2-.7-1.7-1-2.3z"/>';
      default:
        return '<circle cx="12" cy="12" r="10"/>';
    }
  }
});
