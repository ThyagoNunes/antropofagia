import { photos } from "../photos";

export function Header() {
  return (
    <>
      <img
        className="mb:w-screen w-full "
        src={photos.cover}
        alt="praia com drones, 2 motos, 2 amigos pescando olhando para o mar e um entregador em pé"
      />
    </>
  );
}
