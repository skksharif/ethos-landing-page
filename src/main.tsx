import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Loading screen management
const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.remove();
    }, 1000);
  }, 3000);
}

// Parallax scroll effects
const handleParallax = () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  parallaxElements.forEach((element) => {
    const speed = element.getAttribute('data-speed') || '0.5';
    const yPos = -(scrolled * parseFloat(speed));
    (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
  });
};

window.addEventListener('scroll', handleParallax);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);