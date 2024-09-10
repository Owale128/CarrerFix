import "../sass/AboutPage.scss";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="aboutPage">
      <section className="topSection">
        <div className="topContent">
          <h1>Om Vårt Projekt</h1>
          <p>
            Vi är en grupp studenter som har utvecklat en webbapplikation med
            React som efterliknar Arbetsförmedlingens officiella webbplats. Vårt
            mål var att skapa en realistisk och användarvänlig plattform för att
            lära oss mer om webbutveckling och React.
          </p>
        </div>
      </section>
      <section className="middleSection">
        <div className="middleContent"></div>
      </section>
      <section className="bottomSection">
        <div className="bottomContent">
          <h2>
            Hitta <span>drömjobbet</span> som tar din karriär till nästa nivå!
          </h2>
          <p>
            Utforska dina karriärmöjligheter med oss! Vi erbjuder ett brett
            utbud av spännande jobbmöjligheter som kan passa just dina
            färdigheter och intressen. Ta första steget mot din drömkarriär
            idag!
          </p>
          <DigiButton
            afSize={ButtonSize.LARGE}
            afVariation={ButtonVariation.SECONDARY}
            afFullWidth={false}
            onClick={handleButtonClick}
          >
            Sök jobb
          </DigiButton>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
