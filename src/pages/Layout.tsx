import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../context/JobAdsContext";
import { useEffect, useReducer, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import logoImg from "../assets/logo-img.png";
import "../sass/layout.scss";
import { SaveAdsContext } from "../context/SaveAdsContext";
import { DigiIconStarReg } from "@digi/arbetsformedlingen-react";
import { SaveAdReducer } from "../reducers/SaveAdRecucer";
import { ITheme, ThemeContext, themes } from "../context/ThemeContext";
import Button from "../components/Button";
import { SearchTextContext } from "../context/SearchTextContext";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const saved = JSON.parse(localStorage.getItem("savedAds") || "[]");
  const [saveAds, dispatch] = useReducer(SaveAdReducer, saved);
  const [theme, setTheme] = useState<ITheme>(themes.dark)
  
  const count = saveAds.length;

  useEffect(() => {
    localStorage.setItem('savedAds', JSON.stringify(saveAds));
  }, [saveAds]);

  const toggleTheme = () => {
    if(theme.name === 'Night') {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <JobAdsContext.Provider
        value={{ jobAds, setJobAds, totalPages, setTotalPages }}
        >
     <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        <header className="header">
          <ul>
            <NavLink to={"/"} className="logo-link">
              <img src={logoImg} alt="Logo" className="logo-img" />
            </NavLink>
            <Button click={toggleTheme}><>Byt till: {theme.name === 'Night' ? 'Day' : 'Night'}</></Button>
            <li className="list">
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/about"}>Om</NavLink>
            </li>
            <li className="list">
              <NavLink to={"/savedAds"}>
                <DigiIconStarReg className="star" />
                {count > 0 && <div className="badge">{count}</div>}
              </NavLink>
            </li>
          </ul>
        </header>
        <SaveAdsContext.Provider value={{ saveAds, dispatch }}>
          <main>
            <Outlet />
          </main>
        </SaveAdsContext.Provider>
        <footer className="footer">
          <p>&copy; 2024 CareerFix. Alla rättigheter förbehållna.</p>
        </footer>
        </SearchTextContext.Provider>
      </JobAdsContext.Provider>
  </ThemeContext.Provider>
  );
};

export default Layout;
