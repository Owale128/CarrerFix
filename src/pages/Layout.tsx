import { Link, NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../context/JobAdsContext";
import { useEffect, useReducer, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import LogoImg from "../assets/logoImg.png";
import { SaveAdsContext } from "../context/SaveAdsContext";
import {
  DigiFooter,
  DigiIconStarReg,
  DigiLogo,
} from "@digi/arbetsformedlingen-react";
import { SaveAdReducer } from "../reducers/SaveAdRecucer";
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
  const [sevenDaySpan, setSevenDaySpan] = useState<boolean>(false);

  const count = saveAds.length;

  useEffect(() => {
    localStorage.setItem("savedAds", JSON.stringify(saveAds));
  }, [saveAds]);

  return (
    <FilterContext.Provider value={{ sevenDaySpan, setSevenDaySpan }}>
      <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        <JobAdsContext.Provider
          value={{ jobAds, setJobAds, totalPages, setTotalPages }}
        >
          <header className="header">
            <div className="logoWrapper">
              <img src={LogoImg} alt="logoImg" className="logoImg" />
              <NavLink to={"/"} className="logoImg">
                <div className="logoContainer">
                  <DigiLogo
                    afSvgAriaHidden={true}
                    afColor={LogoColor.SECONDARY}
                    afSystemName="CareerFix"
                  />
                </div>
              </NavLink>
            </div>
            <ul>
              <li className="list">
                <NavLink to={"/"}>Hem</NavLink>
              </li>
              <li className="list">
                <NavLink to={"/about"}>Om Oss</NavLink>
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
              <div className="logoWrapper">
                <Link to="/">
                  <DigiLogo
                    afVariation={LogoVariation.LARGE}
                    afColor={LogoColor.SECONDARY}
                    afSystemName="CareerFix"
                  />
                </Link>
              </div>
            </div>
          </DigiFooter>
        </JobAdsContext.Provider>
      </SearchTextContext.Provider>
    </FilterContext.Provider>
  );
};

export default Layout;
