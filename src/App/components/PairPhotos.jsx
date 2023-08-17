import PropTypes from "prop-types";

export function PairPhotos(props) {
  return (
    <>
      <div className="flex">
        <img
          title={props.firstAlternativeText}
          onClick={() => console.log(props.firstAlternativeText)}
          className="w-[50%] "
          src={props.firstPhoto}
          alt={props.firstAlternativeText}
        />
        <img
          onClick={() => console.log(props.secondAlternativeText)}
          className="w-[50%]"
          src={props.secondPhoto}
          alt={props.secondAlternativeText}
        />
      </div>
    </>
  );
}

PairPhotos.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  secondPhoto: PropTypes.string.isRequired,
  firstAlternativeText: PropTypes.string.isRequired,
  secondAlternativeText: PropTypes.string.isRequired,
};

/* xxl:relative xxl:text-white xxl:text-4xl xxl:bottom-20 xxl:text-end xxl:leading-[0px] xxl:right-10 xxl:uppercase xxl:mt-2" */
