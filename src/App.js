import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mint from "./pages/mint/Mint";
import Gallery from "./pages/gallery/Gallery";
import Wallet from "./pages/wallet/Wallet";
import GalleryDetail from "./pages/galleryDetail/GalleryDetail";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/gallery-detail/:id" component={GalleryDetail} />
        </Switch>
      </Router>
      <Popup />
    </>
  );
}

export default App;
