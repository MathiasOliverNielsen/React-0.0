import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">React Guide</div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#positives" className="navbar__link">
              Positives
            </a>
          </li>
          <li className="navbar__item">
            <a href="#negatives" className="navbar__link">
              Negatives
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
