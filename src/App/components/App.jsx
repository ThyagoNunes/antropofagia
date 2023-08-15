import { Header } from "./Header";
import { photos } from "../photos";

import { SinglePhoto } from "./SinglePhoto";
import { PairPhotos } from "./PairPhotos";

export function App() {
  console.log(typeof paulaRaia1);
  return (
    <>
      {/* se você mexer no screen da div abaixo você se tornará um chupado de pirocas */}
      <div className="mb:w-screen  xxl:w-screen bg-white">
        <Header />

        <PairPhotos
          firstPhoto={photos.paulaRaia.firstPhoto}
          secondPhoto={photos.paulaRaia.secondPhoto}
          firstAlt="um deserto com uma la ursa na cor azul e amarelo e 2 mulheres com roupas no mesmo tom creme"
          secondAlt="um deserto com 3 mulheres desfilando com roupas coloridas"
        />
        <PairPhotos
          firstPhoto={photos.paulaRaia.thirdPhoto}
          secondPhoto={photos.paulaRaia.fourthPhoto}
          firstAlt="Mulheres vestidas de vermelho e com chápeu vermelho observando drone"
          secondAlt="Moça com chápeu de palha pousando pra foto espontânea"
        />
        <PairPhotos
          firstPhoto={photos.storiesCollective.firstPhoto}
          secondPhoto={photos.storiesCollective.secondPhoto}
          firstAlt="Mulher vestida de preto olhando para cima e erguento os braços com um chápeu amarelo na mão direita e chápeu rosa na mão esquerda"
          secondAlt="duas mulheres posando para foto, uma mulher de roupa preta com chápeu e a outra mulher com uma blusa que parece feno"
        />
        <PairPhotos
          firstPhoto={photos.fila.firstPhoto}
          secondPhoto={photos.fila.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.anotherPlace.firstPhoto}
          secondPhoto={photos.anotherPlace.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.fila.thirdPhoto}
          secondPhoto={photos.fila.fourthPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.sickyMag.firstPhoto}
          secondPhoto={photos.sickyMag.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <SinglePhoto firstPhoto={photos.shop2Gether.firstPhoto} firstAlt="" />
        <PairPhotos
          firstPhoto={photos.shop2Gether.secondPhoto}
          secondPhoto={photos.shop2Gether.thirdPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.harpersBazaar.firstPhoto}
          secondPhoto={photos.harpersBazaar.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.theSuper.firstPhoto}
          secondPhoto={photos.theSuper.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.theSuper.thirdPhoto}
          secondPhoto={photos.theSuper.fourthPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.clamiDesign.firstPhoto}
          secondPhoto={photos.clamiDesign.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.mundoDoEnxoval.firstPhoto}
          secondPhoto={photos.mundoDoEnxoval.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.hoodMood.firstPhoto}
          secondPhoto={photos.hoodMood.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.pedroTrindade.firstPhoto}
          secondPhoto={photos.pedroTrindade.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.manuGavassi.firstPhoto}
          secondPhoto={photos.manuGavassi.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <SinglePhoto firstPhoto={photos.forcaStudio} firstAlt="" />
        <PairPhotos
          firstPhoto={photos.reflektor.firstPhoto}
          secondPhoto={photos.reflektor.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.tovelo.firstPhoto}
          secondPhoto={photos.tovelo.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.birds.firstPhoto}
          secondPhoto={photos.birds.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.workers.firstPhoto}
          secondPhoto={photos.workers.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.workers.thirdPhoto}
          secondPhoto={photos.workers.fourthPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.bonitoPraChover.firstPhoto}
          secondPhoto={photos.bonitoPraChover.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.stateOfEmergency}
          secondPhoto={photos.whereTheWild}
          firstAlt=""
          secondAlt=""
        />

        <PairPhotos
          firstPhoto={photos.birdsStudy}
          secondPhoto={photos.iLoveYou}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.twinPeaks.firstPhoto}
          secondPhoto={photos.twinPeaks.secondPhoto}
          firstAlt=""
          secondAlt=""
        />

        <PairPhotos
          firstPhoto={photos.eden2077.firstPhoto}
          secondPhoto={photos.eden2077.secondPhoto}
          firstAlt=""
          secondAlt=""
        />
        <PairPhotos
          firstPhoto={photos.perfectBody}
          secondPhoto={photos.isolation}
          firstAlt=""
          secondAlt=""
        />
      </div>
    </>
  );
}
