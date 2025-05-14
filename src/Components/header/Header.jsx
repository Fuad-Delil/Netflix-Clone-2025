import React from "react";
import "./Header.css";
import netflix_logo from "./../../assets/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_inner_container">
          <div className="header_left">
            <ul className="header_list_style">
              <li>
                <a href="#">
                  <img
                    className="netflix_logo"
                    src={netflix_logo}
                    alt="netflix-logo"
                  />
                </a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TVshows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Lates</a>
              </li>
              <li>
                <a href="#"> My List</a>
              </li>
              <li>
                <a href="#">Browse by Languages</a>
              </li>
            </ul>
          </div>
          <div className="header_right">
            <ul className="header_list_style">
              <li>
                <a href="#">
                  <SearchIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <NotificationsIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <AccountBoxIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
