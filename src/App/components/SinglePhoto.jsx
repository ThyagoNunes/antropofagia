import PropTypes from "prop-types";

export function SinglePhoto(props) {
  return (
    <>
      <div className="flex">
        <img
          onClick={() => console.log(props.firstAlt)}
          className="w-[100%]"
          src={props.firstPhoto}
          alt={props.firstAlt}
        />
      </div>
    </>
  );
}

SinglePhoto.propTypes = {
  firstPhoto: PropTypes.string.isRequired,
  firstAlt: PropTypes.string.isRequired,
};

/* xxl:relative xxl:text-white xxl:text-4xl xxl:bottom-20 xxl:text-end xxl:leading-[0px] xxl:right-10 xxl:uppercase xxl:mt-2" */
