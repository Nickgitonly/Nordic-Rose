import './style.css';

function HeadSection() {
    return (
        <div>
            <header class="main-header">
                <nav class="nav-panel">
                    <div class="title-nav">
                        <a href="#"><img src="/img/NORDIC ROSE.png"
                            alt="NORDIC" /></a>
                    </div>
                    <div class="dropdown">
                        <input type="checkbox" id="dropdown-toggle" />
                        <label for="dropdown-toggle" class="dropbtn">
                        <img src="/img/dropmenu.png" alt="Dropdown Image" class="dropdown-image" />
                        </label>
                        <div class="dropdown-content">
                            <a href="#">BLOG</a>
                            <a href="#">ABOUT</a>
                            <a href="#">LINKS</a>
                            <a href="#">PROJECTS</a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeadSection; 