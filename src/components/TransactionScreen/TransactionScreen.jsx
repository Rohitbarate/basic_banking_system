import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./TransactionScreen.css";
import { Button } from "react-bootstrap";

const TransactionScreen = () => {
  const location = useLocation();
  const item = location.state;
  const [sAccno, setSAccno] = useState(item ? item.accountno : "");
  const [rAccno, setRAccno] = useState("");
  const [amt, setAmt] = useState();

  function transferBtn(item) {
    if (!sAccno || !rAccno || !amt) {
      alert("input's shouldn't be empty ");
    } else {
      let historyObj;
      let history = localStorage.getItem("history");

      if (history == null) {
        historyObj = [];
      } else {
        historyObj = JSON.parse(history);
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
      console.log(JSON.parse(localStorage.getItem("history")));
    }
  }

  return (
    <div className="trContainer my-3">
      <div className="form">
        <Form>
          <div className="title">Sender</div>
          <Row className="row">
            <Col>
              <Form.Control
                style={{
                  position: "relative",
                  margin: "5px auto",
                  width: "80%",
                }}
                className="mt-2"
                placeholder="Sender's Account No."
                type="number"
                value={sAccno}
                onChange={(e) => setSAccno(e.target.value)}
              />
            </Col>
          </Row>
          <div className="title">Reciever</div>
          <Row className="row">
            <Col>
              <Form.Control
                style={{
                  position: "relative",
                  margin: "5px auto",
                  width: "80%",
                }}
                value={rAccno}
                onChange={(e) => setRAccno(e.target.value)}
                className="mt-2"
                type="number"
                placeholder="Reciever's Account No."
              />
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <label htmlFor="Sname">Transfer Ammount (Rs)</label>
              <Form.Control
                style={{
                  position: "relative",
                  margin: "5px auto",
                  width: "80%",
                }}
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
                placeholder="Transfer Ammount"
                type="number"
                className="valIpt"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => transferBtn(item)} className="btn">
                Transfer Now
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default TransactionScreen;
