import React, { useState } from "react";
import "./DashboardHome.css";
import { FaMoneyCheckAlt } from "react-icons/fa";

function DashboardHome(props) {
  // Define some sample data for the table
  const data = [{ id: 1, name: "Item 1", price: 10, to: "John Doe", date: "01/01/2022" }, { id: 2, name: "Item 2", price: 20, to: "Jane Doe", date: "02/01/2022" }, { id: 3, name: "Item 3", price: 30, to: "Bob Smith", date: "03/01/2022" }, { id: 4, name: "Item 4", price: 40, to: "Alice Johnson", date: "04/01/2022" }, { id: 5, name: "Item 5", price: 50, to: "Jack Williams", date: "05/01/2022" }, { id: 6, name: "Item 6", price: 60, to: "Jill Brown", date: "06/01/2022" }, { id: 7, name: "Item 7", price: 70, to: "Sam Jones", date: "07/01/2022" }, { id: 8, name: "Item 8", price: 80, to: "Amy Lee", date: "08/01/2022" }, { id: 9, name: "Item 9", price: 90, to: "Mike Davis", date: "09/01/2022" }, { id: 10, name: "Item 10", price: 100, to: "Emily Chen", date: "10/01/2022" },];
  const data2 = [
    { id: 1, name: "John Doe", item: "Blanket", to: "Charity Name", date: "01/01/2023" },
    { id: 2, name: "Jane Doe", item: "Chair", to: "Charity Name", date: "02/01/2023" },
    { id: 3, name: "Bob Smith", item: "Clothes", to: "Charity Name", date: "03/01/2023" },
    { id: 4, name: "Alice Johnson", item: "Sweets", to: "Charity Name", date: "04/01/2023" },
    { id: 5, name: "Jack Williams", item: "Medicines", to: "Charity Name", date: "05/01/2023" },
    { id: 6, name: "Jill Brown", item: "Blanket", to: "Charity Name", date: "06/01/2023" },
    { id: 7, name: "Sam Jones", item: "Chair", to: "Charity Name", date: "07/01/2023" },
    { id: 8, name: "Amy Lee", item: "Clothes", to: "Charity Name", date: "08/01/2023" },
    { id: 9, name: "Mike Davis", item: "Sweets", to: "Charity Name", date: "09/01/2023" },
    { id: 10, name: "Emily Chen", item: "Medicines", to: "Charity Name", date: "10/01/2023" },
  ];

  // Define state for the table
  const [showMore, setShowMore] = useState(false);
  const [tableData, setTableData] = useState(data.slice(0, 5));
  const [showMore2, setShowMore2] = useState(false);
  const [tableData2, setTableData2] = useState(data2.slice(0, 5));
  // Define a function to handle the "show more" button click
  const handleShowMore = () => {
    setShowMore(true);
    setTableData(data);
  };
  const handleShowMore2 = () => {
    setShowMore2(true);
    setTableData2(data2);
  };

  return (
    <div className="DashboardHome">
      <h1 className="WelcomeMessage">Welcome back {props.username}</h1>
      <div className="boxes">
        <div className="box1">
          <h2>Last Money Donatations</h2>
          <p style={{color: "#f00946"}}>All Time</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Money</th>
                <th>To</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>Charity Name</td>
                  <td>10 Oct 2022</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!showMore && (
            <button className="showbtn" onClick={handleShowMore}>Show More</button>
          )}
        </div>
        <div className="box2">
          <h2>Last Items Donated</h2>
          <p style={{color: "#f00946"}}>All Time</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Items</th>
                <th>To</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map((i) => (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{i.item}</td>
                  <td>{i.to}</td>
                  <td>{i.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!showMore2 && (
            <button className="showbtn2" onClick={handleShowMore2}>Show More</button>
          )}
        </div>


        <div className="box2">
          <h2>Last Donation</h2>
          <p style={{color: "#f00946"}}>10 Oct 2022</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
