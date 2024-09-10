import { Link, NavLink, Outlet } from "react-router-dom";
import { useReducer, useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { SearchTextContext } from "../context/SearchTextContext";
import { JobAdsContext } from "../context/JobAdsContext";
import { SaveAdsContext } from "../context/SaveAdsContext";
import { DigiIconStarReg } from "@digi/arbetsformedlingen-react";
import { SaveAdReducer } from "../reducers/SaveAdRecucer";
import "../sass/layout.scss";
import {
  DigiFooter,
  DigiLogo,
} from "@digi/arbetsformedlingen-react";
import {
  FooterVariation,
  LogoVariation,
  LogoColor,
} from "@digi/arbetsformedlingen";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const saved = JSON.parse(localStorage.getItem("savedAds") || "[]");
  const [saveAds, dispatch] = useReducer(SaveAdReducer, saved);

  const count = saveAds.length;

  return (
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
  );
};

export default Layout;
