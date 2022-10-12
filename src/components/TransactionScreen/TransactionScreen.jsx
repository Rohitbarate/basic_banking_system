import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DATA from "../../DATA.json";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./TransactionScreen.css";
import { Button } from "react-bootstrap";
import { TransferRow } from "../TransferRow/TransferRow";

const TransactionScreen = () => {
  const location = useLocation();
  const item = location.state;
  const [sAccno, setSAccno] = useState(item ? item.accountno : "");
  const [rAccno, setRAccno] = useState("");
  const [amt, setAmt] = useState();
  const [trHistory, setTrHistory] = useState();

  useEffect(() => {
    setTrHistory(JSON.parse(localStorage.getItem("history")));
  }, [amt,rAccno,sAccno]);

  function transferBtn() {
    if (!sAccno || !rAccno || !amt) {
      alert("input's should not be empty ");
    } else {
      if(sAccno!==rAccno)
      {let historyObj;
      let history = localStorage.getItem("history");

      if (history == null) {
        historyObj = [];
      } else {
        historyObj = JSON.parse(history);
        setTrHistory(historyObj);
      }
      let myObj = {
        sAccno,
        rAccno,
        amt,
      };
      historyObj.push(myObj);
      localStorage.setItem("history", JSON.stringify(historyObj));
      setAmt("");
      setRAccno("");
      setSAccno("");
      
    }else{
        alert("Sender and Reciever account no. should not be same ");
      }
      
    }
  }

  return (
    <div className="trContainer my-3">
      <div className="form">
        <Form>
          <div className="title">Sender</div>
          <Row className="row">
            <Col>
              <Form.Select
                className="mt-2"
                value={sAccno}
                type="number"
                onChange={(e) => setSAccno(e.target.value)}
              >
                <option value="">Sender's Account No.</option>
                 {DATA.map(({ accountno }) => {
                  return <option value={accountno} key={accountno}>{accountno}</option>;
                })}
              </Form.Select>
            </Col>
          </Row>
          <div className="title">Reciever</div>
          <Row className="row">
            <Col>
              <Form.Select
                className="mt-2"
                value={rAccno}
                type="number"
                onChange={(e) => setRAccno(e.target.value)}
              >
                <option value="">Reciever's Account No.</option>
                {DATA.map(({ accountno}) => {
                  return <option key={accountno} value={accountno}>{accountno}</option>;
                })}
              </Form.Select>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <div className="title">Amount (rs)</div>
              <Form.Control
                style={{
                  position: "relative",
                  margin: "5px auto",
                  width: "80%",
                }}
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
                placeholder="Transfer Amount"
                type="number"
                className="valIpt"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => transferBtn()} className="btn">
                Transfer Now
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <h3 className="mt-5">Transaction History</h3>
      <div className="htrTable">
        <div className="htrRow Heading">
          <div className="srno htrHeading">Sr. No.</div>
          <div className="htrFrom htrHeading">From</div>
          <div className="htrTo htrHeading">To</div>
          <div className="htrAmt htrHeading">Amount (rs)</div>
        </div>
        <div className="htrDataRow">
          {trHistory ? (
            trHistory.map((item, index) => {
              return <TransferRow key={index} item={item} index={index} />;
            })
          ) : (
            <h4 className="pt-3" style={{ color: "red" }}>
              No transaction happens
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionScreen;
