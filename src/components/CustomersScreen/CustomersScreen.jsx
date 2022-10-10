import React, { useEffect } from "react";
import CustomerRow from "../CustomerRow/CustomerRow";
import "./CustomerScreen.css";
import customerData from "../../DATA.json";

const CustomersScreen = () => {

  return (
    <div className="cscontainer">
      <h4 className="py-3">Our valuable Customers</h4>
      <div className="customerTable">
        <div className="customerRow">
          <div className="srno custDataHeading">Sr.No.</div>
          <div className="name custDataHeading">Full Name</div>
          <div className="email custDataHeading">Email Id</div>
          <div className="accountNo custDataHeading">Account No.</div>
          <div className="accountBal custDataHeading">Account Bal.(Rs)</div>
        </div>
        <div className="custsData">
          {customerData.map((item, index) => {
            return <CustomerRow item={item} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomersScreen;
