import HeaderComponent from "./components/header-component";
import KeepTrack from "./components/keep-track-component";
import AccessClipboard from "./components/access-clipboard-component";

import "./App.css";
import ProductComponent from "./components/product-component";
import BrandComponent from "./components/brand-component";
import FooterComponent from "./components/footer-component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent
          className="header-section"
          image="images/logo.svg"
          title="A history of everything you copy"
          paragraph="Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices."
          btnTxtOne="Download for iOS"
          btnTxtTwo="Download for Mac"
        />
        <KeepTrack />
        <AccessClipboard />
        <ProductComponent />
        <BrandComponent />
        <HeaderComponent
          className="bottom-section"
          image=""
          title="Clipboard for iOS and Mac OS"
          paragraph="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're reeady to start adding to your clipboard."
          btnTxtOne="Download for iOS"
          btnTxtTwo="Download for Mac"
        />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
