import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss'
import HamburgerLogo from "../../assets/images/hamburgerLogoHeader.svg";
import SearchLogo from '../../assets/images/searchLogoHeader.svg';
import UserLogo from '../../assets/images/userLogoHeader.svg';
import OrderBagLogo from '../../assets/images/orderBagLogoHeader.svg';
import PlateLogo from '../../assets/images/plateLogoHeader.svg';
import EpicureLogoHeader from '../../assets/images/epicureLogoHeader.svg'
import { useState } from 'react';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (path: string) => {
      if (location.pathname === path) {
        navigate(0);
      } else {
        navigate(path);
      }
      setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        console.log(isMenuOpen);
        setIsMenuOpen(!isMenuOpen); 
        console.log(isMenuOpen);
    };
  
    return (   
      <header className="header"> 
  
          <img className="hamburger-menu" src={HamburgerLogo} alt="menu" onClick={toggleMenu}></img>
          <div className='logo-and-links-container'>
            <img className="epicure-logo" src={PlateLogo} alt="epicure"></img>
            <img className="epicure-logo-2" src={EpicureLogoHeader} alt="logo"></img>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>     
                <Link to='/' onClick={() => handleLinkClick("/")}>Restaurants</Link>
                <Link to='/' onClick={() => handleLinkClick("/")}>Chefs</Link>
            </div>
          </div>

          <div className="navbar-icons">
            <img className="search-logo" src={SearchLogo} alt="search" onClick={() => handleLinkClick("/")}></img>
            <img className="user-logo" src={UserLogo} alt="user" onClick={() => handleLinkClick("/")}></img>
            <img className="order-bag-logo" src={OrderBagLogo} alt="order-bag" onClick={() => handleLinkClick("/")}></img>
          </div>
  
      </header>    
    );
  };
  export default Header;