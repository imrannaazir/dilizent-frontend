import { Link } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link to="/trainers">Trainers</Link>
      </li>

      <li>
        <Link to="/interviewers">Interviewers</Link>
      </li>
      <li>
        <Link to="/agency">Agency</Link>
      </li>
      <li>
        <Link to="/professionals">Professionals</Link>
      </li>
      <li>
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/team">Our Team</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      {/* navbar start */}
      <div className="navbar-start relative">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3  shadow bg-base-100  w-screen absolute -left-2"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          Dilizent
        </Link>
      </div>

      {/* lg screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
}
