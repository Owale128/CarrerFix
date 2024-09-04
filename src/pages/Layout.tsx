import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { SearchTextContext } from "../contexts/SearchTextContext";
import logoImg from "../assets/logo-img.png";
import '../sass/layout.scss'

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      <JobAdsContext.Provider
        value={{ jobAds, setJobAds, totalPages, setTotalPages }}
      >
        <header className="header">
          <ul>
            <img src={logoImg} alt="Logo" className="logo-img" />
            <li className="list">
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/savedAds"}>Saved Ads</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="footer">
          <p>&copy; 2024 CareerFix. Alla rättigheter förbehållna.</p>
        </footer>
      </JobAdsContext.Provider>
    </SearchTextContext.Provider>
  );
};

export default Layout;
