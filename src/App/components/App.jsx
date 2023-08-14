import { Header } from "./Header";
import { photos } from "../photos";

import { InfoHeader } from "./InfoHeader";
import { Antropofagia } from "./Antropofagia";
import { PairPhotos } from "./PairPhotos";
export function App() {
  console.log(typeof paulaRaia1);
  return (
    <>
      {/* se você mexer no screen da div abaixo você se tornará um chupado de pirocas */}
      <div className="mb:w-screen  xxl:w-screen bg-white">
        <Header />
        <InfoHeader />
        <Antropofagia fullname="gabriel marques" brand="antropofagia"/>

        <PairPhotos
          firstPhoto={photos.paulaRaia.firstPhoto}
          secondPhoto={photos.paulaRaia.secondPhoto}
          firstAlt="um deserto com uma la ursa na cor azul e amarelo e 2 mulheres com roupas no mesmo tom creme"
          secondAlt="um deserto com 3 mulheres desfilando com roupas coloridas"
          collection="“EDEN 2077” FEATURED AT ARLO PARK’S ART JOURNAL BY DAZED X CONVERSE"
        />
        <PairPhotos
          firstPhoto={photos.paulaRaia.thirdPhoto}
          secondPhoto={photos.paulaRaia.fourthPhoto}
          firstAlt="um deserto com uma la ursa na cor azul e amarelo e 2 mulheres com roupas no mesmo tom creme"
          secondAlt="um deserto com 3 mulheres desfilando com roupas coloridas"
          collection="paula raia"
        />
      </div>
    </>
  );
}
