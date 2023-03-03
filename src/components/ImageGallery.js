import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./styles/ImageGallery.css";
import ImageList from "./ImageList";

// const images2 = [
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },

//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//   },
// ];

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(-1);
  const { tags, caption, alt } = images;

  const slides = images.map((item) => ({
    src: item,
  }));

  const image_sets = images.map((item) => {
    return {
      src: item,
      width: 320,
      height: 212,
      tags: [
        // { value: "Ocean", title: "Ho" },
      ],
    };
  });

  const handleClick = (index, item) => setIndex(index);
  return (
    <div>
      <Gallery rowHeight={300} maxRows={2} margin={2} onClick={handleClick} enableImageSelection={false} images={image_sets} />
      <Lightbox className="lightbox" slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  );
};

export default ImageGallery;
