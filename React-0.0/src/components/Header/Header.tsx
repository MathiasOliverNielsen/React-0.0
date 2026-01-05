import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__content">
        <h1>Positives and Negatives about React</h1>
      </div>
    </header>
  );
}

export default Header;
