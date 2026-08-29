import React from "react";
import { Link } from "react-router-dom";

import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-page">

      {/* ================= TOP ACTIONS ================= */}
      <div className="funds-top">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <div className="funds-actions">
          <Link className="fund-btn funds-add">
            Add funds
          </Link>

          <Link className="fund-btn funds-withdraw">
            Withdraw
          </Link>
        </div>
      </div>

      {/* ================= FUNDS CONTENT ================= */}
      <div className="funds-grid">

        {/* ================= EQUITY ================= */}
        <div className="funds-section">

          <div className="funds-section-header">
            <h2>Equity</h2>

            <div className="funds-links">
              <span>◉</span>
              <a href="#statement">View statement</a>

              <span>ⓘ</span>
              <a href="#help">Help</a>
            </div>
          </div>

          <div className="fund-card">

            {/* Main balances */}
            <div className="fund-main-row">
              <p>Available margin</p>
              <p className="fund-main-value">4,043.10</p>
            </div>

            <div className="fund-main-row fund-highlight">
              <p>Used margin</p>
              <p className="fund-main-value">3,757.30</p>
            </div>

            <div className="fund-main-row">
              <p>Available cash</p>
              <p className="fund-main-value">4,043.10</p>
            </div>

            <hr />

            {/* Other values */}
            <div className="fund-data-row">
              <p>Opening balance</p>
              <p>4,043.10</p>
            </div>

            <div className="fund-data-row">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>

            <div className="fund-data-row">
              <p>Payin</p>
              <p>4064.00</p>
            </div>

            <div className="fund-data-row">
              <p>SPAN</p>
              <p>5,003.20</p>
            </div>

            <div className="fund-data-row">
              <p>Delivery margin</p>
              <p>2,040.61</p>
            </div>

            <div className="fund-data-row">
              <p>Exposure</p>
              <p>3450.23</p>
            </div>

            <div className="fund-data-row">
              <p>Options premium</p>
              <p>5201.49</p>
            </div>

            <hr />

            <div className="fund-data-row">
              <p>Collateral (Liquid funds)</p>
              <p>4500.50</p>
            </div>

            <div className="fund-data-row">
              <p>Collateral (Equity)</p>
              <p>2390.30</p>
            </div>

            <div className="fund-data-row">
              <p>Total Collateral</p>
              <p>4100.45</p>
            </div>

          </div>
        </div>


        {/* ================= COMMODITY ================= */}
        <div className="funds-section">

          <div className="funds-section-header">
            <h2>Commodity</h2>

            <div className="funds-links">
              <span>◉</span>
              <a href="#statement">View statement</a>

              <span>ⓘ</span>
              <a href="#help">Help</a>
            </div>
          </div>

          <div className="commodity-card">

            <div className="commodity-row">
              <p>Available margin</p>
              <p>3,040.10</p>
            </div>

            <div className="commodity-row">
              <p>Used margin</p>
              <p>5,270.50</p>
            </div>

            <div className="commodity-row">
              <p>Available cash</p>
              <p>3,450.51</p>
            </div>

            <hr />

            <div className="commodity-row">
              <p>Opening balance</p>
              <p>0.00</p>
            </div>

            <div className="commodity-row">
              <p>Payin</p>
              <p>2,950.56</p>
            </div>

            <div className="commodity-row">
              <p>Payout</p>
              <p>1,340.60</p>
            </div>

            <div className="commodity-row">
              <p>SPAN</p>
              <p>3,290.20</p>
            </div>

            <div className="commodity-row">
              <p>Delivery margin</p>
              <p>2,410.90</p>
            </div>

            <div className="commodity-row">
              <p>Exposure</p>
              <p>4,230.75</p>
            </div>

            <div className="commodity-row">
              <p>Options premium</p>
              <p>3,981.79</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;