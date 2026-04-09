import './App.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="header" id="header">
      
      <div className="top-nav">

        <div className="container d-flex">
          <p>Order Online or Call Us: (001) 222-5555</p>
          <ul className="d-flex">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>


      <div className="navigation">
        <div className="nav-center container d-flex">


          <Link to="/" className="logo">
            <h1>Greenthread</h1>
          </Link>


          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/terms" className="nav-link">Terms</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          <div className="icons d-flex">
            <Link to="/login" className="icon"><i className="bx bx-user"></i></Link>
            <div className="icon"><i className="bx bx-search"></i></div>

            <Link to="/wishlist" className="icon">
              <i className="bx bx-heart"></i>
              <span className="d-flex">0</span>
            </Link>

            <Link to="/cart" className="icon">
              <i className="bx bx-cart"></i> 
              <span className="d-flex">0</span>
            </Link>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;