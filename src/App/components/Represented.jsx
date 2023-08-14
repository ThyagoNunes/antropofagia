import gustavoGrota from "../assets/gustavoGrota.png";

export function Represented() {
  return (
    <>
      <div
        className="mb:p-2 mb:w-full mb:h-[40vh] mb:-mt-6 mb:bg-white mb:text-black mb:flex mb:items-center mb:justify-between mb:text-[1.5vh] mb:leading-3  
      xxl:p-4 xxl:w-full xxl:h-[100vh] xxl:bg-white xxl:text-black xxl:flex xxl:items-center xxl:justify-between xxl:text-[5vh] xxl:leading-[50px]  "
      >
        <div
          className=" mb:flex mb:flex-col mb:uppercase mb:tracking-[.1vh]  
        xxl:flex xxl:flex-col xxl:uppercase xxl:tracking-[1.2vh] "
        >
          <span className="font-light">gabriel marques</span>
          <span className="font-semibold">antropofagia</span>
        </div>
        <small className="font-bold tracking-[.3vh] xxl:font-bold xxl:tracking-[1vh] ">
          representado por
        </small>
        <img
          className="mb:w-[20vh] xxl:w-[60vh]"
          src={gustavoGrota}
          alt="logo do gustavo grota"
        />
      </div>
    </>
  );
}

/* p-4 w-full h-[90vh] bg-white text-black flex items-center justify-between text-[5vh] -leading-[50px] */
/* flex flex-col uppercase tracking-[1.2vh]  */
/* font-bold tracking-[1vh] */
/* w-[60vh] */
