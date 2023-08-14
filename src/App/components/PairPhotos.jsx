import PropTypes from "prop-types";

export function PairPhotos(props) {
  return (
    <>
      <div className="flex">
        <img onClick={() => console.log('asdasd')} className="w-[50%] " src={props.firstPhoto} alt={props.firstAlt} />
        <img
          className="w-[50%]"
          src={props.secondPhoto}
          alt={props.secondAlt}
        />
      </div>
      <div
        className=" mb:relative mb:text-white mb:text-[14px] mb:bottom-6 mb:text-end mb:right-2 mb:w- mb:-top-4 mb mb:leading-[0px] mb:uppercase
        xxl:relative xxl:text-white xxl:text-[28px] xxl:bottom-6 xxl:text-end  xxl:leading-[0px] xxl:uppercase "
      >
        {props.collection}
      </div>
    </>
  );
}

PairPhotos.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  secondPhoto: PropTypes.string,
  firstAlt: PropTypes.string.isRequired,
  secondAlt: PropTypes.string,
  collection: PropTypes.string.isRequired,
};


/* xxl:relative xxl:text-white xxl:text-4xl xxl:bottom-20 xxl:text-end xxl:leading-[0px] xxl:right-10 xxl:uppercase xxl:mt-2" */