import './style.css';
function Nav() {
  return (
    <div className="wrapper">
        <nav className="nav-panel">
          <div className="title-nav">
            <a href="#">
              <img src="/images/NORDICROSE.png" alt="NORDIC" />
            </a>
          </div>
          <div className="dropdown">
            <input type="checkbox" id="dropdown-toggle" />
            <label htmlFor="dropdown-toggle" className="dropbtn">
              <img
                src="/images/dropmenu.png"
                alt="Dropdown Image"
                className="dropdown-image"
              />
            </label>
            <div className="dropdown-content">
              <a href="#">BLOG</a>
              <a href="#">ABOUT</a>
              <a href="#">LINKS</a>
              <a href="#">PROJECTS</a>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Nav;
