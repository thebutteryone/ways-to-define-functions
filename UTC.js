const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);