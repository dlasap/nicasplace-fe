import react, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ImagesSlider = ({ images }) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox
        onClickOutsideToClose={() => setToggler(!toggler)}
        exitFullscreenOnClose={true}
        toggler={toggler}
        type="image"
        sources={images ?? []}
      />
    </>
  );
};

export default ImagesSlider;
