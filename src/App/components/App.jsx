import { useState } from "react";
import { Header } from "./Header";
import { photos } from "../photos";
import { SinglePhoto } from "./SinglePhoto";
import { PairPhotos } from "./PairPhotos";
import Modal from "./Modal";

export function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");

  function openModal(image, alt) {
    setSelectedImage(image);
    setSelectedImageAlt(alt);
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <div className="">
        <Header />

        {photos.map((photo) =>
          Object.keys(photo.collection).length > 1 ? (
            <PairPhotos
              key={photo.key}
              firstPhoto={photo.collection.firstPhoto}
              secondPhoto={photo.collection.secondPhoto}
              firstAlternativeText={photo.alternatives.firstAlternative}
              secondAlternativeText={photo.alternatives.secondAlternative}
              onClick={(image, alt) => openModal(image, alt)}
            />
          ) : (
            <SinglePhoto
              key={photo.key}
              firstPhoto={photo.collection.firstPhoto}
              firstAlternativeText={photo.alternatives.firstAlternative}
              onClick={() =>
                openModal(
                  photo.collection.firstPhoto,
                  photo.alternatives.firstAlternative
                )
              }
            />
          )
        )}

        {isModalVisible && (
          <Modal
            image={selectedImage}
            alt={selectedImageAlt}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}
