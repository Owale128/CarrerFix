import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DisplayAds } from "../components/DisplayAds";
import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import { useContext, useEffect, useState } from "react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { SearchTextContext } from "../context/SearchTextContext";
import '../sass/pagination&search.scss'

export const AdsPage = () => {
  const [getAdData] = useAds();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { searchText } = useContext(SearchTextContext);
  const [totalAds, setTotalAds] = useState<number>(0);

  const limit = 10;

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const pageNumber = e.detail;
    setCurrentPage(pageNumber);
    console.log(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getData = async () => {
      if (searchText.trim() !== "") {
        const offset = (currentPage - 1) * limit;
        try {
          const totalCount = await getAdData(searchText, offset, limit);
          setTotalPages(Math.ceil(totalCount / limit));

          setTotalAds(totalCount);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getData();
  }, [searchText, currentPage, getAdData]);

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <section className="search-hits-section">
        <h3>{totalAds} sökträffar</h3>
        <p> | </p>
        <h3>{totalPages} antal sidor</h3>
      </section>
      <DisplayAds></DisplayAds>

      <section className="pagination-section">
        <DigiNavigationPagination
          afTotalPages={totalPages}
          afInitActivePage={currentPage}
          onAfOnPageChange={handlePageChange}
          af-total-results={totalAds}
          af-current-result-start={10}
          afResultName="annonser"
        ></DigiNavigationPagination>
      </section>
    </>
  );
};
