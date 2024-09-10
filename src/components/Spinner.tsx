import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";
import "../sass/spinner.scss";

export const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <DigiLoaderSpinner
        afSize={LoaderSpinnerSize.LARGE}
        afText="Laddar..."
      ></DigiLoaderSpinner>
    </div>
  );
};

export default Spinner;
