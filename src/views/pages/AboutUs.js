import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Coming soon</h2>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
