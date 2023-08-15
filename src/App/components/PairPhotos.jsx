import PropTypes from "prop-types";

export function PairPhotos(props) {
  return (
    <>
      <div className="flex">
        <img
          onClick={() => console.log(props.firstAlt)}
          className="w-[50%] "
          src={props.firstPhoto}
          alt={props.firstAlt}
        />
        <img
          onClick={() => console.log(props.secondAlt)}
          className="w-[50%]"
          src={props.secondPhoto}
          alt={props.secondAlt}
        />
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
