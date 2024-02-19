import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import img from "../images/banner.jpeg";
import "../Style/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
      <div className=" home" style={{ backgroundImage: `url(${img})` }}>
        <div className="headcontainer">
          <h1>Only Quality Food</h1>
          <p>
            {" "}
            sed ut perspectious inde omnis iste natues error site volution acce
            u sa ntium deloremque laudanitum ,tolmrern aoram
            espaceipsaipsaqueueabillo inverti=one veritatis odf quassi
            architecaque ipsa abilloinsrertives
          </p>
          <Link>
            <button> View Menu</button>
            <button> Reservation</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
