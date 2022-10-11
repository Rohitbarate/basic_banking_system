import React, { useState ,useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const [trHistory,setTrHistory] = useState()

  useEffect(() => {
    setTrHistory(JSON.parse(localStorage.getItem('history')))
    console.log(trHistory);
  }, [trHistory])
  

  function transferBtn() {
    if (!sAccno || !rAccno || !amt) {
      alert("input's should not be empty ");
    } else {
      let historyObj;
      let history = localStorage.getItem("history");

      if (history == null) {
        historyObj = [];
      } else {
        historyObj = JSON.parse(history);
        setTrHistory(historyObj)
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
          {trHistory? trHistory.map((item,index)=>{
            return <TransferRow item={item} index={index} />
          }):<h4 className="pt-3" style={{color:'red'}}>No transaction happens</h4>}
        </div>
      </div>
    </div>
  );
};

export default TransactionScreen;
