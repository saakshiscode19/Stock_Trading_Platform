import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // 1. Import the new Sell window

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},   // 2. Add to context template
  closeSellWindow: () => {},     // 2. Add to context template
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // 3. State for Sell window
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsSellWindowOpen(false); // Make sure Sell is closed if we open Buy
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // 4. Create handler to open Sell window
  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(false); // Make sure Buy is closed if we open Sell
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // 5. Create handler to close Sell window
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,   // 6. Provide the new functions to your app
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} {/* 7. Render the window */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;