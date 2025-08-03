// src/components/Navigation.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Vinitha</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* 3-line hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <Link to="/" className="text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/education" className="text-blue-600" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/experience" className="text-blue-600" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/skills" className="text-blue-600" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" className="text-blue-600" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/certifications" className="text-blue-600" onClick={() => setIsOpen(false)}>Certifications</Link>
          <Link to="/hobbies" className="text-blue-600" onClick={() => setIsOpen(false)}>Hobbies</Link>
          <Link to="/contact" className="text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 mt-2">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/education" className="text-blue-600">Education</Link>
        <Link to="/experience" className="text-blue-600">Experience</Link>
        <Link to="/skills" className="text-blue-600">Skills</Link>
        <Link to="/projects" className="text-blue-600">Projects</Link>
        <Link to="/certifications" className="text-blue-600">Certifications</Link>
        <Link to="/hobbies" className="text-blue-600">Hobbies</Link>
        <Link to="/contact" className="text-blue-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
