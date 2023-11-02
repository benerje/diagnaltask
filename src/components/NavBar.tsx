import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSearchBar } from "../actions/userActions";

const TopNavbar: React.FC<{
  onBackClick: () => void;
  onSearch: (e: any) => void;
}> = ({ onBackClick, onSearch }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    setSearchOpen(false);
    dispatch(closeSearchBar());
  };
  return (
    <div className={`top-navbar ${scrolling ? "nav-height" : ""}`}>
      <div className="navbar-content">
        <span className="back-button" onClick={onBackClick}>
          <img
            alt="back"
            className="icon-size"
            src="https://test.create.diagnal.com/images/Back.png"
          />
          <span className="app-name">Romatic Comedy</span>
        </span>
        <span className={isSearchOpen ? "" : "search-icon"}>
          {isSearchOpen ? (
            <div className="search-bar">
              <h2 onClick={onClose} className="loader">
                x
              </h2>
              <input
                onChange={onSearch}
                className="input-area"
                type="text"
                placeholder="Search..."
              />
            </div>
          ) : (
            <img
              alt="search"
              className="icon-size"
              src="https://test.create.diagnal.com/images/search.png"
              onClick={() => setSearchOpen(true)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
