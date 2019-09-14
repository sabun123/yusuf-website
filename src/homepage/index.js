import React from "react";
import BannerImage from "./assets/IMG_3485.jpg";
import "./styles.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <div className="Banner">
          <h1 className="BannerTitle">Yusuf Ismail Bin Shukor</h1>
          <img src={BannerImage} alt={"Banner-Image"} className="ImageBanner" />
        </div>
      </div>
    );
  }
}

export default HomePage;
