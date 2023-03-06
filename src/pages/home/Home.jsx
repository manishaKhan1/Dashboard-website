import { fontSize } from "@mui/system";
import React from "react";
import Featured from "../../components/barChart/Featured";

import Chart from "../../components/charts/Chart";
import Navbar from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Widget } from "../../components/widgets/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <h3 style={{ textAlign: "left" }}><b>Dashboard</b></h3>
          <h3 style={{ textAlign: "right", fontSize: "15px" }}>
            Home/<span style={{ color: "#7451f8" }}>Dashboard website</span>
          </h3>
        </div>

        <div className="widgets">

          {/* <div className="cart1">
            <Widget type="user"/>
            <Widget type="profit"/>
          </div>

          <div className="cart2">
            <Widget type="expense" />
            <Widget type="cost"/>
          </div> */}


          <Widget type="user" />
          <Widget type="expense" />
          <Widget type="profit" />

          <Widget type="cost" />

        </div>

        <div className="row">
          <div className="column1">
            <Chart className="charts" title="Sales Analytics" />
            
          </div>

          <div className="column2">
            
            <Featured/>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
