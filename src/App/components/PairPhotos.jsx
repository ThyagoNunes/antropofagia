import PropTypes from "prop-types";

export function PairPhotos(props) {
  return (
    <div className="flex">
      <img
        title={props.firstAlternativeText}
        onClick={() =>
          props.onClick(props.firstPhoto, props.firstAlternativeText)
        }
        className="w-[50%]"
        src={props.firstPhoto}
        alt={props.firstAlternativeText}
      />
      <img
        onClick={() =>
          props.onClick(props.secondPhoto, props.secondAlternativeText)
        }
        className="w-[50%]"
        src={props.secondPhoto}
        alt={props.secondAlternativeText}
      />
    </div>
  );
}

PairPhotos.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  secondPhoto: PropTypes.string.isRequired,
  firstAlternativeText: PropTypes.string.isRequired,
  secondAlternativeText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
