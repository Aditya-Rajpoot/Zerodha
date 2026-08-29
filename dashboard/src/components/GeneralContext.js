import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  // ================= BUY =================

  const handleOpenBuyWindow = (uid, price) => {
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);

    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  // ================= SELL =================

  const handleOpenSellWindow = (uid, price) => {
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);

    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          price={selectedStockPrice}
        />
      )}

      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStockUID}
          price={selectedStockPrice}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;