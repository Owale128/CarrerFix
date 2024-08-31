import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useState } from "react";
import { IJobAd } from "../models/IJobAd";
import { SearchTextContext } from "../contexts/SearchTextContext";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      <JobAdsContext.Provider value={{ jobAds, setJobAds }}>
        <header>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </JobAdsContext.Provider>
    </SearchTextContext.Provider>
  );
};

export default Layout;
