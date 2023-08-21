import { LuX } from "react-icons/lu";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Modal({ image, alt, onClose }) {
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageWidth(img.width);
    };
  }, [image]);

  const increasedImageSpace = imageWidth > 1400;

  const modalWidthClasses = increasedImageSpace
    ? "mb:w-[800px] md:w-[1000px] xxl:w-[1800px]"
    : "mb:w-[400px] md:w-[650px] xxl:w-[700px]";

  const imageWidthClasses = increasedImageSpace
    ? "mb:w-[700px] md:w-[950px] xxl:w-[1800px]"
    : "mb:w-[400px] md:w-[650px] xxl:h-auto";

  return (
    <div
      className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-lg"
      onClick={handleBackdropClick}
    >
      <div
        className={`${modalWidthClasses} flex flex-col items-end justify-center shadow-lg
      mb:max-w-screen-lg mb:p-4 mb:mx-auto mb:bg-white mb:bg-opacity-10 mb:hover:bg-white mb:hover:bg-opacity-20 mb:ease-in mb:duration-100 mb:border mb:solid mb:border-zinc-300 mb:rounded-xl
      xxl:max-w-screen-lg xxl:p-10 xxl:mx-auto xxl:bg-white xxl:bg-opacity-10 xxl:hover:bg-white xxl:hover:bg-opacity-20 xxl:ease-in xxl:duration-100 xxl:border xxl:solid xxl:border-zinc-300 xxl:rounded-xl `}
      >
        <LuX
          className="mb:my-1 mb:text-2xl mb:mb-8 text-white text-opacity-80 hover:text-white hover:text-opacity-20 ease-in duration-100"
          onClick={onClose}
        />

        <img src={image} alt={alt} className={imageWidthClasses} />
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
