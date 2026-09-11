@import "tailwindcss";

@layer base {
  :root {
    --font-display: 'Syne', sans-serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }
  
  body {
    font-family: var(--font-sans);
    background-color: #09090b; /* zinc-950 */
    color: #f4f4f5; /* zinc-100 */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

/* Custom premium scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #09090b;
}

::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c2410c; /* warm accent color */
}

/* Custom animate-pulse slow and custom card glows */
@keyframes slow-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-slow-glow {
  animation: slow-glow 10s infinite ease-in-out;
}

/* Glow lines */
.glow-card {
  position: relative;
  transition: all 0.4s ease;
}

.glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to bottom right, rgba(249, 115, 22, 0.3), rgba(244, 63, 94, 0.05), rgba(99, 102, 241, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  opacity: 0.4;
  transition: opacity 0.4s ease;
}

.glow-card:hover::before {
  opacity: 1;
}
