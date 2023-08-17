import PropTypes from "prop-types";

export function SinglePhoto(props) {
  return (
    <>
      <div className="flex">
        <img
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
};
