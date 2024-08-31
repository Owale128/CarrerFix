import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { SearchTextContext } from "../contexts/SearchTextContext";
import logoImg from "../assets/logo-img.png";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      <JobAdsContext.Provider value={{ jobAds, setJobAds }}>
        <header className="header">
          <ul>
            <div className="logo">
              <img src={logoImg} alt="Logo" className="logo-img" />
            </div>
            <li className="list">
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="footer"></footer>
      </JobAdsContext.Provider>
    </SearchTextContext.Provider>
  );
};

export default Layout;
