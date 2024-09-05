import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../context/JobAdsContext";
import { useReducer, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { SearchTextContext } from "../context/SearchTextContext";
import logoImg from "../assets/logo-img.png";
import { SaveAdReducer } from "../reducers/SaveAdRecucer";
import '../sass/layout.scss'
import { SaveAdsContext } from "../context/SaveAdsContext";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const saved = JSON.parse(localStorage.getItem('savedAds') || '[]')
  const [saveAds, dispatch] = useReducer(SaveAdReducer, saved)

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
              <NavLink to={"/about"}>Om</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/savedAds"}>Sparad Annons</NavLink>
            </li>
          </ul>
        </header>
        <SaveAdsContext.Provider value={{saveAds, dispatch}}>
        <main>
          <Outlet />
        </main>
        </SaveAdsContext.Provider>
        <footer className="footer">
          <p>&copy; 2024 CareerFix. Alla rättigheter förbehållna.</p>
        </footer>
      </JobAdsContext.Provider>
    </SearchTextContext.Provider>
  );
};

export default Layout;
