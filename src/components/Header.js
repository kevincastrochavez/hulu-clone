import React from "react";
import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icons-icon header__icons-icon--active">
          <Home />

          <p>Home</p>
        </div>

        <div className="header__icons-icon">
          <FlashOn />

          <p>Trending</p>
        </div>

        <div className="header__icons-icon">
          <LiveTv />

          <p>Verified</p>
        </div>

        <div className="header__icons-icon">
          <VideoLibrary />

          <p>Collections</p>
        </div>

        <div className="header__icons-icon">
          <Search />

          <p>Search</p>
        </div>

        <div className="header__icons-icon">
          <PersonOutline />

          <p>Account</p>
        </div>
      </div>

      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
