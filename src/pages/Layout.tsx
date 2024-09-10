import { Link, NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../context/JobAdsContext";
import { useEffect, useReducer, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import "../sass/layout.scss";
import { SaveAdsContext } from "../context/SaveAdsContext";
import { DigiFooter, DigiIconStarReg, DigiLogo } from "@digi/arbetsformedlingen-react";
import { SaveAdReducer } from "../reducers/SaveAdRecucer";
import { ITheme, ThemeContext, themes } from "../context/ThemeContext";
import Button from "../components/Button";
import { SearchTextContext } from "../context/SearchTextContext";
import { FilterContext } from "../context/FilterContext";
import {
  FooterVariation,
  LogoColor,
  LogoVariation,
} from "@digi/arbetsformedlingen";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const saved = JSON.parse(localStorage.getItem("savedAds") || "[]");
  const [saveAds, dispatch] = useReducer(SaveAdReducer, saved);
  const [theme, setTheme] = useState<ITheme>(themes.dark);
  const [sevenDaySpan, setSevenDaySpan] = useState<boolean>(false);

  const count = saveAds.length;

  useEffect(() => {
    localStorage.setItem("savedAds", JSON.stringify(saveAds));
  }, [saveAds]);

  const toggleTheme = () => {
    if (theme.name === "Night") {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <FilterContext.Provider value={{ sevenDaySpan, setSevenDaySpan }}>
      <ThemeContext.Provider value={theme}>
        <SearchTextContext.Provider value={{ searchText, setSearchText }}>
          <JobAdsContext.Provider
            value={{ jobAds, setJobAds, totalPages, setTotalPages }}
          >
            <header className="header">
              <ul>
                <NavLink to={"/"} className="logoImg">
                  <div className="logoContainer">
                    <DigiLogo
                      afVariation={LogoVariation.LARGE}
                      afColor={LogoColor.SECONDARY}
                      afSystemName="CarrierFix"
                    ></DigiLogo>
                  </div>
                  <nav>
                    <Button click={toggleTheme}>
                      <>Byt till: {theme.name === "Night" ? "Day" : "Night"}</>
                    </Button>
                  </nav>
                </NavLink>
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
            <DigiFooter afVariation={FooterVariation.SMALL}>
              <div slot="content-bottom-left">
                <Link to="/">
                  <DigiLogo
                    afVariation={LogoVariation.LARGE}
                    afColor={LogoColor.SECONDARY}
                    afSystemName="CarrierFix"
                  ></DigiLogo>
                </Link>
              </div>
            </DigiFooter>
          </JobAdsContext.Provider>
        </SearchTextContext.Provider>
      </ThemeContext.Provider>
    </FilterContext.Provider>
  );
};

export default Layout;
