import React from "react";
import "./../../src/App.css";

const RightPanel = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { id: "about", emoji: "👤", label: "About" },
    { id: "projects", emoji: "💻", label: "Projects" },
    { id: "projects", emoji: "🧑‍💼", label: "Experience" }, 
    { id: "education", emoji: "🎓", label: "Education" },
    { id: "education", emoji: "📚", label: "Courses" }, 
  ];

  return (
    <div className="right-panel">
      {buttons.map(({ id, emoji, label }) => (
        <button
          key={label}
          onClick={() => scrollToSection(id)}
          className="right-panel-button"
          aria-label={label}
        >
          <span className="emoji">{emoji}</span>
          <span className="tooltip">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default RightPanel;
