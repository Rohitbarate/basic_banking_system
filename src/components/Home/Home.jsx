import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="wlc py-3">
        <h1>Welcome to ,</h1>
        <h3 className="heading">
          <span>T</span>he <span> S</span>parks <span> F</span>oundation
          <span> Bank</span>
        </h3>
      </div>
      <div className="bank-info">
        <p className="info-lines">
          A bank is a financial institution that accepts deposits from the
          public and creates a demand deposit while simultaneously making loans.
          Lending activities can be directly performed by the bank or indirectly
          through capital markets. Because banks play an important role in
          financial stability and the economy of a country, most jurisdictions
          exercise a high degree of regulation over banks.
          <br /> Most countries have institutionalised a system known as
          fractional reserve banking, under which banks hold liquid assets equal
          to only a portion of their current liabilities. In addition to other
          regulations intended to ensure liquidity, banks are generally subject
          to minimum capital requirements based on an international set of
          capital standards, the Basel Accords.
        </p>
      </div>
      <div className="home-buttons my-5">
        <Button className="px-3 py-2 btn">
          <Link to="/customers" className="nav-link ">see all customers</Link>
        </Button>
        <Button className="mx-5 px-3 py-2 btn" >
          <Link to="/transactions" className="nav-link ">transfer money</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
