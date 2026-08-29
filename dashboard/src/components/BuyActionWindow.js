import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);

  // Selected stock ka actual price
  const [stockPrice, setStockPrice] = useState(price);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post(
        "https://zerodha-backend-3wdd.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        { withCredentials: true }
      );

      generalContext.closeBuyWindow();
      
    } catch (error) {
      console.log("Buy order error:", error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div id="buy-window">

      {/* HEADER */}
      <div className="buy-window-header">

        <h3>
          {uid} <span>BSE</span>
        </h3>

        <div className="market-options">

          <label>
            <input
              type="radio"
              name="buy-market"
              defaultChecked
            />

            BSE ₹{Number(price).toFixed(2)}
          </label>

          <label>
            <input
              type="radio"
              name="buy-market"
            />

            NSE ₹{(Number(price) + 0.30).toFixed(2)}
          </label>

        </div>

      </div>

      {/* TABS */}
      <div className="buy-window-tabs">

        <button className="active">
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

      {/* ORDER BODY */}
      <div className="regular-order">

        <div className="inputs">

          {/* QUANTITY */}
          <fieldset>

            <legend>
              Qty.
            </legend>

            <input
              type="number"
              name="qty"
              id="buy-qty"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(Number(e.target.value))
              }
            />

          </fieldset>

          {/* PRICE */}
          <fieldset>

            <legend>
              Price
            </legend>

            <input
              type="number"
              name="price"
              id="buy-price"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(Number(e.target.value))
              }
            />

          </fieldset>

        </div>

        {/* INTRADAY */}
        <label>

          <input
            type="checkbox"
            defaultChecked
          />

          Intraday

        </label>

      </div>

      {/* BOTTOM */}
      <div className="buttons">

        <div className="margin-info">

          <span>
            Margin required ₹140.65
          </span>

        </div>

        <div className="button-group">

          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
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

export default BuyActionWindow;