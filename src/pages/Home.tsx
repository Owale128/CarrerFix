import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import ShowRecentAds from "../components/ShowRecentAds";
import SuggestedAds from "../components/SuggestedAds";
import logoImg from "../assets/logoImg.png";
import {
  DigiButton,
  DigiIconArrowDown,
  DigiLayoutBlock,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import {
  ButtonSize,
  ButtonVariation,
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import { useContext } from "react";
import { CurrentPagecContext } from "../context/CurrentPageContext";

export const Home = () => {
  const [getAdData] = useAds();
  const { setCurrentPage } = useContext(CurrentPagecContext);

  const handleScroll = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SearchForm getAdData={getAdData} setCurrentPage={setCurrentPage} />
      <SuggestedAds />

      <section className="bannerSection">
        <div className="image-container">
          <DigiLayoutBlock
            afVariation={LayoutBlockVariation.TRANSPARENT}
            afContainer={LayoutBlockContainer.NONE}
            className="info"
          >
            <DigiTypography>
              <blockquote>
                <h1>Se våra senaste annonser</h1>
                <DigiButton
                  afSize={ButtonSize.LARGE}
                  afVariation={ButtonVariation.PRIMARY}
                  afFullWidth={false}
                  onClick={handleScroll}
                >
                  Kom igång
                  <DigiIconArrowDown slot="icon-secondary" />
                </DigiButton>
              </blockquote>
            </DigiTypography>
          </DigiLayoutBlock>
        </div>

        <div className="wrapper">
          <img src={logoImg} alt="logoImg" className="logo" />
        </div>
      </section>

      <ShowRecentAds />
    </>
  );
};
