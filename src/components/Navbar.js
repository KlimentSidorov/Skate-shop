import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../skatelifeLogo.png';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import CartButtons from './Cart/CartButtons';
import { useUserContext } from '../context/user_context';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { loginWithRedirect, myUser, logout } = useUserContext();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 25}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className='nava'>
      <div className='nav-centera'>
        <div className='nav-headera'>
          <Link to='/'>
            <img src={logo} alt='logoa' className='logoa' />
          </Link>
          <button
            className='nav-togglea'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-containera ' ref={linksContainerRef}>
          <ul className='linksa' ref={linksRef}>
            <li>
              <Link to='/' onClick={() => setShowLinks(!showLinks)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setShowLinks(!showLinks)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/products' onClick={() => setShowLinks(!showLinks)}>
                Product
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setShowLinks(!showLinks)}>
                Contact
              </Link>
            </li>
            <li>
              {myUser ? (
                <button
                  type='button'
                  className='btn btn-white'
                  onClick={() => {
                    logout({ returnTo: window.location.origin });
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  type='button'
                  className='btn btn-white'
                  onClick={loginWithRedirect}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>

        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
