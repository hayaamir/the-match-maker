import { Link } from "react-router-dom";

import Applogo from "../assets/Applogo.png";
import Avatar from "../assets/Avatar";
import { useAuth } from "../providers/AuthProvider";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 bg-white z-10">
      <nav className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <Link to={user ? "profile" : "registration"}>
            <Avatar />
          </Link>
          {user && `Hello ${user.firstName}`}
        </div>
        <ul className="navbar-center flex gap-6">
          {/* for further development */}
          {/* <li> 
            <Link to="Admin">
              admin
              <span></span>
            </Link>
          </li>*/}
          <li>
            <Link to="/">
              בית
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="profile">אזור אישי</Link>
          </li>
          {user && (
            <li>
              <Link to="notebook">המחברת</Link>
            </li>
          )}
          <li>
            <Link to="Contact">יצירת קשר</Link>
          </li>
          {!user && (
            <li>
              <Link to="Registration">הרשמה</Link>
            </li>
          )}
        </ul>
        <div className="navbar-end">
          <Link to="/">
            <img alt="logo" src={Applogo} width="150px" height="40px" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
