import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);

  // Selected stock ka actual price
  const [stockPrice, setStockPrice] = useState(price);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "https://zerodha-backend-3wdd.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        { withCredentials: true }
      );

      generalContext.closeSellWindow();
      
    } catch (error) {
      console.log("Sell order error:", error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div id="sell-window">

      {/* ================= HEADER ================= */}

      <div className="header">

        <h3>
          {uid} <span>BSE</span>
        </h3>

        <div className="market-options">

          <label>
            <input
              type="radio"
              name="sell-market"
              defaultChecked
            />
            BSE ₹{Number(price).toFixed(2)}
          </label>

          <label>
            <input
              type="radio"
              name="sell-market"
            />
            NSE ₹{(Number(price) + 0.30).toFixed(2)}
          </label>

        </div>

      </div>

      {/* ================= TABS ================= */}

      <div className="tab">

        <button>
          Quick
        </button>

        <button>
          Regular
        </button>

        <button>
          MTF
        </button>

        <button>
          Iceberg
        </button>

      </div>

      {/* ================= ORDER SECTION ================= */}

      <div className="regular-order">

        <div className="inputs">

          {/* Quantity */}

          <fieldset>

            <legend>
              Qty.
            </legend>

            <input
              type="number"
              name="qty"
              id="sell-qty"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(Number(e.target.value))
              }
            />

          </fieldset>

          {/* Price */}

          <fieldset>

            <legend>
              Price
            </legend>

            <input
              type="number"
              name="price"
              id="sell-price"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(Number(e.target.value))
              }
            />

          </fieldset>

        </div>

        {/* ================= INTRADAY ================= */}

        <label>

          <input
            type="checkbox"
            defaultChecked
          />

          Intraday

        </label>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="buttons">

        <span>
          Margin required ₹140.65
        </span>

        <div>

          <button
            className="btn btn-red"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default SellActionWindow;