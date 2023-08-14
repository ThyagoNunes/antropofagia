import PropTypes from 'prop-types'
import { photos } from "../photos";

export function Antropofagia(props) {
  return (
    <>
      <div
        className="mb:p-2 mb:w-full mb:h-[40vh] mb:-mt-6 mb:bg-white mb:text-black mb:flex mb:items-center mb:justify-between mb:text-[1.2vh] mb:leading-3  
      xxl:p-8 xxl:mx-4 xxl:w-full xxl:h-[100vh] xxl:bg-white xxl:text-black xxl:flex xxl:items-center xxl:justify-between xxl:text-[3vh] xxl:leading-[30px]  "
      >
        <div
          className=" mb:flex mb:flex-col mb:uppercase mb:tracking-[.08vh] mb:text-xs mb:leading-3
        xxl:flex xxl:flex-col xxl:uppercase xxl:tracking-[1.2vh] xxl:text-3xl  xxl:leading-7 "
        >
          <span className="font-medium ">{props.fullname}</span>
          <span className="font-bold">{ props.brand }</span>
        </div>
        <small className="mb:font-bold mb:tracking-[.3vh] xxl:font-bold xxl:tracking-[1vh] ">
          representado por
        </small>
        <img
          className="mb:w-[12vh] xxl:w-[60vh]"
          src={photos.gustavoGrota}
          alt="logo do gustavo grota"
        />
      </div>
    </>
  );
}

Antropofagia.propTypes = {
  fullname: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,

}

/* p-4 w-full h-[90vh] bg-white text-black flex items-center justify-between text-[5vh] -leading-[50px] */
/* flex flex-col uppercase tracking-[1.2vh]  */
/* font-bold tracking-[1vh] */
/* w-[60vh] */
