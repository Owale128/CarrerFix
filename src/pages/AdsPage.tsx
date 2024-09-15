import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DisplayAds } from "../components/DisplayAds";
import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import { useContext, useEffect, useReducer} from "react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { SearchTextContext } from "../context/SearchTextContext";
import { FilterContext } from "../context/FilterContext";
import { IJobAd } from "../models/IJobAd";
import Spinner from "../components/Spinner";
import { CurrentPagecContext } from "../context/CurrentPageContext";
import { ActionType, AdsReducer, initialState } from "../reducers/adsReducer";

export const AdsPage = () => {
  const [state, dispatch] = useReducer(AdsReducer, initialState)
  const [getAdData, allAds] = useAds();
  const { searchText } = useContext(SearchTextContext);
  const { sevenDaySpan } = useContext(FilterContext);

  const limit = 10;

  useEffect(() => {
    const storedSearchText = localStorage.getItem("storedSearchText");
    const storedAds = localStorage.getItem("storedAds");

    if (storedSearchText) {
      dispatch({type: ActionType.SET_SEARCH_TEXT, payload: storedSearchText})
    }
    if (storedAds) {
      dispatch({type: ActionType.SET_ALL_ADS, payload: JSON.parse(storedAds)})
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (searchText.trim() !== "") {
        dispatch({type: ActionType.SET_LOADING, payload: true})
        try {
          const adsData = await getAdData(searchText);
          localStorage.setItem("storedAds", JSON.stringify(adsData.ads));
          localStorage.setItem("storedSearchText", searchText);
          dispatch({type: ActionType.SET_ALL_ADS, payload: adsData.ads})
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          dispatch({ type: ActionType.SET_LOADING, payload: false})
        }
      }
    };

    fetchData();
  }, [state.searchText, getAdData]);

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

      const totalPages = (Math.ceil(sorted.length / limit));
      dispatch({type: ActionType.SET_TOTAL_PAGES, payload: totalPages})

      const start = (state.currentPage - 1) * limit;
      const end = start + limit;
      const adsToShow = sorted.slice(start, end);
      dispatch({ type: ActionType.SET_FILTERED_ADS, payload: adsToShow})

      localStorage.setItem("currentPage", state.currentPage.toString());
    } catch (error) {
      console.error("Error filtering or sorting ads", error);
    }
  }, [state.allAds, sevenDaySpan, state.currentPage]);

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const pageNumber = e.detail;
    dispatch({type: ActionType.SET_CURRENT_PAGE, payload: pageNumber})
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (state.loading) {
    return <Spinner />;
  }

return (
    <>
      <CurrentPagecContext.Provider value={{ currentPage: state.currentPage, setCurrentPage: (page) => dispatch({ type: ActionType.SET_CURRENT_PAGE, payload: page }) }}>
        <SearchForm getAdData={getAdData} setCurrentPage={(page) => dispatch({ type: ActionType.SET_CURRENT_PAGE, payload: page })} />
      </CurrentPagecContext.Provider>

      <section className="searchHitsSection">
        <h3>{state.allAds.length} sökträffar</h3>
        <p> | </p>
        <h3>{state.totalPages} antal sidor</h3>
      </section>

      <DisplayAds ads={state.filteredAds} />

      <section className="paginationSection">
        <DigiNavigationPagination
          afTotalPages={state.totalPages}
          afInitActivePage={state.currentPage}
          onAfOnPageChange={handlePageChange}
          af-total-results={state.allAds.length}
          af-current-result-start={(state.currentPage - 1) * limit + 1}
          afCurrentResultEnd={Math.min(state.currentPage * limit, state.allAds.length)}
          afResultName="annonser"
        />
      </section>
    </>
  );
};
