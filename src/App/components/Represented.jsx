import gustavoGrota from "../assets/gustavoGrota.png";

export function Represented() {
  return (
    <>
      <div className="w-full h-[50vh] bg-white text-black mt-[50vh] flex">
        <div className="flex flex-col">
          <span>gabriel marques</span>
          <strong>antropofagia</strong>
        </div>
        <small>representado por</small>
        <img className="w-96" src={gustavoGrota} alt="logo do gustavo grota" />
      </div>
    </>
  );
}
