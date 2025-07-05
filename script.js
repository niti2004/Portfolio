document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    let fullText = typewriterText.textContent;
    typewriterText.textContent = "";
    let i = 0;

    function type() {
      if (i <= fullText.length) {
        typewriterText.textContent = fullText.substring(0, i);
        i++;
        setTimeout(type, 40);
      }
    }

    type();
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  });
});
