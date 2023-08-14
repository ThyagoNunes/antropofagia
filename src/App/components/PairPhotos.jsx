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
      <p
        className=" mb:relative mb:text-white mb:text-[16px] mb:bottom-2 max-w-[200px] mb:leading-[0px] text-end mb:uppercase mb:mt-2
      xxl:relative xxl:text-white xxl:text-2xl xxl:bottom-20 xxl:text-end xxl:leading-[0px] xxl:right-10 xxl:uppercase xxl:mt-2"
      >
        {props.collection}
      </p>
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
