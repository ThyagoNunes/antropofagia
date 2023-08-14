import gustavoGrota from "../assets/gustavoGrota.png";

export function Represented() {
  return (
    <>
      <div className="mb:w-full sm:bg-pink-400 p-4 w-full h-[90vh] bg-white text-black 2xl:flex 2xl:flex items-center justify-between text-[5vh] -leading-[50px]">
        <div className="mb:flex-col flex flex-col uppercase tracking-[1.2vh]  ">
          <span className="font-light">gabriel marques</span>
          <span className="font-semibold">antropofagia</span>
        </div>
        <small className="mb:flex-col font-bold tracking-[1vh]">
          representado por
        </small>
        <img
          className="mb:flex-col w-[60vh]"
          src={gustavoGrota}
          alt="logo do gustavo grota"
        />
      </div>
    </>
  );
}
