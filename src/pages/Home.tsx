import { SearchForm } from "../components/SearchForm";
import { useAds } from "../hooks/useAds";
import ShowRecentAds from "../components/ShowRecentAds";
import SuggestedAds from "../components/SuggestedAds";
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

export const Home = () => {
  const [getAdData] = useAds();

  return (
    <>
      <SearchForm getAdData={getAdData} />
      <SuggestedAds />
      <div className="image-container">
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.TRANSPARENT}
          afContainer={LayoutBlockContainer.NONE}
          className="info"
        >
          <DigiTypography>
            <blockquote>
              <h1>Titta på våra senaste annonser</h1>
              <DigiButton
                afSize={ButtonSize.LARGE}
                afVariation={ButtonVariation.SECONDARY}
                afFullWidth={false}
              >
                Kom igång
                <DigiIconArrowDown slot="icon-secondary" />
              </DigiButton>
            </blockquote>
          </DigiTypography>
        </DigiLayoutBlock>
      </div>

      <ShowRecentAds />
    </>
  );
};
