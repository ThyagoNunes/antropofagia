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
          firstAlt="casal com roupa da marca FILA, coleção do esporte tênis"
          secondAlt="Mulher encima da cadeira com roupa da marca FILA, coleção do esporte tênis"
        />
        <PairPhotos
          firstPhoto={photos.anotherPlace.firstPhoto}
          secondPhoto={photos.anotherPlace.secondPhoto}
          firstAlt="Homem com brincos, roupa rosa e cabelo pintado de azul"
          secondAlt="três pessoas onde tem dois homem um para frente do outro posando e simulando o toque um no outro enquanto uma mulher observa com a mão na cintura"
        />
        <PairPhotos
          firstPhoto={photos.fila.thirdPhoto}
          secondPhoto={photos.fila.fourthPhoto}
          firstAlt="casal com roupa da marca FILA, coleção do esporte tênis observando o horizonte"
          secondAlt="três jovens em uma quadra do esporte tênis com roupas da marca fila. um deles estão olhando para cima e outros dois para o lado direito deles, sendo um homem e umma mulher"
        />
        <PairPhotos
          firstPhoto={photos.sickyMag.firstPhoto}
          secondPhoto={photos.sickyMag.secondPhoto}
          firstAlt="uma mulher posando com colar de pérolas e com a mão na cabeça"
          secondAlt="Uma mulher com vestido preto em destaque dourado posando para foto com o braço direito para cima e com a mão direita no ouvido esquerdo"
        />
        <SinglePhoto
          firstPhoto={photos.shop2Gether.firstPhoto}
          firstAlt="Um casal de homem e mulher deitados em cadeiras de praia e na praia. o homem olhando fixamente para câmera e a mulher olhando horizontalmente"
        />
        <PairPhotos
          firstPhoto={photos.shop2Gether.secondPhoto}
          secondPhoto={photos.shop2Gether.thirdPhoto}
          firstAlt="Mulher sentada com vestido amarelo em uma embarcação marítma olhando para ser fotografada"
          secondAlt="Casal de homem e mulher, o homem com blusa preta observando a camera ao ser fotografado e a mulher olhando horizontalmente enquanto fotografada"
        />
        <PairPhotos
          firstPhoto={photos.harpersBazaar.firstPhoto}
          secondPhoto={photos.harpersBazaar.secondPhoto}
          firstAlt="mulher de vestido posando para frente da câmera e com fundo de praia e prédios urbanos"
          secondAlt="Homem olhando de cima para baixo para câmera enquanto fotagrado e atrás dele contém vários algodões doces"
        />
        <PairPhotos
          firstPhoto={photos.theSuper.firstPhoto}
          secondPhoto={photos.theSuper.secondPhoto}
          firstAlt="Mulher maquiada com os braços levantados, olhando fizamente para frente e usando um vestido azul"
          secondAlt="Mulher com as mãos na cintura, vestido vermelho e olhando fixamente para o seu lado direito"
        />
        <PairPhotos
          firstPhoto={photos.theSuper.thirdPhoto}
          secondPhoto={photos.theSuper.fourthPhoto}
          firstAlt="Mulher com vestido verde piscina e sombra rosa posando para foto enquanto o cabelo está balançando"
          secondAlt="Mulher com vestido verde sendo fotografada com metade do corpo aparente a luz e a outra metade escondida em uma sombra"
        />
        <PairPhotos
          firstPhoto={photos.clamiDesign.firstPhoto}
          secondPhoto={photos.clamiDesign.secondPhoto}
          firstAlt="Mulher em cima de uma cadeira com roupa de natação e touca simulando um mergulho"
          secondAlt="Mulher sentada em uma cadeira, usando um vestido de listras colorido, usando sandália de salto, em frente a uma porta e observando pela fechadura da porta o outro lado enquanto a porta está aberta "
        />
        <PairPhotos
          firstPhoto={photos.mundoDoEnxoval.firstPhoto}
          secondPhoto={photos.mundoDoEnxoval.secondPhoto}
          firstAlt="Homem com várias toalhas e lençóis enroladas em sua cabeça mostrando apenas seu rosto"
          secondAlt="Mulher em pé vestida com lençois e parte das costas do seu vestido tem travesseiros, o braço direito dela está apoiado em sua cintura enquanto o esquerdo está com a mão apoiada abaixo do seu seio esquerdo"
        />
        <PairPhotos
          firstPhoto={photos.hoodMood.firstPhoto}
          secondPhoto={photos.hoodMood.secondPhoto}
          firstAlt="Um homem em pé com as mãos na cintura, usando casaco e shorte de algodão na cor rosa enquanto olha fixamente para frente com a cabeça inclinada para o ombro direito"
          secondAlt="lateral de uma mulher apenas do tronco pra cima e até somente o final do lábio superior, vestindo um casaco azul e com a mão direita segurando o capuz do casaco apenas com o dedo polegar e maior de todos. "
        />
        <PairPhotos
          firstPhoto={photos.pedroTrindade.firstPhoto}
          secondPhoto={photos.pedroTrindade.secondPhoto}
          firstAlt="ser humano de costas com casaco laranja, vestido laranja, bolsa de ombro branca e com os braços abertos com o cotovelo levemente inclinados"
          secondAlt="Homem está em pé na praia com 2 bandeiras atrás dele na cor rosa e aparentemente está amarrada uma na outra "
        />
        <PairPhotos
          firstPhoto={photos.manuGavassi.firstPhoto}
          secondPhoto={photos.manuGavassi.secondPhoto}
          firstAlt="cantora MANU GAVASSI em pé com calça nos tons cinza e branco, sapato da marca puma na cor branca com detalhes creme e rosa claro, blazer branco, perna esquerda está acima de uma cadeira com a mão esquerda apoiando sobre a perna e o outro braço está erguendo um drone como se fosse um avião de brinquado e por fim ela está observando o drone"
          secondAlt="Cantora MANU GAVASSI está deitada em uma cadeira na transversal, com a perna direita dobrada em formato de /\ e a mão esquerda apoiada sobre o queixo enquanto olhada para o horizonte"
        />
        <SinglePhoto
          firstPhoto={photos.forcaStudio}
          firstAlt="um homem e uma mulher com roupas nas cores preto e branca, a mulher está com óculos escuros futurista e ambos estão posando para uma terceira pessoa que também está com roupa preta e branca com uma câmera na mão. Esse casal que está posando "
        />
        <PairPhotos
          firstPhoto={photos.reflektor.firstPhoto}
          secondPhoto={photos.reflektor.secondPhoto}
          firstAlt="Mulher completamente despida de roupas com o rosto refletindo como se fosse um refletor no alto de uma pedra com uma árvore atrás dela, ela está sendo fotografada de longe por alguém mais abaixo"
          secondAlt="Foto de perfil de uma mulher despida de roupas da metade do tronco pra cima, rosto está com uma máscara que faz papel de refletor e ela está olhando para o horizonte."
        />
        <PairPhotos
          firstPhoto={photos.tovelo.firstPhoto}
          secondPhoto={photos.tovelo.secondPhoto}
          firstAlt="cantora tove lo maquiada antes ou depois do show lolapolloza, estilo de foto 3x4 e ela está com uma maçã na cabeça como se fosse um alvo"
          secondAlt="foto 3x4 da cantora tove lo maquiada antes ou depois do show em formato polaroid e com uma maçã no ombro simulando um alvo "
        />
        <PairPhotos
          firstPhoto={photos.birds.firstPhoto}
          secondPhoto={photos.birds.secondPhoto}
          firstAlt="Mulher em pé no meio da mata em área com céu aberto com blusa de manga longa na cor lanranja, calça social na cor marrom, salto plataforma cor rpeto, lenço branco com verde na cabeça, com um drone posado em seu braço esquerdo, enquanto isso ela observa como se fosse um pássaroe a mão direita a caminho do drone como se fosse tocar no drone. "
          secondAlt="Foto de perfil de uma mulher com cabelo branco e curto, na foto tambeḿ tem um drone na frente de seu rosto e sobrevoando. A mulher está olahdno para o céu e não para o drone."
        />
        <PairPhotos
          firstPhoto={photos.workers.firstPhoto}
          secondPhoto={photos.workers.secondPhoto}
          firstAlt="Foto de perfil 3x4 de uma mulher com colar prateado, rosto com metade coberto por sombra e outra metade amostra a luz, cabelo escuro e curto"
          secondAlt="Foto de perfil 3x4, mulher com cabelo grande um penteado um tanto diferente dos padrões, maquiada e com blazer vinho"
        />
        <PairPhotos
          firstPhoto={photos.workers.thirdPhoto}
          secondPhoto={photos.workers.fourthPhoto}
          firstAlt="Mulher em pé encostada na parede do banheiro com o tronco inclinado para frente, observando sendo enquadrada pela câmera, de fundo tem um mictório"
          secondAlt="Foto 3x4 de um homem ruivo olhando fixamente para câmera e com uma blusa branca"
        />
        <PairPhotos
          firstPhoto={photos.bonitoPraChover.firstPhoto}
          secondPhoto={photos.bonitoPraChover.secondPhoto}
          firstAlt="Mulher sentada em uma pedra na praia com biquini azul e máscara de mergulhador observando ser fotografada "
          secondAlt="foto de perfil esquerdo de homem sem camisa, com short, na praia exibindo uma lula e olhando fixamente para frente"
        />
        <PairPhotos
          firstPhoto={photos.stateOfEmergency}
          secondPhoto={photos.whereTheWild}
          firstAlt="foto 3x4 de uma mulher com cabelo curto, onde ela olha fixamente para câmera com a boca entre aberta, Olhos e boca ao redor na cor vermelha e usando um colar de couro preto simulando apetrechos de heavy metal com espinhos de aço"
          secondAlt="foto de perfil de criança ruiva olhando para baixo com a língua de fora e pintada de vermelho como se fosse corante de bala"
        />

        <PairPhotos
          firstPhoto={photos.birdsStudy}
          secondPhoto={photos.iLoveYou}
          firstAlt="Foto de mulher em pé com cabelos jogados ao vento, blazer marrom, calça xadrez vermelha com preto e no céu logo atrás da cabeça dela está passando um drone"
          secondAlt="Mulher simulando estar beijando alguém com os braços cruzados por trás de um casaco, metade do seu rosto está dentro do capuz do casado e outra metade está para fota."
        />
        <PairPhotos
          firstPhoto={photos.twinPeaks.firstPhoto}
          secondPhoto={photos.twinPeaks.secondPhoto}
          firstAlt="casal de homens estão em pé de mãos dadas enclinados para trás e olhando pra cima, um está com short e casaco azul claro e outro está com blusa de manga cumprida e short branco"
          secondAlt="2 cabeças de talvez irmãos gêmeos poiadas uma pra frente da outra sentindo a energia um do outro, ambos de olhos fechados"
        />

        <PairPhotos
          firstPhoto={photos.eden2077.firstPhoto}
          secondPhoto={photos.eden2077.secondPhoto}
          firstAlt="casal de homem e mulher de perfil foto 3x4 onde o homem está olhando fixamente para frente e do lado uma mulher olhando fixamente para o homem. MNulher com blusa branca e casaco preto e homem com blusa branca modelo gola role"
          secondAlt="foto 3x4 de homem com blusa gola role, camisa por cima no tom verde e vermelho e o mesmo está segurando uma maça com um instrumento que simula um pegador"
        />
        <PairPhotos
          firstPhoto={photos.perfectBody}
          secondPhoto={photos.isolation}
          firstAlt="Jovem garoto tirando foto em frente ao espelho esbanjando seu corpo AESTHETIC em frente ao espelho com seu celular e a outra mão elevada até o ombro e erguendo sua camisa para mostrar seu tronco"
          secondAlt="Mulher em pé despida de um conjunto íntimo na cor branca, usando capacete e cortando cebelas em cima de uma tabua de madeira com uma faca que por sua vez está em cima de um pedestral de coluna grego "
        />
      </div>
    </>
  );
}
