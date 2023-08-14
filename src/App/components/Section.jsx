import PropTypes from "prop-types";

export function Section(props) {
  return (
    <>
      <div className="flex">
        <img className="w-[50%] " src={props.firstPhoto} alt={props.firstAlt} />
        <img
          className="w-[50%]"
          src={props.secondPhoto}
          alt={props.secondAlt}
        />
        {/*   <span className="relative text-red-700 right-24 -bottom-52 uppercase">
          {props.collection}
        </span> */}
      </div>
    </>
  );
}

Section.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  secondPhoto: PropTypes.string,
  firstAlt: PropTypes.string.isRequired,
  secondAlt: PropTypes.string,
  collection: PropTypes.string.isRequired,
};
