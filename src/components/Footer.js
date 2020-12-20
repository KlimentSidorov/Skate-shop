import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from './skatelifeLogofooter.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 className='footerLinksTitle'>About Us</h2>
            <Link>How it works</Link>
            <Link>Testimonials</Link>
            <Link>Careers</Link>
            <Link>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2 className='footerLinksTitle'>Contact Us</h2>
            <Link>Contact</Link>
            <Link>Support</Link>
            <Link>Destinations</Link>
            <Link>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 className='footerLinksTitle'>Videos</h2>
            <Link>Submit Video</Link>
            <Link>Ambassadors</Link>
            <Link>Brands</Link>
            <Link>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2 className='footerLinksTitle'>Social </h2>
            <a target='blank' href='https://www.instagram.com/'>
              Instagram
            </a>
            <a target='blank' href='https://www.facebook.com/'>
              Facebook
            </a>
            <a target='blank' href='https://www.youtube.com/'>
              Youtube
            </a>
            <a target='blank' href='https://twitter.com/'>
              Twitter
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={Logo} alt='logoa' className='logoa' />
            </Link>
          </div>
          <small class='website-rights'>Skate Life Shop ©KS 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              target='blank'
              href='https://www.facebook.com/'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              target='blank'
              href='https://www.instagram.com/'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              target='blank'
              href='https://www.youtube.com/'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              target='blank'
              href='https://twitter.com/'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              target='blank'
              href='https://www.linkedin.com/'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
