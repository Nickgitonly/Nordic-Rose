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
      <div className="header-separator">
        <img src="images/Line 3.png" alt="line" />
      </div>
    </div>
  );
}
<<<<<<< HEAD
  
export default Header;  
=======
export default Header;
>>>>>>> b9b5390e445390ba5919361774cf28639007ca8d
