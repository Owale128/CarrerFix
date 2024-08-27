import { DigiButton } from "@digi/arbetsformedlingen-react";
import "./App.css";
import { ButtonVariation } from "@digi/arbetsformedlingen";

function App() {
  return (
    <DigiButton
      afVariation={ButtonVariation.PRIMARY}
      onAfOnClick={() => console.log("Hallå världen!")}
    >
    Skicka
    </DigiButton>
  );
}

export default App;
