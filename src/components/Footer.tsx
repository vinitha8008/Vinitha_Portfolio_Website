// src/components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center p-4 bg-gray-100 mt-8">
      <Link to="/" className="mx-2 text-blue-600">Home</Link>
      <Link to="/education" className="mx-2 text-blue-600">Education</Link>
      <Link to="/experience" className="mx-2 text-blue-600">Experience</Link>
      <Link to="/skills" className="mx-2 text-blue-600">Skills</Link>
      <Link to="/projects" className="mx-2 text-blue-600">Projects</Link>
      <Link to="/certifications" className="mx-2 text-blue-600">Certifications</Link>
      <Link to="/hobbies" className="mx-2 text-blue-600">Hobbies</Link>
      <Link to="/contact" className="mx-2 text-blue-600">Contact</Link>
    </div>
  );
};

export default Footer;
