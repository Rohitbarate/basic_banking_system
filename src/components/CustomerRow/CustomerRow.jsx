import React, { useRef } from "react";
import '../CustomersScreen/CustomerScreen.css'
import {Link } from 'react-router-dom'

const CustomerRow = ({item,index}) => {
    const { name , email , accountno , accountbal} = item;
    const ref = useRef()
  return (
    <div className="customerRow" ref={ref}>
      <div className="srno custData">{index +1}</div>
      <div className="name custData">{name}</div>
      <div className="email custData">{email}</div>
      <div className="accountNo custData">{accountno}</div>
      <div className="accountBal accountBalData custData">{accountbal}rs</div>
      <Link to='/transactions' state={item} className="transferBtn">Transfer Money</Link>
    </div>
  );
};

export default CustomerRow
