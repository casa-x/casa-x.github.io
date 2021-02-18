/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {Link} from "react-router-dom";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/">CASA</Link>
              </li>
              <li>
                <a
                  href='https://www.freepik.com/photos/social'
                  target="_blank"
                >
                  Background provided by freepik
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()} CASA ⌂
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
