import React, { useEffect } from "react";
import "./../../src/App.css";

const techIcons = [
  { name: "javascript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "react", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "html", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "css", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "typescript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "mongodb", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "graphql", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "csharp", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "php", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "vuejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "sass", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "webpack", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "swift", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "kotlin", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "go", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "ruby", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  { name: "flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "babel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
  { name: "eslint", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
  { name: "mysql", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "postgresql", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

const Background = () => {
  useEffect(() => {
    function createIcons() {
      const app = document.getElementById("icon-container");
      if (!app) return;
      app.innerHTML = "";

      const numberOfIcons = 25; // Más íconos para más densidad

      for (let i = 0; i < numberOfIcons; i++) {
        const icon = document.createElement("img");
        const tech = techIcons[Math.floor(Math.random() * techIcons.length)];

        icon.classList.add("tech-icon", `icon-${tech.name}`);
        icon.src = tech.url;

        // Tamaño aleatorio entre 20 y 40
        const size = 20 + Math.random() * 20;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.position = "fixed";
        icon.style.top = `${y}px`;
        icon.style.left = `${x}px`;
        icon.style.opacity = 0.7;

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
