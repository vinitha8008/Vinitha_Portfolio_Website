import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-wrap justify-center gap-4">
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Home</Link>
      <Link to="/education" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Education</Link>
      <Link to="/experience" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Experience</Link>
      <Link to="/skills" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Skills</Link>
      <Link to="/projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Projects</Link>
      <Link to="/certifications" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Certifications</Link>
      <Link to="/hobbies" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Hobbies</Link>
      <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Contact</Link>
    </nav>
  );
};

export default Navigation;
