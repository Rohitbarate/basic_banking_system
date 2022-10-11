import React from "react";
import "../TransactionScreen/TransactionScreen.css";

export const TransferRow = ({item,index}) => {
  return (
    <div className="htrRow">
      <div className="srno htrHeading">{index + 1}</div>
      <div className="htrFrom htrHeading">{item.sAccno}</div>
      <div className="htrTo htrHeading">{item.rAccno}</div>
      <div className="htrAmt htrHeading">{item.amt} rs</div>
    </div>
  );
};
