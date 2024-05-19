import './App.css';
import logo from './image/physics (3).png'
import Carousel from './components/carousel';
import './styles/navbar.css'
import Life from './components/life';
import Education from './components/education';
import Career from './components/career';
import Achievement from './components/achievements';
import Nobelprize from './components/nobelprize';
import Books from './components/books'
import Download from './components/downloadpdf/download';
import Footer from './components/footer';
import useSlideAnimation from '../src/animation/useSlideAnimation';

function App() {
  //Fade in Animation
  useSlideAnimation();

  return (
    <div>
       <section className="sticky-top">
        <header className="site-name">
          <a className="navbar-brand  " aria-current="page" href="/">
            <img src={logo} alt="Bootstrap" width="30" height="23" />
            <span className="site-text1">EINSTEIN'S </span> <span className="site-text2">LEGACY</span>
          </a>
        </header>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#life" >Life</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#education" >Education</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#career">Career</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#achievements" >
                      Achievement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#nobelprize" >
                      Nobel prize
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#books">Books</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>

      </section>

      {/* Carousel component */}
      <section className='hidden'>
        <Carousel />
      </section>
      <div id='biographer-container'>
        {/* Life component */}
        <section className='hidden' id='life'>

          <Life />
        </section>
        {/* Education component */}
        <section className='hidden' id='education'>
          <Education />
        </section>
        {/* Career component */}
        <section className='hidden' id='career'>
          <Career />
        </section>
        {/* Achievement componenent */}
        <section className='hidden' id='achievements'>
          <Achievement />
        </section>
        {/* Nobleprize component */}
        <section className='hidden' id='nobelprize'>
          <Nobelprize />
        </section>
        {/* Book components */}
        <section className='hidden' id='books'>
          <Books />
        </section>
        <Download />

      </div>
      <Footer />
    </div>
  )
}

export default App;
