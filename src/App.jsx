import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Fcard from "./components/Fcard/Fcard";
import OpenAcct from "./components/Openacct/Openacct";
import YourMoney from "./components/Yourmoney/Yourmoney";
import Save from "./components/Save/Save";
import Block from "./components/Blockcard/Blockcard";
import Chat from "./components/Chat/Chat";
import Fees from "./components/Fees/Fees";
import Review from "./components/Review/Review";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Fcard />
      <OpenAcct />
      <YourMoney />
      <Save />
      <Block />
      <Chat />
      <Fees />
      <Review />
    </div>
  );
}

export default App;
