import PropTypes from "prop-types";

export function SinglePhoto(props) {
  return (
    <>
      <div className="flex">
        <img
          onClick={props.onClick}
          className="w-[100%]"
          src={props.firstPhoto}
          alt={props.firstAlternativeText}
        />
      </div>
    </>
  );
}

SinglePhoto.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  firstAlternativeText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
