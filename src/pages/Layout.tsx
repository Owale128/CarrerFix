import { NavLink, Outlet } from "react-router-dom";
import { JobAdsContext } from "../contexts/JobAdsContext";
import { useState } from "react";
import { IJobAd } from "../models/IJobAd";

const Layout = () => {
  const [jobAds, setJobAds] = useState<IJobAd[]>([]);

  return (
    <JobAdsContext.Provider value={{ jobAds, setJobAds }}>
      <header>
        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li>
            <NavLink to={"/ads"}>Annonser</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </JobAdsContext.Provider>
  );
};

export default Layout;
