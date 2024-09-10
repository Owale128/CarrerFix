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
  const [getAdData, allAds] = useAds();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortedAds, setSortedAds] = useState<IJobAd[]>([]);
  const [filteredAds, setFilteredAds] = useState<IJobAd[]>([]);
  const { searchText } = useContext(SearchTextContext);
  const { sevenDaySpan } = useContext(FilterContext);
  const [loading, setLoading] = useState<boolean>(false)
  
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      if (searchText.trim() !== "") {
        setLoading(true);
        try {
          await getAdData(searchText);
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
    

    const now = new Date().getTime();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

    const filtered = allAds.filter((ad: IJobAd) => {
      return sevenDaySpan
        ? new Date(ad.publication_date).getTime() >= sevenDaysAgo
        : true;
    });

    const sorted = filtered.sort((a: IJobAd, b: IJobAd) => {
      return (
        new Date(b.publication_date).getTime() -
        new Date(a.publication_date).getTime()
      );
    });

    setSortedAds(sorted);

    setTotalPages(Math.ceil(sorted.length / limit));

    const start = (currentPage - 1) * limit;
    const end = start + limit;
    setFilteredAds(sorted.slice(start, end));
  }, [allAds, sevenDaySpan, currentPage]);

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const pageNumber = e.detail;
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <SearchForm getAdData={getAdData} />
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
              afCurrentResultEnd={Math.min(currentPage * limit, sortedAds.length)}
              afResultName="annonser"
            />
          </section>
       </>
  );
};
