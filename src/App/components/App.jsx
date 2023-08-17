import { Header } from "./Header";
import { photos } from "../photos";

import { SinglePhoto } from "./SinglePhoto";
import { PairPhotos } from "./PairPhotos";

export function App() {
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
            />
          ) : (
            <SinglePhoto
              key={photo.key}
              firstPhoto={photo.collection.firstPhoto}
              firstAlternativeText={photo.alternatives.firstAlternative}
            />
          )
        )}
      </div>
    </>
  );
}
