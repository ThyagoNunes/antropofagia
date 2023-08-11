import { ImageHome } from "./ImageHome";
import { Name } from "./Name";
import { Represented } from "./Represented";
export function App() {
  return (
    <>
      <div className="bg-white">
        <div>
          <Name />
          <ImageHome />
          <Represented />
        </div>
      </div>
    </>
  );
}
