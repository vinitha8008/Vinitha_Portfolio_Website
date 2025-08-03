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
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Mobile Menu with styled buttons */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 items-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Home</Link>
          <Link to="/education" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Education</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Experience</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Projects</Link>
          <Link to="/certifications" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Certifications</Link>
          <Link to="/hobbies" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Hobbies</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded w-11/12 text-center">Contact</Link>
        </div>
      )}

      {/* Desktop Menu (if you want button-style here too) */}
      <div className="hidden md:flex gap-3 mt-2 justify-center">
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">Home</Link>
        <Link to="/education" className="bg-blue-600 text-white px-4 py-2 rounded">Education</Link>
        <Link to="/experience" className="bg-blue-600 text-white px-4 py-2 rounded">Experience</Link>
        <Link to="/skills" className="bg-blue-600 text-white px-4 py-2 rounded">Skills</Link>
        <Link to="/projects" className="bg-blue-600 text-white px-4 py-2 rounded">Projects</Link>
        <Link to="/certifications" className="bg-blue-600 text-white px-4 py-2 rounded">Certifications</Link>
        <Link to="/hobbies" className="bg-blue-600 text-white px-4 py-2 rounded">Hobbies</Link>
        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
