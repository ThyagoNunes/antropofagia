import { Header } from "./Header";
import { photos } from "../photos";

import { Antropofagia } from "./Antropofagia";
import { SinglePhoto } from "./SinglePhoto";
import { PairPhotos } from "./PairPhotos";

export function App() {
  console.log(typeof paulaRaia1);
  return (
    <>
      {/* se você mexer no screen da div abaixo você se tornará um chupado de pirocas */}
      <div className="mb:w-screen  xxl:w-screen bg-white">
        <Header />

        <Antropofagia fullname="gabriel marques" brand="antropofagia" />

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
      </div>
    </>
  );
}
