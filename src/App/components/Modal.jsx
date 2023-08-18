import { LuX } from "react-icons/lu";

import PropTypes from "prop-types";

function Modal({ image, alt, onClose }) {
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
      onClick={handleBackdropClick}
    >
      <div className="max-w-screen-lg p-4 mx-auto bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-10 ease-in duration-100 rounded-xl flex flex-col items-end justify-center shadow-lg">
        <LuX
          className="my-4 text-4xl text-white hover:text-white hover:text-opacity-60 ease-in duration-100"
          onClick={onClose}
        />

        <img src={image} alt={alt} className="w-[1200px] h-auto" />
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
