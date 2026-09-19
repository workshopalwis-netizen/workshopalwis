/**
 * DHANANJAYA PORTFOLIO — 3D INTERACTIVE HERO
 * Features: Three.js WebGL kinetic abstract 3D geometry + particle field with mouse parallax.
 * Includes seamless Canvas 2D particle fallback if WebGL is unavailable or offline.
 */

(function initHero3D() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // Track mouse coordinates for parallax
  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Check if THREE is available
  if (typeof THREE !== 'undefined') {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
      camera.position.z = 25;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // 1. Kinetic 3D Wireframe Icosahedron / Torus Knot
      const geometry = new THREE.IcosahedronGeometry(9, 1);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.22
      });
      const mesh = new THREE.Mesh(geometry, wireframeMaterial);
      scene.add(mesh);

      // Inner Core Mesh
      const innerGeom = new THREE.OctahedronGeometry(5, 0);
      const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const innerMesh = new THREE.Mesh(innerGeom, innerMaterial);
      scene.add(innerMesh);

      // 2. Floating Kinetic Particle Swarm
      const particlesCount = 200;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.18,
        color: 0xa855f7,
        transparent: true,
        opacity: 0.65
      });
      const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleMesh);

      // Animation Loop
      let animationFrameId;
      function animate() {
        animationFrameId = requestAnimationFrame(animate);

        // Interpolate mouse for silky smooth camera glide
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Rotate geometries
        mesh.rotation.x += 0.0025;
        mesh.rotation.y += 0.0035;
        innerMesh.rotation.x -= 0.004;
        innerMesh.rotation.y -= 0.003;
        particleMesh.rotation.y += 0.001;

        // Mouse Parallax shift
        camera.position.x = mouse.x * 4;
        camera.position.y = mouse.y * 3;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }

      animate();

      // Window Resize Handler
      window.addEventListener('resize', () => {
        if (!canvas) return;
        const width = canvas.parentElement.clientWidth;
        const height = canvas.parentElement.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      });

      return;
    } catch (err) {
      console.warn("WebGL initialization note: falling back to 2D canvas kinetic particle engine", err);
    }
  }

  // Fallback: Pure 2D Canvas Kinetic Particle System
  runCanvas2DFallback(canvas, mouse);
})();

function runCanvas2DFallback(canvas, mouse) {
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = 75;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(139, 92, 246,' : 'rgba(56, 189, 248,'
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.x += p.vx + mouse.targetX * 0.5;
      p.y += p.vy - mouse.targetY * 0.5;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + ' 0.7)';
      ctx.fill();

      // Connect near particles with faint line
      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}
