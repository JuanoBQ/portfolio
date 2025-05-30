import React, { useEffect } from "react";
import "./../../src/App.css";

const techIcons = [
  {
    name: "javascript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "react",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "html",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "css",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "nodejs",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
];

const Background = () => {
  useEffect(() => {
    function createIcons() {
      const app = document.getElementById("icon-container");
      if (!app) return;
      app.innerHTML = "";

      const numberOfIcons = 15; // ✅ MENOS ICONOS

      for (let i = 0; i < numberOfIcons; i++) {
        const icon = document.createElement("img");
        const tech = techIcons[Math.floor(Math.random() * techIcons.length)];

        icon.classList.add("tech-icon", `icon-${tech.name}`);
        icon.src = tech.url;

        const size = 25; // ✅ TAMAÑO UNIFORME
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.top = `${y}px`;
        icon.style.left = `${x}px`;

        app.appendChild(icon);
      }
    }

    function animateIcons() {
      const icons = document.querySelectorAll(".tech-icon");
      const speed = 0.3;

      function moveIcons() {
        icons.forEach((icon) => {
          const currentLeft = parseFloat(icon.style.left);
          const newLeft = currentLeft + speed;

          if (newLeft > window.innerWidth) {
            icon.style.left = `-${icon.offsetWidth}px`;
            const newTop = Math.random() * window.innerHeight;
            icon.style.top = `${newTop}px`;
          } else {
            icon.style.left = `${newLeft}px`;
          }
        });
        requestAnimationFrame(moveIcons);
      }

      moveIcons();
    }

    createIcons();
    animateIcons();
    window.onresize = createIcons;
  }, []);

  return <div id="icon-container" className="tech-background"></div>;
};

export default Background;
