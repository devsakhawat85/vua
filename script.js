/**
 * AX NOW! — On-Time Retail Construction & Facility Service
 * Production Scripts (2026 Enterprise Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Log confirmation of AX NOW! client environment
  console.log('AX NOW! Enterprise System Initialized · Southfield, MI · Est. 1997');
});
