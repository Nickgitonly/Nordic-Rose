import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="wrapper-header">
      <div className="main-header-news">
        <Link to="/second">
          <img src="images/header.png" alt="main-header-news" />
        </Link>
      </div>
      <div className="main-header-text">
        <h2>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h2>
        <p>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>
    </div>
  );
}

export default Header;

