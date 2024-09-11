import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DisplayAds } from "../components/DisplayAds";
import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import { useContext, useEffect, useState } from "react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { SearchTextContext } from "../context/SearchTextContext";
import { FilterContext } from "../context/FilterContext";
import "../sass/pagination&search.scss";
import { IJobAd } from "../models/IJobAd";
import Spinner from "../components/Spinner";

export const AdsPage = () => {
  const [getAdData, allAds, setAllAds] = useAds();
  const currentP = Number(localStorage.getItem("currentPage") || "1");
  const [currentPage, setCurrentPage] = useState(currentP);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredAds, setFilteredAds] = useState<IJobAd[]>([]);
  const { searchText, setSearchText } = useContext(SearchTextContext);
  const { sevenDaySpan } = useContext(FilterContext);
  const [loading, setLoading] = useState<boolean>(false);

  const limit = 10;

  useEffect(() => {
    const storedSearchText = localStorage.getItem("storedSearchText");
    const storedAds = localStorage.getItem("storedAds");
    
    if (storedSearchText) {
      setSearchText(storedSearchText);
    }
    if (storedAds) {
      setAllAds(JSON.parse(storedAds));
    }
  }, [setSearchText]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchText.trim() !== "") {
        setLoading(true);
        try {
          const adsData = await getAdData(searchText);
          localStorage.setItem("storedAds", JSON.stringify(adsData.ads));
          localStorage.setItem("storedSearchText", searchText);
          setAllAds(adsData.ads);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();

  }, [searchText, getAdData]);

  useEffect(() => {
    try {
      const now = new Date().getTime();
      const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

      const filtered = allAds.filter((ad: IJobAd) =>
        sevenDaySpan
          ? new Date(ad.publication_date).getTime() >= sevenDaysAgo
          : true
      );

      const sorted = filtered.sort((a: IJobAd, b: IJobAd) => {
        return (
          new Date(b.publication_date).getTime() -
          new Date(a.publication_date).getTime()
        );
      });

      setTotalPages(Math.ceil(sorted.length / limit));

      const start = (currentPage - 1) * limit;
      const end = start + limit;
      const adsToShow = sorted.slice(start, end);
      setFilteredAds(adsToShow);

      localStorage.setItem("currentPage", currentPage.toString());
    } catch (error) {
      console.error("Error filtering or sorting ads", error);
    }
  }, [allAds, sevenDaySpan, currentPage]);

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const pageNumber = e.detail;
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <SearchForm getAdData={getAdData} setCurrentPage={setCurrentPage} />
      <section className="search-hits-section">
        <h3>{allAds.length} sökträffar</h3>
        <p> | </p>
        <h3>{totalPages} antal sidor</h3>
      </section>

      <DisplayAds ads={filteredAds} />

      <section className="pagination-section">
        <DigiNavigationPagination
          afTotalPages={totalPages}
          afInitActivePage={currentPage}
          onAfOnPageChange={handlePageChange}
          af-total-results={allAds.length}
          af-current-result-start={(currentPage - 1) * limit + 1}
          afCurrentResultEnd={Math.min(currentPage * limit, allAds.length)}
          afResultName="annonser"
        />
      </section>
    </>
  );
};
