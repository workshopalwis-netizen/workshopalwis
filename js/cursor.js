/**
 * DHANANJAYA PORTFOLIO — CUSTOM INERTIAL CURSOR
 */

(function initCustomCursor() {
  // Disable on mobile/touch screens
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';

  document.body.appendChild(dot);
  document.body.appendChild(follower);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderFollower);
  }
  renderFollower();

  // Hover states for interactive elements
  function attachHoverListeners() {
    const interactables = document.querySelectorAll(
      'a, button, .project-card, .capability-card, .filter-btn, .style-tag-pill, .tool-card, input, textarea, select'
    );
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => follower.classList.add('is-hovering'));
      el.addEventListener('mouseleave', () => follower.classList.remove('is-hovering'));
    });
  }

  // Initial attach and observe DOM updates
  attachHoverListeners();
  const observer = new MutationObserver(attachHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });
})();
