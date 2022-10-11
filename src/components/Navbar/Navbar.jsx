import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function CollapsibleExample() {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'sticky',top:0,zIndex:'100'}}>
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <span className="logo">TSF</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-5">
            <Link to="/" className={` ${location.pathname === '/'? 'active':''} nav-link`}>
              Home
            </Link>
            <Link
              to="/customers"
              className={`${
                location.pathname === "/customers" ? "active" : ""
              } nav-link`}
            >
              Customers
            </Link>
            <Link to="/transactions" className={` ${location.pathname === '/transactions'?'active':''} nav-link`}>
              Transactions
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
