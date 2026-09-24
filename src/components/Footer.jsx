import { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <h6 className="footer-title font-bold">Navigation</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="services" className="link link-hover">
            Services
          </Link>
          <Link to="about" className="link link-hover">
            About
          </Link>
          <Link to="contact" className="link link-hover">
            Contact
          </Link>
        </aside>

        <nav>
          <h6 className="footer-title font-bold">Social Links</h6>
          <a href="https://za.linkedin.com/" target="_blank">
            <button className="cursor-pointer">Linkedin </button>
          </a>
          <a href="https://www.instagram.com/?hl=en" target="_blank">
            <button className="cursor-pointer">Instagram </button>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <button className="cursor-pointer">Facebook </button>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">Company Location</h6>
          <p className="text-md">Gent's Barbershop</p>
          <p className="text-md">523 Punda Maria Road, Thavhani Mall</p>
          <p className="text-md">Thohoyandou</p>
          <p className="text-md">0950</p>
        </nav>
        <nav>
          <h6 className="footer-title font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Gent's Barbershop
          </p>
        </aside>
      </footer>
    </Fragment>
  );
}

export default Footer;
