import { header } from "../photos";

export function Header() {
  return (
    <>
      <img
        className="mb:w-screen w-full "
        src={header.cover}
        alt={header.alternative}
      />
    </>
  );
}
