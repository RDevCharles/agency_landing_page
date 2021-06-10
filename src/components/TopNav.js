import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TopNav = () => {
  return (
    <>
      <Navbar
        style={{
          width: "100vw",
          backgroundColor: "black",
          boxShadow: "0px 0px 10px black",
        }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="#home">The Tone Angency</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
